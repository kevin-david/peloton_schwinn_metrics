// grab the ride ID from the URL in the browser
var rideID = window.location.pathname.split("/");
rideID = rideID[rideID.length - 1];

// peloton doesn't respond with target metrics if credentials are not included
fetch("https://api.onepeloton.com/api/ride/" + rideID + "/details?stream_source=multichannel", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US",
      "peloton-platform": "web",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-requested-with": "XmlHttpRequest"
    },
    "referrer": "https://members.onepeloton.com/classes/player/" + rideID,
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  }).then(function (response) {
    return response.json()
  })
  .then(function (ride) {
    // schwinn mapping, values in order corresponding to peloton
    var schwinnResistance = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 14, 15, 17, 19, 20, 22, 23, 25, 27, 29, 31, 33, 35, 38, 41, 43, 46, 49, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

    var classDuration = Number(ride.ride.duration);

    var cadResistDiv = document.createElement('div');
    cadResistDiv.id = 'cadresist';
    cadResistDiv.style = 'color:white; position:absolute; top: 5%; left:36%; margin-top: 35px';
    cadResistDiv.innerHTML = '<div id="cadresisttxt" style="width:100%;color:white;text-align:center;">metrics start during warmup</div><div style="margin-top:10px;width:100%; height:2px; background-color:#555555"><div id="cadresistprogress" style="width:0%;transition:990ms linear;height:2px;background-color:white"></div></div>';
    document.querySelector("div[class='jw-wrapper jw-reset']").after(cadResistDiv);

    var cadResisTextDiv = document.getElementById('cadresisttxt');
    var cadResisProgressDiv = document.getElementById('cadresistprogress');

    //does the class have target metrics?
    if (ride.target_metrics_data.length ) {
      cadResistDiv.innerHTML = "Class does not have target metrics.";
      setTimeout(function () {
        cadResistDiv.innerHTML = "";
      }, 5000);
      return;
    }

    
    // combinue consecutive cues that are the same
    //   some classes have lots of consecutive segments of only a couple seconds, but all with the same cadence/resistance 
    var rideCue = [];
    //var cue = ride.instructor_cues[0];
    var cue = ride.target_metrics_data.target_metrics[0];
    for (var i = 1; i < ride.target_metrics_data.target_metrics.length; i++) {
      var newCue = ride.target_metrics_data.target_metrics[i];
      if (cue.metrics[0].upper == newCue.metrics[0].upper &&
        cue.metrics[0].lower == newCue.metrics[0].lower &&
        cue.metrics[1].upper == newCue.metrics[1].upper &&
        cue.metrics[1].lower == newCue.metrics[1].lower) {
        cue.offsets.end = newCue.offsets.end;
      } else {
        rideCue.push(cue);
        cue = newCue;
      }
    }
    rideCue.push(newCue);
    ride.instructor_cues = rideCue; //overwrite original cue data


    // set an observer on the timer, triggers running the code when it changes
    //var mPar = document.querySelector("div[data-test-id='video-timer']"),
    var mPar = document.querySelector("div[class='player-overlay-wrapper']"),
      options = {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true
      },
      observer = new MutationObserver(mCallback);

    function mCallback(mutations) {
      // if the course has not started (1 minute warm-up), exit
      var timestamp = document.querySelector("p[data-test-id='time-to-complete']");
      if (!timestamp) return;

      // split the mm:ss timestamp from the peloton GUI
      timestamp = timestamp.innerHTML.split(":");
      if (timestamp.length != 2) return;

      // convert mm:ss timestamp to cue timecode in the API (seconds elapsed)
      var timecode = (classDuration - (Number(timestamp[0]) * 60 + Number(timestamp[1]))) + Number(ride.ride.pedaling_start_offset);

      for (var i = 0; i < ride.target_metrics_data.target_metrics.length; i++) {
        var cue = ride.target_metrics_data.target_metrics[i];

        if (timecode >= Number(cue.offsets.start) && timecode <= Number(cue.offsets.end)) {
          if(cue.segment_type == 'cycling') {
            var cadence;
            var resistance;
            for(var x = 0; x<cue.metrics.length; x++) { 
              switch(cue.metrics[x].name) {
                case 'resistance':
                  resistance = cue.metrics[x];
                  break;
                case 'cadence':
                  cadence = cue.metrics[x];
                  break;
              }
            }
            cadResisTextDiv.innerHTML = "cadence: " + cadence.lower + " - " + cadence.upper + " &nbsp;&nbsp;&nbsp;&nbsp; resistance: " + schwinnResistance[resistance.lower] + " - " + schwinnResistance[resistance.upper] + "&nbsp;&nbsp;&nbsp;&nbsp; (" + resistance.lower + " - " + resistance.upper + ")";
          }

          if(cue.segment_type == 'running') {
            var speed;
            var incline;
            for(var x = 0; x<cue.metrics.length; x++) { 
              switch(cue.metrics[x].name) {
                case 'speed':
                  speed = cue.metrics[x];
                  break;
                case 'incline':
                  incline = cue.metrics[x];
                  break;
              }
            }
            cadResisTextDiv.innerHTML = "speed: " + speed.lower + " - " + speed.upper + " &nbsp;&nbsp;&nbsp;&nbsp; incline: " + incline.lower + " - " + incline.upper;
          }

          if (timecode == Number(cue.offsets.start)) {
            cadResisProgressDiv.style.transition = "none";
            cadResisProgressDiv.style.width = "0%";
          } else {
            cadResisProgressDiv.style.transition = "990ms linear";
            cadResisProgressDiv.style.width = Math.round((((timecode) - cue.offsets.start) / (cue.offsets.end - cue.offsets.start)) * 100) + "%";
          }
          return;
        }

      }

    }

    observer.observe(mPar, options);

  });

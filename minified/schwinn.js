javascript:(function()%7Bvar%20bearerToken%2CrideID%3Dwindow.location.pathname.split(%22%2F%22)%3BrideID%3DrideID%5BrideID.length-1%5D%3Bconst%20auth0Key%3DObject.keys(localStorage).find(e%3D%3Ee.startsWith(%22%40%40auth0spajs%40%40%22))%3Bif(auth0Key)%7Blet%20e%3DJSON.parse(window.localStorage%5Bauth0Key%5D)%3BbearerToken%3De.body.access_token%7Dfetch(%22https%3A%2F%2Fapi.onepeloton.com%2Fapi%2Fride%2F%22%2BrideID%2B%22%2Fdetails%3Fstream_source%3Dmultichannel%22%2C%7Bheaders%3A%7Baccept%3A%22application%2Fjson%2C%20text%2Fplain%2C%20*%2F*%22%2C%22accept-language%22%3A%22en-US%22%2C%22peloton-platform%22%3A%22web%22%2C%22sec-fetch-dest%22%3A%22empty%22%2C%22sec-fetch-mode%22%3A%22cors%22%2C%22sec-fetch-site%22%3A%22same-site%22%2C%22x-requested-with%22%3A%22XmlHttpRequest%22%2CAuthorization%3A%22Bearer%20%22%2BbearerToken%7D%2Creferrer%3A%22https%3A%2F%2Fmembers.onepeloton.com%2Fclasses%2Fplayer%2F%22%2BrideID%2CreferrerPolicy%3A%22no-referrer-when-downgrade%22%2Cbody%3Anull%2Cmethod%3A%22GET%22%2Cmode%3A%22cors%22%2Ccredentials%3A%22include%22%7D).then(function(e)%7Breturn%20e.json()%7D).then(function(e)%7Bvar%20t%3D%5B1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9%2C11%2C12%2C14%2C15%2C17%2C19%2C20%2C22%2C23%2C25%2C27%2C29%2C31%2C33%2C35%2C38%2C41%2C43%2C46%2C49%2C51%2C52%2C53%2C54%2C55%2C56%2C57%2C58%2C59%2C60%2C61%2C62%2C63%2C64%2C65%2C66%2C67%2C68%2C69%2C70%2C71%2C72%2C73%2C74%2C75%2C76%2C77%2C78%2C79%2C80%2C81%2C82%2C83%2C84%2C85%2C86%2C87%2C88%2C89%2C90%2C91%2C92%2C93%2C94%2C95%2C96%2C97%2C98%2C99%2C100%5D%2Cr%3DNumber(e.ride.duration)%2Cs%3Ddocument.createElement(%22div%22)%3Bs.id%3D%22cadresist%22%2Cs.style%3D%22color%3Awhite%3B%20position%3Aabsolute%3B%20top%3A%205%25%3B%20left%3A36%25%3B%20margin-top%3A%2035px%22%2Cs.innerHTML%3D'%3Cdiv%20id%3D%22cadresisttxt%22%20style%3D%22width%3A100%25%3Bcolor%3Awhite%3Btext-align%3Acenter%3B%22%3Emetrics%20start%20during%20warmup%3C%2Fdiv%3E%3Cdiv%20style%3D%22margin-top%3A10px%3Bwidth%3A100%25%3B%20height%3A2px%3B%20background-color%3A%23555555%22%3E%3Cdiv%20id%3D%22cadresistprogress%22%20style%3D%22width%3A0%25%3Btransition%3A990ms%20linear%3Bheight%3A2px%3Bbackground-color%3Awhite%22%3E%3C%2Fdiv%3E%3C%2Fdiv%3E'%2Cdocument.querySelector(%22div%5Bclass%3D'jw-wrapper%20jw-reset'%5D%22).after(s)%3Bvar%20a%3Ddocument.getElementById(%22cadresisttxt%22)%2Ci%3Ddocument.getElementById(%22cadresistprogress%22)%3Bif(e.target_metrics_data.length)%7Bs.innerHTML%3D%22Class%20does%20not%20have%20target%20metrics.%22%2CsetTimeout(function()%7Bs.innerHTML%3D%22%22%7D%2C5e3)%3Breturn%7Dfor(var%20n%3D%5B%5D%2Cc%3De.target_metrics_data.target_metrics%5B0%5D%2Co%3D1%3Bo%3Ce.target_metrics_data.target_metrics.length%3Bo%2B%2B)%7Bvar%20p%3De.target_metrics_data.target_metrics%5Bo%5D%3Bp.metrics.hasOwnProperty(%22upper%22)%26%26p.metrics.hasOwnProperty(%22upper%22)%26%26p.metrics.hasOwnProperty(%22lower%22)%26%26p.metrics.hasOwnProperty(%22lower%22)%26%26c.metrics%5B0%5D.upper%3D%3Dp.metrics%5B0%5D.upper%26%26c.metrics%5B0%5D.lower%3D%3Dp.metrics%5B0%5D.lower%26%26c.metrics%5B1%5D.upper%3D%3Dp.metrics%5B1%5D.upper%26%26c.metrics%5B1%5D.lower%3D%3Dp.metrics%5B1%5D.lower%3Fc.offsets.end%3Dp.offsets.end%3A(n.push(c)%2Cc%3Dp)%7Dn.push(p)%2Ce.target_metrics_data.target_metrics%3Dn%3Bvar%20l%2Cd%3Ddocument.querySelector(%22div%5Bclass%3D'player-overlay-wrapper'%5D%22)%3Bnew%20MutationObserver(function%20s(n)%7Bvar%20c%3Ddocument.querySelector(%22p%5Bdata-test-id%3D'time-to-complete'%5D%22)%3Bif(c)%7Bif(2!%3D(c%3Dc.innerHTML.split(%22%3A%22)).length)%7Ba.innerHTML%3D%22%22%3Breturn%7Dfor(var%20o%3Dr-(60*Number(c%5B0%5D)%2BNumber(c%5B1%5D))%2BNumber(e.ride.pedaling_start_offset)%2Cp%3D0%3Bp%3Ce.target_metrics_data.target_metrics.length%3Bp%2B%2B)%7Bvar%20l%3De.target_metrics_data.target_metrics%5Bp%5D%3Bif(o%3E%3DNumber(l.offsets.start)%26%26o%3C%3DNumber(l.offsets.end))%7Bswitch(l.segment_type)%7Bcase%22cycling%22%3Afor(var%20d%2Cm%2Ch%3D0%3Bh%3Cl.metrics.length%3Bh%2B%2B)switch(l.metrics%5Bh%5D.name)%7Bcase%22resistance%22%3Am%3Dl.metrics%5Bh%5D%3Bbreak%3Bcase%22cadence%22%3Ad%3Dl.metrics%5Bh%5D%7Da.innerHTML%3D%22cadence%3A%20%22%2Bd.lower%2B%22%20-%20%22%2Bd.upper%2B%22%20%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20resistance%3A%20%22%2Bt%5Bm.lower%5D%2B%22%20-%20%22%2Bt%5Bm.upper%5D%2B%22%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20(%22%2Bm.lower%2B%22%20-%20%22%2Bm.upper%2B%22)%22%3Bbreak%3Bcase%22running%22%3Afor(var%20u%2C_%2Ch%3D0%3Bh%3Cl.metrics.length%3Bh%2B%2B)switch(l.metrics%5Bh%5D.name)%7Bcase%22speed%22%3Au%3Dl.metrics%5Bh%5D%3Bbreak%3Bcase%22incline%22%3A_%3Dl.metrics%5Bh%5D%7Da.innerHTML%3D%22speed%3A%20%22%2Bu.lower%2B%22%20-%20%22%2Bu.upper%2B%22%20%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20incline%3A%20%22%2B_.lower%2B%22%20-%20%22%2B_.upper%3Bbreak%3Bcase%22caesar%22%3Afor(var%20f%2Cg%2Ch%3D0%3Bh%3Cl.metrics.length%3Bh%2B%2B)switch(l.metrics%5Bh%5D.name)%7Bcase%22stroke_rate%22%3Af%3Dl.metrics%5Bh%5D%3Bbreak%3Bcase%22pace_intensity%22%3Ag%3Dl.metrics%5Bh%5D%7Da.innerHTML%3D%22stroke%3A%20%22%2Bf.lower%2B%22%20-%20%22%2Bf.upper%2B%22%20%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20pace%3A%20%22%2Bg.lower%2B%22%20-%20%22%2Bg.upper%3Bbreak%3Bdefault%3Aa.innerHTML%3D%22%22%7Do%3D%3DNumber(l.offsets.start)%3F(i.style.transition%3D%22none%22%2Ci.style.width%3D%220%25%22)%3A(i.style.transition%3D%22990ms%20linear%22%2Ci.style.width%3DMath.round((o-l.offsets.start)%2F(l.offsets.end-l.offsets.start)*100)%2B%22%25%22)%3Breturn%7D%7D%7D%7D).observe(d%2C%7Battributes%3A!0%2CchildList%3A!0%2Csubtree%3A!0%2CcharacterData%3A!0%7D)%7D)%3B%7D)()%3B
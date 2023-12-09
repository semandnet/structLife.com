/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var e,t,n,r={4463:(e,t,n)=>{var r=n(7294),o=n(3935),a=n(9164),i=n(9617),l={primary:"#007FFF",secondary:"#D3D3D3",backgroundWhite:"#FFFFFF",gainsboro:"#DCDCDC",dimGray:"#696969",slateGray:"#708090",black:"#000000",whiteSmoke:"#f5f5f5",shaft:"#333",border:"#DDDFE1",white:"#fff",light_gray:"rgb(230,230,230)",h2color:"#333",pcolor:"#666",button_hover_color:"#0056b3",bodyBackground:"#e6e6e6",linkedinButton:"#0077b5",linkedinButtonHover:"#005e93",twitterButton:"#1DA1F2",twitterButtonHover:"#0c84d2"};const c=(0,i.Z)({palette:{primary:{main:l.primary},background:{default:l.whiteSmoke,paper:l.secondary},text:{primary:l.black,secondary:l.dimGray},divider:l.slateGray}});var s=n(1508),u=n(6622),h=n(2440),d=n(948),m=(n(2310),n(700)),f=n(9655),g=["active"];var y=(0,d.ZP)(s.Z)((function(){return{backgroundColor:l.light_gray}})),p=(0,d.ZP)(s.Z)((function(){return{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"2px 2px",width:"100%",position:"fixed",top:0,left:0,zIndex:10,backgroundColor:l.light_gray}})),b=(0,d.ZP)("img")((function(){return{marginRight:"2px",marginTop:"8px",height:"1.2em"}})),v=(0,d.ZP)(f.rU)((function(){return{padding:"1px",fontSize:"2em",fontFamily:'"Merriweather", serif',color:l.primary,marginLeft:"0.1em",marginRight:"0.1em",textDecoration:"none"}})),E=(0,d.ZP)(s.Z)((function(){return{display:"flex",alignItems:"center",justifyContent:"center",marginRight:"3em"}})),w=(0,d.ZP)(u.Z)((function(){return{marginRight:"0.1em","&:hover":{color:l.primary,transform:"scale(1.5)",transition:"transform 0.3s"}}})),x=((0,d.ZP)("a")((function(){return{display:"inline-block",padding:"10px 10px",color:"white",backgroundColor:"#007FFF",textAlign:"center",textDecoration:"none",borderRadius:"5px",fontSize:"18px",letterSpacing:"0.5px",fontFamily:"Arial, sans-serif",transition:"background-color 0.3s, transform 0.3s","&:hover":{backgroundColor:"#005fbb",transform:"scale(1.1)"}}})),(0,d.ZP)("a")((function(){return{display:"flex",flexDirection:"column",justifyContent:"center",padding:"7px",textAlign:"center",textDecoration:"none",color:"white",width:"200px",height:"32px",borderRadius:"16px",backgroundColor:"#0A66C2",fontFamily:'"SF Pro Text", Helvetica, sans-serif',transition:"background-color 0.3s, transform 0.3s","&:hover":{backgroundColor:"#084582",transform:"scale(1.1)"}}}))),k=(0,d.ZP)(s.Z)((function(){return{display:"flex",background:l.shaft,position:"fixed",bottom:0,left:0,width:"100%",minHeight:"3em",alignItems:"center",zIndex:99,borderTop:"1px solid ".concat(l.border),padding:"0 0 0 0"}})),S=(0,d.ZP)(h.Z)((function(e){return{display:"row"===e.type?"flex":"block",flexGrow:3,justifyContent:"space-between",alignItems:"center",padding:"0 0 0 0"}})),O=(0,d.ZP)((function(e){e.active;var t=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,g);return r.createElement(f.rU,t)}))((function(e){var t=e.active;return{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"3em",flexGrow:1,textDecoration:"none",background:t?l.primary:"transparent","&:hover":{background:t?l.primary:"transparent"}}})),P=(0,d.ZP)(m.Z)((function(){return{display:"flex",justifyContent:"center",color:l.whiteSmoke,fontSize:"1.2em"}})),C=n(2116);function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=(0,r.createContext)({}),I=function(){return(0,r.useContext)(T)},L=function(e){var t,n,o=e.children,a=(t=(0,r.useState)(""),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw o}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i={contentPage:a[0],setContentPage:a[1]};return r.createElement(T.Provider,{value:i},o)};function Z(){var e=I().contentPage;return r.createElement(k,null,r.createElement(S,{type:"row"},r.createElement(O,{to:"/challenge",active:"challenge"===e},r.createElement(P,null,"Challenge")),r.createElement(C.Z,{orientation:"vertical",flexItem:!0}),r.createElement(O,{to:"/articles",active:"articles"===e},r.createElement(P,null,"Articles")),r.createElement(C.Z,{orientation:"vertical",flexItem:!0}),r.createElement(O,{to:"/about",active:"about"===e},r.createElement(P,null,"About")),r.createElement(C.Z,{orientation:"vertical",flexItem:!0})))}var j=n(4409),A=n(551);function D(){return r.createElement(y,null,r.createElement(p,null,r.createElement(v,{to:"/articles"},r.createElement(b,{src:"/images/structlifelogo.png",alt:"structLife"})),r.createElement(E,null,r.createElement(w,{href:"https://www.linkedin.com/in/structlife/",target:"_blank"},r.createElement(A.Z,{fontSize:"large"})),r.createElement(w,{href:"https://www.pinterest.com/structLife/_created/",target:"_blank"},r.createElement(j.Z,{fontSize:"large"})))),r.createElement(Z,null))}var F=n(6089),_=n(5725),B=n(2658),H=((0,d.ZP)(s.Z,{shouldForwardProp:function(e){return"showBorder"!==e}})((function(e){var t=e.showBorder;return{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)",borderRadius:"8px",overflow:"hidden",transition:"border-color 0.3s",border:t?"1px solid rgba(137, 196, 244, 0.3)":"none","&:hover":{borderColor:t?l.pcolor:"transparent"},width:"100%",maxWidth:"100%",padding:"2px",height:"100%"}})),(0,d.ZP)(s.Z,{shouldForwardProp:function(e){return"showBorder"!==e}})((function(e){var t=e.showBorder;return{display:"flex",justifyContent:"left",alignItems:"left",flexDirection:"column",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)",borderRadius:"8px",overflow:"hidden",transition:"border-color 0.3s",border:t?"1px solid rgba(137, 196, 244, 0.3)":"none","&:hover":{borderColor:t?l.pcolor:"transparent"},width:"100%",maxWidth:"100%",padding:"2px",height:"100%"}}))),W=(0,d.ZP)(B.Z)((function(){return{color:"#7E7E7E",fontFamily:"Merriweather, Roboto, sans-serif",fontWeight:300,fontSize:"14px",lineHeight:"180%",letterSpacing:"0.05em",marginLeft:"12px",paddingBottom:"2px"}})),M=(0,d.ZP)(B.Z)((function(){return{color:"#444",fontFamily:"'Merriweather', 'Roboto Slab', serif",fontWeight:"normal",fontSize:"22px",lineHeight:"135%",letterSpacing:"0.01em",marginLeft:"10px",textShadow:"1px 1px 2px rgba(0, 0, 0, 0.1)"}})),N=(0,d.ZP)(B.Z)((function(){return{color:"#333",fontFamily:"'Merriweather', 'Roboto', sans-serif",fontWeight:400,fontSize:"16px",lineHeight:"150%",letterSpacing:"normal",marginLeft:"12px",paddingBottom:"4px",paddingTop:"4px"}})),z=(0,d.ZP)("img",{shouldForwardProp:function(e){return"showBorder"!==e}})((function(e){var t=e.showBorder;return{width:"100%",background:l.light_gray,padding:"10px",borderRadius:"8px",boxSizing:"border-box",border:t?"1px solid rgba(137, 196, 244, 0.3)":"none",maxWidth:"500px",display:"block",marginLeft:"auto",marginRight:"auto"}})),G=(0,d.ZP)(s.Z)((function(){return{display:"flex",flexDirection:"column",alignItems:"center"}})),K=(0,d.ZP)("div")((function(){return{maxWidth:"800px",alignContent:"center",textAlign:"center"}})),V=(0,d.ZP)("a")((function(){return{color:l.pcolor,textDecoration:"none","&:hover":{color:l.primary,textDecoration:"underline"}}})),U={img:function(e){return r.createElement(z,{src:e.src,alt:e.alt,sx:{maxWidth:"500px"},showBorder:!1})},em:function(e){return r.createElement(B.Z,{variant:"body1",component:"span",sx:{fontSize:"21px",lineHeight:"165%",marginRight:"auto",marginLeft:"auto",marginTop:"24px",marginBottom:"24px",fontStyle:"italic",color:"#111",fontFamily:"Roboto"}},e.children)},p:function(e){return r.createElement(B.Z,{variant:"body1",sx:{fontSize:"21px",lineHeight:"165%",marginRight:"auto",marginLeft:"auto",marginTop:"24px",marginBottom:"24px",color:"#111",fontFamily:"Roboto",textAlign:"left"}},e.children)},a:function(e){var t=function(e){for(var t=0,n=[/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i,/youtube\.com\/embed\/([^"&?\/\s]{11})/i];t<n.length;t++){var r=n[t],o=e.match(r);if(o&&o[1])return o[1]}return null}(e.href);return t?r.createElement(q,{videoId:t}):r.createElement("span",{style:{color:"#666",textDecoration:"none",fontFamily:"Roboto",fontWeight:"normal",fontSize:"21px",lineHeight:"165%",letterSpacing:"0.1em",marginLeft:"10px"}},r.createElement(V,{href:e.href},e.children))},h1:function(e){return r.createElement(B.Z,{variant:"h1",sx:{fontSize:"46px",lineHeight:"150%",fontFamily:"Roboto",fontWeight:400}},e.children)},h2:function(e){return r.createElement(r.Fragment,null,e.children)},h3:function(e){return r.createElement(r.Fragment,null,e.children)},h4:function(e){return r.createElement(W,null,e.children)},h5:function(e){return r.createElement(B.Z,{variant:"body1",sx:{fontSize:"16px",lineHeight:"165%",marginRight:"auto",marginLeft:"auto",marginTop:"24px",marginBottom:"12px",fontFamily:"Roboto",textAlign:"center",color:"#999"}},e.children)},h6:function(e){return r.createElement(B.Z,{variant:"body1",sx:{fontSize:"16px",lineHeight:"165%",marginRight:"auto",marginLeft:"auto",marginBottom:"48px",fontFamily:"Roboto",textAlign:"center",color:"#999"}},e.children)}},q=function(e){var t=e.videoId;return r.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:0,overflow:"hidden"}},r.createElement("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allowFullScreen:!0}))};function Y(e){var t=e.product;return r.createElement(f.rU,{to:t.link,style:{textDecoration:"none",height:"100%",width:"100%"}},r.createElement(H,{showBorder:!0},r.createElement(M,null,t.name),r.createElement(W,null,t.date),r.createElement(N,null,t.body)))}const $=[{name:"#2 Day's Most Valuable Hours",date:"November 22, 2023",body:"Coming soon... While everyone has the same 24 hours in a day, not all of these hours are equal in terms of our biochemical state, distraction levels, and control over them. In my upcoming article, we'll explore which hours of the day are the most valuable and why...",link:"/article-2023-11-22-day-s-most-valuable-hours"},{name:"#1 Cold Shower vs Ice Bath",date:"November 30, 2023",body:"After 40 months of consistent cold showers, I made the switch to ice baths. This change resulted in a noticeable improvement in my Heart Rate Variability (HRV), a key indicator of cardiovascular health and resilience. ... My routine, involving an 11-minute ice bath at 6-10 °C after high-intensity interval exercises, is similar to the study's protocol. The switch from cold showers to ice baths was associated with an increase in my average monthly HRV, from about 50ms to 71ms and higher, with some daily averages reaching previously unseen values of 140ms and higher... READ MORE",link:"/article-2023-11-30-cold-shower-daily-for-40-months-versus-ice-bath-for-few-months"},{name:"#1a Extra: Heart Rate Variability",date:"December 03, 2023",body:"It came to my attention that a lot of people are confused about their HRV (Heart Rate Variability) values on their wearable devices. Many intuitively believe that a high and increasing HRV is bad. Attached is my attempt to explain it simply... READ MORE",link:"/article-2023-12-03-heart-rate-variability-low-high-explained"}],J=[{name:"Welcome",date:"November 22, 2023",body:"Hi, I'm Semand. Welcome to my structLife blog where I advocate for a structured lifestyle empowered by science and practical considerations. The main question I delve into is: How can we balance Health and Legacy activities to ensure a healthy life while leaving a meaningful impact? In other words, I want to help people make informed choices for structuring and controlling their own lifestyles. Because if you don't control your lifestyle (your habits), inevitably, someone else will... READ MORE",link:"/about-2023-11-22-welcome-to-structlife-health-and-legacy-balance"},{name:"Health & Legacy: 84 h/w Each",date:"November 22, 2023",body:"The core principle of this concept is to equally divide weekly time between Health, which keeps you alive, and your duties that shape your Legacy. The allocation of time to each domain is determined by individual priorities, situations, and life stages. For instance, as a student, you might invest more time in Learning while allocating less to Work, Projects, and Household (including Family).... READ MORE",link:"/about-2023-11-22-health-and-legacy-84-hours-per-week-each"},{name:"Finding a Path: My Time Audit",date:"November 22, 2023",body:"Throughout life's journey, we learn and practice, acquiring knowledge, skills, and qualifications. But unlike the records of achievements on our resumes, our knowledge and abilities can degrade if we don’t use them regularly.  As the quote says, \"we are what we repeatedly do.\" Considering that our weekly time is limited to 168 hours, we simply can't repeatedly do everything we've learned over the years.... READ MORE",link:"/about-2023-11-22-finding-a-path-my-time-audit"},{name:"15+ Years Since Graduation",date:"November 28, 2023",body:"In 2024 The University of Manchester turns 200. Let's celebrate the bicentenary! Watch My MSc in Bioinformatics with Distinction Graduation Video. A precious memory from The University of Manchester, captured over 15 years ago.",link:"/about-2023-11-28-more-than-15-years-since-my-manchester-graduation"},{name:"Terms & Conditions",date:"November 22, 2023",body:"By accessing and using structLife.com, visitors agree to the following terms and conditions: Personal Experience and Interpretation: All content on this website, including articles and reports on routines, procedures, and experiences, is based on individual journeys and interpretations. Visitors should recognize that the findings and experiences shared might not be universally applicable... READ MORE",link:"/about-terms-conditions"},{name:"Privacy Policy",date:"November 22, 2023",body:"Data Collection: structLife.com itself does not collect, retain, or use any personal data from its visitors. However, we may use third-party services like Cloudflare to track and protect website activity. These services may collect data about your device, browser, IP address, and browsing behavior... READ MORE",link:"/about-privacy-policy"},{name:"Disclaimer",date:"November 22, 2023",body:"The content and information on structLife.com, including that related to lifestyle changes and habit formation, is for general informational purposes only. It does not constitute professional health or medical advice, nor does it replace the expertise and judgment of health care professionals. Always seek the advice of qualified health care professionals regarding any medical concerns... READ MORE",link:"/about-disclaimer"}],Q=[{name:"#EarlyEdgeChallenge2024",date:"November 25, 2023",body:"In my 50th year, I’m starting my personal morning routine #EarlyEdgeChallenge2024 challenge in 2024, aiming to complete the routine more than 95% of 366 days. Since I have a job, that means that for most days I will get up at 3:00 am or earlier. By completing the following 6 activities each morning, I will target leveraging and boosting my biochemical state even more: Wim Hof Breathing 20 min, Dog Walking 20 min, Exercises 40 min, Ice Bath 11 min, Run 5km, Cooking & Eating 60 min... READ MORE",link:"/challenge-2023-11-25-EarlyEdgeChallenge2024"},{name:"Pre-challenge Testing #13",date:"December 09, 2023",body:"It’s a no-brainer for me as in the morning we have elevated biochemistry for action and focus oriented activities, lowest distraction levels, highest control over our time. It's essential to raise our body temperature with a morning routine, including exercises, and then slow down in the evening to prepare for sleep.  CLICK TO SEE REPORT",link:"/challenge-2023-12-09-pre-challenge-testing-13-EarlyEdgeChallenge2024"},{name:"Pre-challenge Testing #12",date:"December 08, 2023",body:"Everybody has 24 hours in day but all of those moments all those hours are not equally weighted with regard to the amount of energy that you have and the amount of control that you have over that hour, you have much more control over the hour from 6 am to 7 am than you do over the hour from 6 pm to 7 pm - James Clear.  CLICK TO SEE REPORT",link:"/challenge-2023-12-08-pre-challenge-testing-12-EarlyEdgeChallenge2024"},{name:"Pre-challenge Testing #11",date:"December 07, 2023",body:"The first 0-8 hours after waking. Your brain and body are more action and focus oriented due to elevated dopamine, adrenaline and cortisol levels. It’s easier to overcome limbic friction. Note: We are also more prone to distraction and reflexive multitasking at this time. Don’t succumb to that. - Dr. Andrew Huberman.  CLICK TO SEE REPORT",link:"/challenge-2023-12-07-pre-challenge-testing-11-EarlyEdgeChallenge2024"},{name:"Pre-challenge Testing #10",date:"December 06, 2023",body:"After 40 months of consistent cold showers, I made the switch to ice baths. Not only has this change significantly increased my Heart Rate Variability (HRV), but it has also decreased my water bills. Changing water once a week is cheaper than using 7 cold showers, each lasting 11 minutes. CLICK TO SEE REPORT",link:"/challenge-2023-12-06-pre-challenge-testing-10-EarlyEdgeChallenge2024"},{name:"Pre-challenge Testing #9",date:"December 05, 2023",body:"One of the easiest healthy habits to form and maintain is walking after eating. You can always walk to work after breakfast, and choose a place for lunch some distance from the office. These habits will improve your health. CLICK TO SEE REPORT",link:"/challenge-2023-12-05-pre-challenge-testing-9-EarlyEdgeChallenge2024"},{name:"Pre-challenge Testing #8",date:"December 04, 2023",body:"I believe structuring your activities to align with your body's biochemistry and natural rhythms is most crucial. If your day is full of activities that are in conflict with your inner cycles, then no breathing methods can help with Deep Sleep.   CLICK TO SEE REPORT",link:"/challenge-2023-12-04-pre-challenge-testing-8-EarlyEdgeChallenge2024"},{name:"Pre-challenge Testing #7",date:"December 03, 2023",body:'Pre-challenge Testing #7, OBSTACLES: Blisters, Shivering after Ice Bath, Snowy Roads. FROM TODAY\'S LISTENING: "Humans are not rational", Brand Seduction by Daryl Weber. Overall it went OK. CLICK TO SEE REPORT',link:"/challenge-2023-12-03-pre-challenge-testing-7-EarlyEdgeChallenge2024"},{name:"Pre-challenge Testing #6",date:"December 02, 2023",body:"Pre-challenge Testing #6, CLICK TO SEE REPORT",link:"/challenge-2023-12-02-pre-challenge-testing-6-EarlyEdgeChallenge2024"},{name:"Pre-challenge Testing #5",date:"December 01, 2023",body:"Pre-challenge Testing #5, CLICK TO SEE REPORT",link:"/challenge-2023-12-01-pre-challenge-testing-5-EarlyEdgeChallenge2024"},{name:"Pre-challenge Testing #4",date:"November 30, 2023",body:"Pre-challenge Testing #4, CLICK TO SEE REPORT",link:"/challenge-2023-11-30-pre-challenge-testing-4-EarlyEdgeChallenge2024"},{name:"Pre-challenge Testing #3",date:"November 29, 2023",body:"Pre-challenge Testing #3, CLICK TO SEE REPORT",link:"/challenge-2023-11-29-pre-challenge-testing-3-EarlyEdgeChallenge2024"},{name:"Pre-challenge Testing #2",date:"November 28, 2023",body:"Pre-challenge Testing #2, added obstacles, CLICK TO SEE REPORT",link:"/challenge-2023-11-28-pre-challenge-testing-2-EarlyEdgeChallenge2024"},{name:"Pre-challenge Testing #1",date:"November 27, 2023",body:"Pre-challenge Testing #1, Daily Report Form, CLICK TO SEE REPORT",link:"/challenge-2023-11-27-pre-challenge-testing-1-EarlyEdgeChallenge2024"}];function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const ee=function(e){var t,n,o=e.content,a=I(),i=a.contentPage,l=a.setContentPage,c=(t=(0,r.useState)([]),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw o}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=c[0],u=c[1];return(0,r.useEffect)((function(){o!==i&&l(o),u(function(e){switch(e){case"challenge":return Q;case"articles":return $;case"about":return J;default:return[]}}(o))}),[o,i,l]),r.createElement(F.Z,{maxWidth:"100%",sx:{marginTop:"90px",marginBottom:"60px"}},r.createElement(_.ZP,{container:!0,maxWidth:"100%",width:"100%",spacing:{xs:2,md:3},justifyContent:"center",sx:{margin:"20px 4px 10px 4px"},columns:{xs:4,sm:8,md:8,lg:12,xl:16}},s.map((function(e){return r.createElement(_.ZP,{item:!0,key:e.link,xs:4,display:"flex",flexDirection:"column",alignItems:"center"},r.createElement(Y,{product:e}))}))))};var te=n(9250),ne=n(2861),re=n(6399),oe=n(7645),ae=n(6099),ie=n(7750),le=n(366),ce=n(5326);function se(e){var t=e.productDetails,n=I().contentPage,o=(0,r.useRef)(null);return(0,r.useEffect)((function(){o.current&&(o.current.scrollTop=0)}),[t]),r.createElement(re.Z,{open:!0,fullScreen:!0,sx:{zIndex:90}},r.createElement(oe.Z,{sx:{background:l.secondary,textAlign:"center"}},r.createElement(s.Z,{display:"flex",justifyContent:"center",alignItems:"center",spacing:3},r.createElement(x,{href:"https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=structlife",target:"_blank"},"Follow on LinkedIn"),r.createElement(ae.Z,{title:"Back to main page"},r.createElement(f.rU,{to:"/".concat(n)},r.createElement(w,{"aria-label":"Back to main page",size:"large",sx:{marginLeft:"20px",fontSize:"1.5em"}},r.createElement(le.Z,{fontSize:"inherit"})))))),r.createElement(ie.Z,{ref:o},r.createElement(G,null,r.createElement(K,null,r.createElement(ce.D,{components:U,children:t})))))}var ue=(0,d.ZP)(s.Z)((function(){return{textAlign:"center",marginTop:50,padding:20,border:"1px solid #ddd",borderRadius:8,boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",backgroundColor:l.light_gray,"& h2":{fontSize:24,color:l.h2color,marginBottom:20},"& p":{fontSize:18,color:l.pcolor}}})),he=(0,d.ZP)(f.rU)((function(){return{display:"inline-block",marginTop:20,padding:"10px 20px",backgroundColor:l.primary,color:l.backgroundWhite,borderRadius:4,textDecoration:"none",transition:"background-color 0.3s ease","&:hover":{backgroundColor:l.button_hover_color}}}));const de=function(){return r.createElement(ue,null,r.createElement("h2",null,"Oops! Page not found"),r.createElement(he,{to:"/"},"Return to Home"))};function me(e){return me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},me(e)}function fe(){fe=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof p?t:p,i=Object.create(a.prototype),l=new I(r||[]);return o(i,"_invoke",{value:P(e,n,l)}),i}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var d="suspendedStart",m="suspendedYield",f="executing",g="completed",y={};function p(){}function b(){}function v(){}var E={};s(E,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(L([])));x&&x!==n&&r.call(x,i)&&(E=x);var k=v.prototype=p.prototype=Object.create(E);function S(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function n(o,a,i,l){var c=h(e[o],e,a);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==me(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(u).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}var a;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return a=a?a.then(o,o):o()}})}function P(t,n,r){var o=d;return function(a,i){if(o===f)throw new Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:e,done:!0}}for(r.method=a,r.arg=i;;){var l=r.delegate;if(l){var c=C(l,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=f;var s=h(t,n,r);if("normal"===s.type){if(o=r.done?g:m,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=g,r.method="throw",r.arg=s.arg)}}}function C(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,C(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var a=h(o,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,y;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function R(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(R,this),this.reset(!0)}function L(t){if(t||""===t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}throw new TypeError(me(t)+" is not iterable")}return b.prototype=v,o(k,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:b,configurable:!0}),b.displayName=s(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},S(O.prototype),s(O.prototype,l,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new O(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},S(k),s(k,c,"Generator"),s(k,i,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=L,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return l.type="throw",l.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:L(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},t}function ge(e,t,n,r,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,o)}function ye(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return pe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?pe(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function pe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function be(){var e=(0,te.UO)().productId,t=new RegExp("^(challenge|article|about)(-\\d{4}-\\d{2}-\\d{2})?-\\w+(-\\w+)*$"),n=I().setContentPage,o=ye((0,r.useState)(""),2),a=o[0],i=o[1],l=ye((0,r.useState)(!1),2),c=l[0],s=l[1];return(0,r.useEffect)((function(){var t=function(){var t,r=(t=fe().mark((function t(){var r;return fe().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ne.Z.get("./products/".concat(e,".md"));case 3:(r=t.sent).data?(i(r.data),e.startsWith("article")?n("articles"):e.startsWith("challenge")?n("challenge"):n("about")):s(!0),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching product details:",t.t0),s(!0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(e){ge(a,r,o,i,l,"next",e)}function l(e){ge(a,r,o,i,l,"throw",e)}i(void 0)}))});return function(){return r.apply(this,arguments)}}();t()}),[e]),!t.test(e)||c?r.createElement(de,null):r.createElement(se,{productDetails:a})}var ve=(0,d.ZP)(F.Z)((function(){return{width:"100%",maxWidth:"100%",background:l.light_gray}}));const Ee=function(){return r.createElement(a.Z,{theme:c},r.createElement(f.VK,null,r.createElement(ve,{disableGutters:!0,maxWidth:!1},r.createElement(L,null,r.createElement(te.Z5,null,r.createElement(te.AW,{path:"/challenge",element:r.createElement(r.Fragment,null,r.createElement(D,null),r.createElement(ee,{content:"challenge"}))}),r.createElement(te.AW,{path:"/articles",element:r.createElement(r.Fragment,null,r.createElement(D,null),r.createElement(ee,{content:"articles"}))}),r.createElement(te.AW,{path:"/about",element:r.createElement(r.Fragment,null,r.createElement(D,null),r.createElement(ee,{content:"about"}))}),r.createElement(te.AW,{path:"/",element:r.createElement(r.Fragment,null,r.createElement(D,null),r.createElement(ee,{content:"articles"}))}),r.createElement(te.AW,{path:"/:productId/*",element:r.createElement(r.Fragment,null,r.createElement(D,null),r.createElement(be,null))}),r.createElement(te.AW,{path:"*",element:r.createElement(de,null)}))))))};document.body.style.margin=0,document.body.style.padding=0,document.body.style.width="100%",document.body.style.height="100%",document.body.style.background=l.bodyBackground,document.body.style.boxSizing="border-box";var we=document.createElement("div");we.style.width="100%",we.style.height="100%",we.style.boxSizing="border-box",document.body.appendChild(we);var xe=sessionStorage.redirect;delete sessionStorage.redirect,xe&&"/"===window.location.pathname&&window.history.replaceState(null,null,xe),(0,o.render)(r.createElement(Ee,null),we)}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={id:e,exports:{}};return r[e](n,n.exports,a),n.exports}a.m=r,e=[],a.O=(t,n,r,o)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,r,o]=e[u],l=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](n[c])))?n.splice(c--,1):(l=!1,o<i&&(i=o));if(l){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var i={};t=t||[null,n({}),n([]),n(n)];for(var l=2&r&&e;"object"==typeof l&&!~t.indexOf(l);l=n(l))Object.getOwnPropertyNames(l).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,a.d(o,i),o},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="/",(()=>{var e={826:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[i,l,c]=n,s=0;if(i.some((t=>0!==e[t]))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(c)var u=c(a)}for(t&&t(n);s<i.length;s++)o=i[s],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},n=self.webpackChunkstructlife=self.webpackChunkstructlife||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),a.nc=void 0;var i=a.O(void 0,[544],(()=>a(4463)));i=a.O(i)})();
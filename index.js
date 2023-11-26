/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var e,t,r,n={4741:(e,t,r)=>{var n=r(7294),o=r(3935),a=r(9164),i=r(9617),l={primary:"#007FFF",secondary:"#D3D3D3",backgroundWhite:"#FFFFFF",gainsboro:"#DCDCDC",dimGray:"#696969",slateGray:"#708090",black:"#000000",whiteSmoke:"#f5f5f5",shaft:"#333",border:"#DDDFE1",white:"#fff",light_gray:"rgb(230,230,230)",h2color:"#333",pcolor:"#666",button_hover_color:"#0056b3",bodyBackground:"#e6e6e6",linkedinButton:"#0077b5",linkedinButtonHover:"#005e93",twitterButton:"#1DA1F2",twitterButtonHover:"#0c84d2"};const c=(0,i.Z)({palette:{primary:{main:l.primary},background:{default:l.whiteSmoke,paper:l.secondary},text:{primary:l.black,secondary:l.dimGray},divider:l.slateGray}});var u=r(1508),s=r(6622),f=r(2440),m=r(948),d=(r(2310),r(700)),h=r(9655),p=["active"];var g=(0,m.ZP)(u.Z)((function(){return{backgroundColor:l.light_gray}})),y=(0,m.ZP)(u.Z)((function(){return{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"2px 2px",width:"100%",position:"fixed",top:0,left:0,zIndex:10,backgroundColor:l.light_gray}})),b=(0,m.ZP)("img")((function(){return{marginRight:"2px",marginTop:"8px",height:"1.2em"}})),v=(0,m.ZP)(h.rU)((function(){return{padding:"1px",fontSize:"2em",fontFamily:'"Merriweather", serif',color:l.primary,marginLeft:"0.1em",marginRight:"0.1em",textDecoration:"none"}})),x=(0,m.ZP)(u.Z)((function(){return{display:"flex",alignItems:"center",justifyContent:"center",marginRight:"3em"}})),w=(0,m.ZP)(s.Z)((function(){return{marginRight:"0.1em","&:hover":{color:l.primary,transform:"scale(1.5)",transition:"transform 0.3s"}}})),E=(0,m.ZP)(u.Z)((function(){return{display:"flex",background:l.shaft,position:"fixed",bottom:0,left:0,width:"100%",minHeight:"3em",alignItems:"center",zIndex:99,borderTop:"1px solid ".concat(l.border),padding:"0 0 0 0"}})),k=(0,m.ZP)(f.Z)((function(e){return{display:"row"===e.type?"flex":"block",flexGrow:3,justifyContent:"space-between",alignItems:"center",padding:"0 0 0 0"}})),S=(0,m.ZP)((function(e){e.active;var t=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,p);return n.createElement(h.rU,t)}))((function(e){var t=e.active;return{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"3em",flexGrow:1,textDecoration:"none",background:t?l.primary:"transparent","&:hover":{background:t?l.primary:"transparent"}}})),Z=(0,m.ZP)(d.Z)((function(){return{display:"flex",justifyContent:"center",color:l.whiteSmoke,fontSize:"1.2em"}})),O=r(2116);function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var j=(0,n.createContext)({}),L=function(){return(0,n.useContext)(j)},A=function(e){var t,r,o=e.children,a=(t=(0,n.useState)(""),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,r)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i={contentPage:a[0],setContentPage:a[1]};return n.createElement(j.Provider,{value:i},o)};function _(){var e=L().contentPage;return n.createElement(E,null,n.createElement(k,{type:"row"},n.createElement(S,{to:"/challenge",active:"challenge"===e},n.createElement(Z,null,"Challenge")),n.createElement(O.Z,{orientation:"vertical",flexItem:!0}),n.createElement(S,{to:"/articles",active:"articles"===e},n.createElement(Z,null,"Articles")),n.createElement(O.Z,{orientation:"vertical",flexItem:!0}),n.createElement(S,{to:"/about",active:"about"===e},n.createElement(Z,null,"About")),n.createElement(O.Z,{orientation:"vertical",flexItem:!0})))}var C=r(4704),I=r(4363),F=r(8341);function R(){return n.createElement(g,null,n.createElement(y,null,n.createElement(v,{to:"/articles"},n.createElement(b,{src:"/images/structlifelogo.png",alt:"structLife"})),n.createElement(x,null,n.createElement(w,{href:"https://t.me/s/structlife",target:"_blank"},n.createElement(F.Z,{fontSize:"large"})),n.createElement(w,{href:"https://twitter.com/structLife",target:"_blank"},n.createElement(C.Z,{fontSize:"large"})),n.createElement(w,{href:"https://www.instagram.com/structlife/",target:"_blank"},n.createElement(I.Z,{fontSize:"large"})))),n.createElement(_,null))}var D=r(6089),z=r(5725),T=r(2658),B=(0,m.ZP)(u.Z,{shouldForwardProp:function(e){return"showBorder"!==e}})((function(e){var t=e.showBorder;return{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)",borderRadius:"8px",overflow:"hidden",transition:"border-color 0.3s",border:t?"1px solid rgba(137, 196, 244, 0.3)":"none","&:hover":{borderColor:t?l.pcolor:"transparent"},width:"100%",maxWidth:"100%",padding:"2px",height:"100%"}})),W=(0,m.ZP)(u.Z,{shouldForwardProp:function(e){return"showBorder"!==e}})((function(e){var t=e.showBorder;return{display:"flex",justifyContent:"left",alignItems:"left",flexDirection:"column",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)",borderRadius:"8px",overflow:"hidden",transition:"border-color 0.3s",border:t?"1px solid rgba(137, 196, 244, 0.3)":"none","&:hover":{borderColor:t?l.pcolor:"transparent"},width:"100%",maxWidth:"100%",padding:"2px",height:"100%"}})),H=(0,m.ZP)(T.Z)((function(){return{color:"#7E7E7E",fontFamily:"Merriweather, Roboto, sans-serif",fontWeight:300,fontSize:"14px",lineHeight:"180%",letterSpacing:"0.05em",marginLeft:"12px",paddingBottom:"2px"}})),M=(0,m.ZP)(T.Z)((function(){return{color:"#444",fontFamily:"'Merriweather', 'Roboto Slab', serif",fontWeight:"normal",fontSize:"22px",lineHeight:"135%",letterSpacing:"0.01em",marginLeft:"10px",textShadow:"1px 1px 2px rgba(0, 0, 0, 0.1)"}})),N=(0,m.ZP)(T.Z)((function(){return{color:"#333",fontFamily:"'Merriweather', 'Roboto', sans-serif",fontWeight:400,fontSize:"16px",lineHeight:"150%",letterSpacing:"normal",marginLeft:"12px",paddingBottom:"4px",paddingTop:"4px"}})),G=(0,m.ZP)("img",{shouldForwardProp:function(e){return"showBorder"!==e}})((function(e){var t=e.showBorder;return{width:"100%",background:l.light_gray,padding:"10px",borderRadius:"8px",boxSizing:"border-box",border:t?"1px solid rgba(137, 196, 244, 0.3)":"none",maxWidth:"500px",display:"block",marginLeft:"auto",marginRight:"auto"}})),U=(0,m.ZP)(u.Z)((function(){return{display:"flex",flexDirection:"column",alignItems:"center"}})),q=(0,m.ZP)("div")((function(){return{maxWidth:"800px",alignContent:"center",textAlign:"center"}})),$=(0,m.ZP)("a")((function(){return{color:l.pcolor,textDecoration:"none","&:hover":{color:l.primary,textDecoration:"underline"}}})),V={img:function(e){return n.createElement(G,{src:e.src,alt:e.alt,sx:{maxWidth:"500px"},showBorder:!1})},em:function(e){return n.createElement(T.Z,{variant:"body1",component:"span",sx:{fontSize:"21px",lineHeight:"165%",marginRight:"auto",marginLeft:"auto",marginTop:"24px",marginBottom:"24px",fontStyle:"italic",color:"#111",fontFamily:"Roboto"}},e.children)},p:function(e){return n.createElement(T.Z,{variant:"body1",sx:{fontSize:"21px",lineHeight:"165%",marginRight:"auto",marginLeft:"auto",marginTop:"24px",marginBottom:"24px",color:"#111",fontFamily:"Roboto",textAlign:"left"}},e.children)},a:function(e){return n.createElement("span",{style:{color:"#666",textDecoration:"none",fontFamily:"Roboto",fontWeight:"normal",fontSize:"21px",lineHeight:"165%",letterSpacing:"0.1em",marginLeft:"10px"}},n.createElement($,{href:e.href},e.children))},h1:function(e){return n.createElement(T.Z,{variant:"h1",sx:{fontSize:"46px",lineHeight:"150%",fontFamily:"Roboto",fontWeight:400}},e.children)},h2:function(e){return n.createElement(n.Fragment,null,e.children)},h3:function(e){return n.createElement(n.Fragment,null,e.children)},h4:function(e){return n.createElement(H,null,e.children)},h5:function(e){return n.createElement(T.Z,{variant:"body1",sx:{fontSize:"16px",lineHeight:"165%",marginRight:"auto",marginLeft:"auto",marginTop:"24px",marginBottom:"12px",fontFamily:"Roboto",textAlign:"center",color:"#999"}},e.children)},h6:function(e){return n.createElement(T.Z,{variant:"body1",sx:{fontSize:"16px",lineHeight:"165%",marginRight:"auto",marginLeft:"auto",marginBottom:"48px",fontFamily:"Roboto",textAlign:"center",color:"#999"}},e.children)}};function Y(e){var t=e.product;return n.createElement(h.rU,{to:t.link,style:{textDecoration:"none",height:"100%",width:"100%"}},n.createElement(W,{showBorder:!0},n.createElement(M,null,t.name),n.createElement(H,null,t.date),n.createElement(N,null,t.body)))}const J=[{name:"#1 Day's Most Valuable Hours",date:"November 22, 2023",body:"Coming soon... While everyone has the same 24 hours in a day, not all of these hours are equal in terms of our biochemical state, distraction levels, and control over them. In my upcoming article, we'll explore which hours of the day are the most valuable and why...",link:"/article-2023-11-22-day-s-most-valuable-hours"},{name:"#2 Cold Shower vs. Ice Bath",date:"November 25, 2023",body:"Coming soon... I'll share the outcomes of my switch from a daily cold shower routine, lasting 5 to 11 minutes over 40 months, to an 11-minute ice bath. Discover the changes and the differences this practice has made...",link:"/article-2023-11-25-cold-shower-daily-for-40-months-versus-ice-bath-for-few-months"}],K=[{name:"Welcome",date:"November 22, 2023",body:"Hi, I'm Semand. Welcome to my structLife blog where I advocate for a structured lifestyle empowered by science and practical considerations. The main question I delve into is: How can we balance Health and Legacy activities to ensure a healthy life while leaving a meaningful impact? In other words, I want to help people make informed choices for structuring and controlling their own lifestyles. Because if you don't control your lifestyle (your habits), inevitably, someone else will... READ MORE",link:"/about-2023-11-22-welcome-to-structlife-health-and-legacy-balance"},{name:"Health & Legacy: 84 h/w Each",date:"November 22, 2023",body:"The core principle of this concept is to equally divide weekly time between Health, which keeps you alive, and your duties that shape your Legacy. The allocation of time to each domain is determined by individual priorities, situations, and life stages. For instance, as a student, you might invest more time in Learning while allocating less to Work, Projects, and Household (including Family).... READ MORE",link:"/about-2023-11-22-health-and-legacy-84-hours-per-week-each"},{name:"Finding a Path: My Time Audit",date:"November 22, 2023",body:"Throughout life's journey, we learn and practice, acquiring knowledge, skills, and qualifications. But unlike the records of achievements on our resumes, our knowledge and abilities can degrade if we don’t use them regularly.  As the quote says, \"we are what we repeatedly do.\" Considering that our weekly time is limited to 168 hours, we simply can't repeatedly do everything we've learned over the years.... READ MORE",link:"/about-2023-11-22-finding-a-path-my-time-audit"},{name:"Terms & Conditions",date:"November 22, 2023",body:"By accessing and using structLife.com, visitors agree to the following terms and conditions: Personal Experience and Interpretation: All content on this website, including articles and reports on routines, procedures, and experiences, is based on individual journeys and interpretations. Visitors should recognize that the findings and experiences shared might not be universally applicable... READ MORE",link:"/about-terms-conditions"},{name:"Privacy Policy",date:"November 22, 2023",body:"Data Collection: structLife.com itself does not collect, retain, or use any personal data from its visitors. However, we may use third-party services like Cloudflare to track and protect website activity. These services may collect data about your device, browser, IP address, and browsing behavior... READ MORE",link:"/about-privacy-policy"},{name:"Disclaimer",date:"November 22, 2023",body:"The content and information on structLife.com, including that related to lifestyle changes and habit formation, is for general informational purposes only. It does not constitute professional health or medical advice, nor does it replace the expertise and judgment of health care professionals. Always seek the advice of qualified health care professionals regarding any medical concerns... READ MORE",link:"/about-disclaimer"}],Q=[{name:"#EarlyEdgeChallenge2024",date:"November 25, 2023",body:"Coming soon... The rules and structure of #EarlyEdgeChallenge2024 will be posted here.",link:"/challenge-2023-11-25-EarlyEdgeChallenge2024-rules"}];var X=r(551),ee=r(4409),te=r(3792);function re(){return n.createElement(z.ZP,{item:!0,key:"socialcard",xs:4,display:"flex",flexDirection:"column",alignItems:"center"},n.createElement(B,{showBorder:!0},n.createElement(x,null,n.createElement(w,{href:"https://t.me/s/structlife",target:"_blank"},n.createElement(F.Z,{fontSize:"large"})),n.createElement(w,{href:"https://www.linkedin.com/in/structlife/",target:"_blank"},n.createElement(X.Z,{fontSize:"large"})),n.createElement(w,{href:"https://twitter.com/structLife",target:"_blank"},n.createElement(C.Z,{fontSize:"large"}))),n.createElement(x,null,n.createElement(w,{href:"https://www.instagram.com/structlife/",target:"_blank"},n.createElement(I.Z,{fontSize:"large"})),n.createElement(w,{href:"https://www.facebook.com/structLife",target:"_blank"},n.createElement(te.Z,{fontSize:"large"})),n.createElement(w,{href:"https://www.pinterest.com/structLife/_created/",target:"_blank"},n.createElement(ee.Z,{fontSize:"large"})))))}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const oe=function(e){var t,r,o=e.content,a=L(),i=a.contentPage,l=a.setContentPage,c=(t=(0,n.useState)([]),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,r)||function(e,t){if(e){if("string"==typeof e)return ne(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ne(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=c[0],s=c[1];return(0,n.useEffect)((function(){o!==i&&l(o),s(function(e){switch(e){case"challenge":return Q;case"articles":return J;case"about":return K;default:return[]}}(o))}),[o,i,l]),n.createElement(D.Z,{maxWidth:"100%",sx:{marginTop:"90px",marginBottom:"60px"}},n.createElement(z.ZP,{container:!0,maxWidth:"100%",width:"100%",spacing:{xs:2,md:3},justifyContent:"center",sx:{margin:"20px 4px 10px 4px"},columns:{xs:4,sm:8,md:8,lg:12,xl:16}},"about"===i&&n.createElement(re,null),u.map((function(e){return n.createElement(z.ZP,{item:!0,key:e.link,xs:4,display:"flex",flexDirection:"column",alignItems:"center"},n.createElement(Y,{product:e}))}))))};var ae=r(9250),ie=r(2861),le=r(6399),ce=r(7645),ue=r(6099),se=r(7750),fe=r(366),me=r(5326);function de(e){var t=e.productDetails,r=L().contentPage,o=(0,n.useRef)(null);return(0,n.useEffect)((function(){o.current&&(o.current.scrollTop=0)}),[t]),n.createElement(le.Z,{open:!0,fullScreen:!0,sx:{zIndex:90}},n.createElement(ce.Z,{sx:{background:l.secondary,textAlign:"center"}},n.createElement(u.Z,{display:"flex",justifyContent:"center",alignItems:"center",spacing:3},n.createElement(ue.Z,{title:"Back to main page"},n.createElement(h.rU,{to:"/".concat(r)},n.createElement(w,{"aria-label":"Back to main page",size:"large",sx:{marginLeft:"20px",fontSize:"1.5em"}},n.createElement(fe.Z,{fontSize:"inherit"})))))),n.createElement(se.Z,{ref:o},n.createElement(U,null,n.createElement(q,null,n.createElement(me.D,{components:V,children:t})))))}var he=(0,m.ZP)(u.Z)((function(){return{textAlign:"center",marginTop:50,padding:20,border:"1px solid #ddd",borderRadius:8,boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)",backgroundColor:l.light_gray,"& h2":{fontSize:24,color:l.h2color,marginBottom:20},"& p":{fontSize:18,color:l.pcolor}}})),pe=(0,m.ZP)(h.rU)((function(){return{display:"inline-block",marginTop:20,padding:"10px 20px",backgroundColor:l.primary,color:l.backgroundWhite,borderRadius:4,textDecoration:"none",transition:"background-color 0.3s ease","&:hover":{backgroundColor:l.button_hover_color}}}));const ge=function(){return n.createElement(he,null,n.createElement("h2",null,"Oops! Page not found"),n.createElement(pe,{to:"/"},"Return to Home"))};function ye(e){return ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ye(e)}function be(){be=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof y?t:y,i=Object.create(a.prototype),l=new A(n||[]);return o(i,"_invoke",{value:O(e,r,l)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var m="suspendedStart",d="suspendedYield",h="executing",p="completed",g={};function y(){}function b(){}function v(){}var x={};u(x,i,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(_([])));E&&E!==r&&n.call(E,i)&&(x=E);var k=v.prototype=y.prototype=Object.create(x);function S(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function Z(e,t){function r(o,a,i,l){var c=f(e[o],e,a);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==ye(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(s).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function O(t,r,n){var o=m;return function(a,i){if(o===h)throw new Error("Generator is already running");if(o===p){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var l=n.delegate;if(l){var c=P(l,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===m)throw o=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var u=f(t,r,n);if("normal"===u.type){if(o=n.done?p:d,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=p,n.method="throw",n.arg=u.arg)}}}function P(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=f(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function _(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(ye(t)+" is not iterable")}return b.prototype=v,o(k,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:b,configurable:!0}),b.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},S(Z.prototype),u(Z.prototype,l,(function(){return this})),t.AsyncIterator=Z,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new Z(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},S(k),u(k,c,"Generator"),u(k,i,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=_,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return l.type="throw",l.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}function ve(e,t,r,n,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}function xe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return we(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?we(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function we(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ee(){var e=(0,ae.UO)().productId,t=new RegExp("^(challenge|article|about)(-\\d{4}-\\d{2}-\\d{2})?-\\w+(-\\w+)*$"),r=L().setContentPage,o=xe((0,n.useState)(""),2),a=o[0],i=o[1],l=xe((0,n.useState)(!1),2),c=l[0],u=l[1];return(0,n.useEffect)((function(){var t=function(){var t,n=(t=be().mark((function t(){var n;return be().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ie.Z.get("./products/".concat(e,".md"));case 3:(n=t.sent).data?(i(n.data),e.startsWith("article")?r("articles"):e.startsWith("challenge")?r("challenge"):r("about")):u(!0),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching product details:",t.t0),u(!0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(e){ve(a,n,o,i,l,"next",e)}function l(e){ve(a,n,o,i,l,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}();t()}),[e]),!t.test(e)||c?n.createElement(ge,null):n.createElement(de,{productDetails:a})}var ke=(0,m.ZP)(D.Z)((function(){return{width:"100%",maxWidth:"100%",background:l.light_gray}}));const Se=function(){return n.createElement(a.Z,{theme:c},n.createElement(h.UT,null,n.createElement(ke,{disableGutters:!0,maxWidth:!1},n.createElement(A,null,n.createElement(ae.Z5,null,n.createElement(ae.AW,{path:"/challenge",element:n.createElement(n.Fragment,null,n.createElement(R,null),n.createElement(oe,{content:"challenge"}))}),n.createElement(ae.AW,{path:"/articles",element:n.createElement(n.Fragment,null,n.createElement(R,null),n.createElement(oe,{content:"articles"}))}),n.createElement(ae.AW,{path:"/about",element:n.createElement(n.Fragment,null,n.createElement(R,null),n.createElement(oe,{content:"about"}))}),n.createElement(ae.AW,{path:"/",element:n.createElement(n.Fragment,null,n.createElement(R,null),n.createElement(oe,{content:"articles"}))}),n.createElement(ae.AW,{path:"/:productId/*",element:n.createElement(n.Fragment,null,n.createElement(R,null),n.createElement(Ee,null))}),n.createElement(ae.AW,{path:"*",element:n.createElement(ge,null)}))))))};document.body.style.margin=0,document.body.style.padding=0,document.body.style.width="100%",document.body.style.height="100%",document.body.style.background=l.bodyBackground,document.body.style.boxSizing="border-box";var Ze=document.createElement("div");Ze.style.width="100%",Ze.style.height="100%",Ze.style.boxSizing="border-box",document.body.appendChild(Ze),(0,o.render)(n.createElement(Se,null),Ze)}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,exports:{}};return n[e](r,r.exports,a),r.exports}a.m=n,e=[],a.O=(t,r,n,o)=>{if(!r){var i=1/0;for(s=0;s<e.length;s++){for(var[r,n,o]=e[s],l=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](r[c])))?r.splice(c--,1):(l=!1,o<i&&(i=o));if(l){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,n,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var i={};t=t||[null,r({}),r([]),r(r)];for(var l=2&n&&e;"object"==typeof l&&!~t.indexOf(l);l=r(l))Object.getOwnPropertyNames(l).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,a.d(o,i),o},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="/",(()=>{var e={826:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[i,l,c]=r,u=0;if(i.some((t=>0!==e[t]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(c)var s=c(a)}for(t&&t(r);u<i.length;u++)o=i[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(s)},r=self.webpackChunkstructlife=self.webpackChunkstructlife||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.nc=void 0;var i=a.O(void 0,[595],(()=>a(4741)));i=a.O(i)})();
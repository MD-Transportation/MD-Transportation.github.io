"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[483],{8743:function(e,t,n){n.d(t,{Z:function(){return z}});var r=n(6265),o=n(9270),l=n(1163),i=[{path:"/",label:"Home"},{path:"/about",label:"About"},{path:"/services",label:"Services"},{path:"/contact",label:"Contact Us"}];function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e){var t=e.src,n=c(e,["src"]);return(0,r.BX)(o.rU,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({href:"/",sx:u.logo},n,{children:[(0,r.tZ)(o.Ee,{src:t,alt:"logo"}),(0,r.tZ)("strong",{children:"MD Transportation LLC"})]}))}var u={logo:{variant:"links.logo",display:"flex",cursor:"pointer",textDecoration:"none",color:"primary",a:{fontSize:2,fontWeight:"body",px:5,cursor:"pointer",lineHeight:"1.2",transition:"all 0.15s","&:hover":{color:"secondary"},"&.active":{color:"primary"}}}},s=n(5893),d=n(7294),x=n(8516);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e){var t=e.className,n=e.children,r=e.closeButton,l=(e.closeButtonStyle,e.drawerHandler),i=e.toggleHandler,a=e.open,c=e.width,p=e.placement,u=e.drawerStyle,d=e.closeBtnStyle,f=b(e,["className","children","closeButton","closeButtonStyle","drawerHandler","toggleHandler","open","width","placement","drawerStyle","closeBtnStyle"]);return(0,s.jsxs)("div",{styles:"top: 0; position: fixed",children:[(0,s.jsx)(x.Z,h({open:a,onClose:i,className:"".concat(t||"").trim(),width:c,placement:p,handler:!1,level:["#__next"],duration:"0.4s"},f,{children:(0,s.jsxs)(o.xu,{sx:u,children:[r&&(0,s.jsx)(o.xu,{as:"div",onClick:i,sx:d,children:r}),n]})})),(0,s.jsx)(o.xu,{className:"drawer__handler",style:{dispaly:"inline-block"},onClick:i,children:l})]})}m.defaultProps={width:"35vw",placement:"left"};var g=n(1649);function y(){var e=(0,d.useState)(!1),t=e[0],n=e[1],r=(0,l.useRouter)();return(0,s.jsx)(m,{drawerHandler:(0,s.jsx)(o.xu,{sx:v.handler,children:(0,s.jsx)(g.tgG,{size:"26px"})}),open:t,toggleHandler:function(){return n((function(e){return!e}))},closeButton:(0,s.jsx)(g.QAE,{size:"24"}),drawerStyle:v.drawer,closeBtnStyle:v.close,children:(0,s.jsx)(o.xu,{sx:v.content,children:(0,s.jsx)(o.xu,{sx:v.menu,children:i.map((function(e,t){return(0,s.jsx)(o.rU,{className:r.pathname==e.path?"active":"",href:e.path,children:e.label},t)}))})})})}var v={handler:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0",width:"26px","@media screen and (min-width: 1024px)":{display:"none"}},drawer:{width:"35%",height:"100vh",top:"0",position:"fixed",background:"white"},close:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"25px",right:"15px",zIndex:"1000",cursor:"pointer"},content:{width:"100%",height:"100%",background:"white",opacity:"1",display:"flex",flexDirection:"column",pt:"100px",pb:"40px",px:"30px"},menu:{width:"100%",display:"flex",flexDirection:"column",a:{fontSize:"16px",fontWeight:"500",color:"black",py:"15px",cursor:"pointer",borderBottom:"1px solid #e8e5e5","@media screen and (max-width: 425px)":{borderBottom:"none"},transition:"all 0.25s",textDecoration:"none","&:hover":{color:"primary"},"&.active":{color:"primary"}}},menuFooter:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",mt:"auto"},button:{color:"white",fontSize:"14px",fw:"700",height:"45px",borderRadius:"5px",cursor:"pointer",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",py:"0"}};function w(e){e.className;var t=(0,l.useRouter)();return(0,r.tZ)("header",{id:"header",className:"sticky top-0 bg-white shadow",sx:S.header,children:(0,r.BX)(o.W2,{sx:S.container,children:[(0,r.tZ)(p,{src:"/buslogo.svg"}),(0,r.tZ)(o.kC,{as:"nav",sx:S.nav,children:i.map((function(e,n){return(0,r.tZ)(o.OL,{href:e.path,offset:-70,className:t.pathname==e.path?"active":"",children:e.label},n)}))}),(0,r.BX)(o.xu,{sx:S.container,children:[(0,r.tZ)(o.rU,{href:"/services#form",children:(0,r.tZ)(o.zx,{className:"donate_btn",variant:"secondary","aria-label":"Get a Quote",children:"Get a Quote"})}),(0,r.tZ)(y,{})]})]})})}var S={header:{color:"text",fontWeight:"body",py:4,width:"100%",position:"absolute",top:0,left:0,"z-index":999,backgroundColor:"transparent",transition:"all 0.4s ease",".donate__btn":{flexShrink:0,mr:[15,20,null,null,0],ml:["auto",null,null,null,0]},"&.sticky":{position:"fixed",backgroundColor:"background",color:"#000000",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.06)",py:3,"nev > a":{color:"text"}}},container:{display:"flex",alignItems:"center",justifyContent:"space-between"},nav:{mx:"auto",display:"none","@media screen and (min-width: 1024px)":{display:"block"},a:{fontSize:2,fontWeight:"body",px:5,cursor:"pointer",lineHeight:"1.2",transition:"all 0.15s","&:hover":{color:"primary"},"&.active":{color:"primary"}}}};function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function k(e){var t=e.path,n=e.label,l=e.children,i=j(e,["path","label","children"]);return(0,r.tZ)(o.rU,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){O(e,t,n[t])}))}return e}({},i,{href:t,children:l||n}))}var F={menuItem:[{path:"/",label:"Home"},{path:"/about",label:"About"},{path:"/services",label:"Services"},{path:"/contact",label:"Contact Us"}]};function B(){return(0,r.tZ)("footer",{sx:C.footer,children:(0,r.tZ)(o.W2,{children:(0,r.BX)(o.xu,{sx:C.footer.footerBottomArea,children:[(0,r.tZ)("div",{sx:C.footer.logo,children:(0,r.tZ)(p,{src:"/buslogo.svg"})}),(0,r.tZ)(o.xu,{sx:C.footer.menus,children:(0,r.tZ)("nav",{children:F.menuItem.map((function(e,t){return(0,r.tZ)(k,{path:e.path,label:e.label,sx:C.footer.link},t)}))})}),(0,r.BX)(o.xv,{sx:C.footer.copyright,children:["Copyright by ",(new Date).getFullYear()," MD Transportation"]})]})})})}var C={footer:{bottom:"0",left:"0",position:"relative",width:"100%",zIndex:"10",footerBottomArea:{borderTop:"1px solid",borderTopColor:"border_color",display:"flex",pt:[5,null],pb:["40px",null],textAlign:"center",flexDirection:"column",alignItems:"center"},menus:{mt:[3,4],mb:2,nav:{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}},link:{fontSize:[1,"15px"],color:"text",fontWeight:"400",mb:2,cursor:"pointer",transition:"all 0.35s",display:"block",textDecoration:"none",lineHeight:[1.5,null,1.8],px:[2,null,4],":hover":{color:"primary"}},copyright:{fontSize:[1,"15px"],width:"100%"},logo:{maxWidth:"fit-content"}}};function z(e){var t=e.children;return(0,r.BX)("div",{id:"layout",sx:{width:"100vw"},children:[(0,r.tZ)(w,{}),(0,r.tZ)("main",{id:"content",sx:{variant:"layout.main"},children:t}),(0,r.tZ)(B,{})]})}},4961:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(5893),o=(n(7294),n(9008));function l(e){var t=e.description,n=void 0===t?"startup product landing page":t,l=e.author,i=void 0===l?"JSM":l,a=e.meta,c=e.title,p=void 0===c?"startup landing title":c,u=[{name:"description",content:n},{property:"og:title",content:p},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i},{name:"twitter:title",content:p},{name:"twitter:description",content:n}].concat(a);return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:p}),u.map((function(e,t){var n=e.name,o=e.content;return(0,r.jsx)("meta",{name:n,content:o},t)}))]})}l.defaultProps={lang:"en",meta:[]}},4643:function(e,t,n){n.d(t,{r:function(){return r}});var r={breakpoints:["480px","640px","768px","1024px","1220px","1366px","1620px"],fonts:{body:"system-ui, sans-serif",heading:'"Avenir Next", sans-serif',monospace:"Menlo, monospace"},fontSizes:[12,15,16,18,20,22,24,28,32,36,42,48,52,64],fontWeights:{body:"normal",heading:500,bold:700},lineHeights:{body:1.8,heading:1.5},letterSpacings:{body:"normal",caps:"0.2em",heading:"-0.5px"},space:[0,5,10,15,20,25,30,50,80,100,120,150],colors:{text:"#343D48",text_secondary:"#02073E",heading:"#0F2137",heading_secondary:"#0F2137",background:"#FFFFFF",background_secondary:"#F9FBFD",border_color:"#E5ECF4",yellow:"#FFA740",primary:"#F5A400",secondary:"#2563FF",muted:"#E4E4E4",accent:"#609",modes:{dark:{text:"#fff",background:"#000",primary:"#0cf",secondary:"#09c",muted:"#111"}}},layout:{container:{maxWidth:["100%",null,null,"780px","1020px","1200px",null,"1310px"],px:[4,6]},header:{color:"#02073E",fontWeight:"normal",py:3,position:"absolute",width:"100%"},toolbar:{display:"flex",alignItems:"center",justifyContent:"space-between"},main:{width:"100vw"}},buttons:{menu:{display:[null,null,"none"]},defaultBtn:{borderRadius:"45px",fontSize:["14px",null,null,2],letterSpacings:"-0.15px",padding:["12px 20px",null,"15px 30px"],fontFamily:"body",cursor:"pointer",lineHeight:1.2,transition:"all 0.25s",fontWeight:500,"&:focus":{outline:0}},primary:{variant:"buttons.defaultBtn",color:"white",bg:"primary","&:hover":{boxShadow:"rgba(233, 76, 84, 0.57) 0px 9px 20px -5px"}},whiteButton:{variant:"buttons.defaultBtn",color:"heading_secondary",bg:"white","&:hover":{boxShadow:"rgba(0, 0, 0, 0.5) 0px 12px 24px -10px"}},secondary:{variant:"buttons.defaultBtn",border:"2px solid",borderColor:"primary",color:"primary",bg:"transparent",padding:["10px 15px",null,"15px 30px"],"&:hover":{color:"white",bg:"primary"}},textButton:{variant:"buttons.defaultBtn",backgroundColor:"transparent",cursor:"pointer",color:"white",svg:{fontSize:[4,6],mr:2}}},links:{default:{cursor:"pointer"},bold:{fontWeight:"bold"},nav:{display:["none",null,"inline-block"],px:25,fontWeight:"normal"},blog:{display:"block",px:0,color:"inherit",textDecoration:"none",fontSize:"inherit",transition:"color 0.25s","&:hover":{color:"primary"}},footer:{display:"block",px:0,color:"inherit",textDecoration:"none"},logo:{display:"flex"}},section:{keyFeature:{pt:[8,null,9,null,null,10],pb:["90px",null,9,null,null,10,null,"165px"]},feature:{pb:[8,null,9,null,null,10,null,"170px"]},news:{pb:[8,null,9,null,null,10,null,"170px"]},coreFeature:{pb:[8,null,9,null,null,10,null,"170px"],overflow:"hidden"},testimonial:{pt:[8,null,8,"70px",null,8,null,"145px"],pb:["90px",null,9,null,null,10,null,"190px"],overflow:"hidden"},services:{pb:["90px",null,9,null,null,10,null,"150px"]},pricing:{pt:[8,null,9,null,null,10,null,"180px"],pb:["90px",null,9,null,null,10,null,"180px"]}},sectionHeader:{width:["100%",null,"540px"],display:"flex",flexDirection:"column",alignItems:"center",mt:["-3px",null,-1],marginBottom:["50px",null,"60px",null,null,"65px",null,"80px"],mx:"auto",title:{fontSize:["24px",null,"28px",null,null,"32px",null,"36px"],color:"heading",lineHeight:[1.3,null,null,1.25],textAlign:"center",fontWeight:"700",letterSpacing:"-.5px"},subTitle:{fontSize:[0,"13px",null,"14px"],color:"primary",textAlign:"center",letterSpacing:["1.5px",null,"2px"],textTransform:"uppercase",fontWeight:"700",mb:2,lineHeight:1.5}},text:{heading:{fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:[4],letterSpacing:"-.55px",color:"heading"},heroPrimary:{color:"heading",fontSize:["32px","36px","42px","40px","42px","52px","58px","66px"],lineHeight:[1.3,null,null,null,null,1.2],fontWeight:700,mb:[4,null,null,null,null,5]},heroSecondary:{fontSize:[2,null,"17px",null,null,"19px",4],lineHeight:[1.9,null,null,2],fontWeight:"body",mb:5,px:[0,null,5,6,null,8,9],color:"heading"},title:{variant:"text.heading",fontWeight:"bold",fontSize:[3,null,4],lineHeight:1.25,mb:1},lead:{fontSize:40,fontFamily:"DM Sans",fontWeight:"500",lineHeight:"60px",letterSpacing:"-1.5px",color:"#0F2137"},muted:{lineHeight:"26px",color:"muted"},secondary:{fontWeight:500,color:"#00A99D",lineHeight:"40px"}},images:{avatar:{width:48,height:48,borderRadius:99999}},cards:{primary:{padding:2,borderRadius:4},offer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flex:["1 1 calc(50% - 16px)","1 1 20%"],minHeight:130,m:2,background:"#FFFFFF",border:"1px solid #EDEFF6",borderRadius:5},featureCard:{display:"flex",alignItems:"flex-start",flexDirection:"row",p:3}},forms:{label:{fontSize:1,fontWeight:"bold"},input:{borderRadius:8,borderColor:"border_color",height:60,"&:focus":{borderColor:"primary",boxShadow:function(e){return"0 0 0 2px ".concat(e.colors.primary)},outline:"none"}}},badges:{primary:{color:"background",bg:"#28A5FF",borderRadius:30,p:"3px 11px",fontSize:1,letterSpacing:"-0.5px"},outline:{color:"primary",bg:"transparent",boxShadow:"inset 0 0 0 1px"}},styles:{root:{fontFamily:"body",lineHeight:"body",fontWeight:"body",fontSmoothing:"antialiased",".modal-video-close-btn":{cursor:"pointer"},".modal-video-movie-wrap":{margin:6,width:"auto"}},hr:{border:0,borderBottom:"1px solid",borderColor:"#D9E0E7"},ul:{listStyle:"none"},srOnly:{border:"0 !important",clip:"rect(1px, 1px, 1px, 1px) !important",clipPath:"inset(50%) !important",height:"1px !important",margin:"-1px !important",overflow:"hidden !important",padding:"0 !important",position:"absolute !important",width:"1px !important",whiteSpace:"nowrap !important"}}}}}]);
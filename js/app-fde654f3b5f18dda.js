(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[366],{22749:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return L}});var n=r(40980),o=r(74860),i=r(44448),s=r(76389),c=r(48017),a=r(43697),l=r(336),u=r(64115),d=r(9008),h=r(41664),p=r(67294),j=r(92809),f=r(30266),x=r(809),m=r.n(x),b=r(61705),g=r(26729),v=r(36618),O=r(79887),y=r(32800),w=r(82175),C=r(11163),P=r(27212),_=r(83826),k=r(69456),N=r(85893);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,j.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R=function(e){var t=e.onClose,r=e.setLoading,o=e.user,i=e.initialRef,s=(0,n.useToast)();return(0,N.jsx)(w.J9,{initialValues:{projectName:""},validationSchema:k.B5,onSubmit:function(){var e=(0,f.Z)(m().mark((function e(n){var i,c,a;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,(0,P.$L)(n.projectName,null===o||void 0===o?void 0:o.id);case 3:i=e.sent,c=i.data,i.error,(a=c?c[0].uuid:"")&&C.default.push("".concat(_.Z.PROJECT,"/").concat(a)),s({title:"Create Project",description:"Project created successfully",status:"success",position:"bottom-right",duration:3e3}),t();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:(0,N.jsxs)(w.l0,{children:[(0,N.jsx)(b.fe,{pb:6,children:(0,N.jsx)(w.gN,{name:"projectName",children:function(e){var t=e.field;return(0,N.jsxs)(g.NI,{isRequired:!0,children:[(0,N.jsx)(v.l,{requiredIndicator:(0,N.jsx)(N.Fragment,{}),fontWeight:"bold",fontSize:"sm",color:"gray.700",children:"Project name"}),(0,N.jsx)(O.I,S({id:"projectName","aria-label":"Enter the name of the project",rounded:"base",height:"12",ref:i},t))]})}})}),(0,N.jsxs)(b.mz,{pt:"16",children:[(0,N.jsx)(y.z,{onClick:t,mr:3,children:"Cancel"}),(0,N.jsx)(y.z,{type:"submit",colorScheme:"blue",bg:"brand.500",color:(0,n.useColorModeValue)("inherit","white"),children:"Create"})]})]})})},W=r(27044),T=r(3909),z=r(44604),D=r(23432),Z=r(62058),q=r(30258);var L=function(){var e=(0,z.a)(),t=e.user,r=e.session,j=(0,P.e1)((null===r||void 0===r?void 0:r.access_token)||"","projects",["name","uuid"],[{field:"order",relationship:"name",value:"asc"}]),f=j.entries,x=j.isLoading,m=(j.isError,(0,p.useState)(!1)),b=m[0],g=m[1],v=(0,o.q)(),O=v.isOpen,y=v.onOpen,w=v.onClose,C=function(){return x?(0,N.jsxs)(i.Kq,{mt:"12",children:[(0,N.jsx)(s.Od,{maxW:"3xl",height:"80px"}),(0,N.jsx)(s.Od,{maxW:"3xl",height:"80px"}),(0,N.jsx)(s.Od,{maxW:"3xl",height:"80px"})]}):(0,N.jsx)(c.xu,{mt:"8",children:null===f||void 0===f?void 0:f.map((function(e){return(0,N.jsx)(a.f,{as:"article",p:"5",mt:"4",boxShadow:"sm",borderWidth:"1px",rounded:"2xl",maxW:"3xl",bg:(0,n.useColorModeValue)("gray.50","inherit"),transition:"box-shadow 0.4s",_hover:{boxShadow:"md"},children:(0,N.jsx)(l.X,{size:"md",my:"2",children:(0,N.jsx)(h.default,{href:"".concat(_.Z.PROJECT,"/").concat(e.uuid),passHref:!0,children:(0,N.jsx)(a.A,{onClick:function(){return g(!0)},children:e.name})})})},e.uuid)}))})},k=[{title:"Create project",content:"Create a project for your Wallet or Dapp."},{title:"Get your keys",content:"You will find that keys have already been generated for your project inside the 'Keys' tab."},{title:"Configure your client",content:(0,N.jsxs)(u.x,{as:"span",children:["Setup your wallet or dapp, take a look at the",(0,N.jsx)(W.r,{href:"https://docs.walletconnect.com",target:"_blank",children:"docs."})]})}],E=(0,p.useRef)();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(d.default,{children:(0,N.jsx)("title",{children:"Projects - WalletConnect"})}),b?(0,N.jsx)(T.C,{}):(0,N.jsxs)(D.Z,{title:"Projects",buttonText:"New project",buttonAction:y,children:[0===(null===f||void 0===f?void 0:f.length)?(0,N.jsx)(q.R,{steps:k}):(0,N.jsx)(C,{}),(0,N.jsx)(Z.R,{title:"New project",isOpen:O,onClose:w,initialRef:E,children:(0,N.jsx)(R,{onClose:w,setLoading:g,user:t,initialRef:E})})]})]})}},98258:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app",function(){return r(22749)}])}},function(e){e.O(0,[470,415,774,888,179],(function(){return t=98258,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
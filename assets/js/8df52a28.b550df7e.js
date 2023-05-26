"use strict";(self.webpackChunkshowmethere=self.webpackChunkshowmethere||[]).push([[9994],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const l={sidebar_label:"login_log",sidebar_position:5},i="login_log",a={unversionedId:"tables/login_log",id:"tables/login_log",title:"login_log",description:"- \ub85c\uadf8\uc778 \ub85c\uadf8",source:"@site/docs/tables/login_log.md",sourceDirName:"tables",slug:"/tables/login_log",permalink:"/showmethere_doc/docs/tables/login_log",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tables/login_log.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"login_log",sidebar_position:5},sidebar:"tablesSidebar",previous:{title:"live_reservation",permalink:"/showmethere_doc/docs/tables/live_reservation"},next:{title:"user_info",permalink:"/showmethere_doc/docs/tables/user_info"}},s={},c=[{value:"Scheme",id:"scheme",level:2},{value:"Columns",id:"columns",level:2},{value:"Constant",id:"constant",level:2},{value:"logindevice <code>\ub85c\uadf8\uc778 \uae30\uae30</code>",id:"logindevice-\ub85c\uadf8\uc778-\uae30\uae30",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"login_log"},"login_log"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ub85c\uadf8\uc778 \ub85c\uadf8")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"scheme"},"Scheme"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CREATE TABLE IF NOT EXISTS `showmethere`.`login_log` (\n  `seq` BIGINT NOT NULL,\n  `member_seq` BIGINT NULL,\n  `logindevice` BIGINT NULL,\n  `logindatetime` DATETIME NULL,\n  `loginip` VARCHAR(45) NULL,\n  PRIMARY KEY (`seq`))\nENGINE = InnoDB\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"columns"},"Columns"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"seq, member_seq, logindevice, logindatetime, loginip\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"constant"},"Constant"),(0,o.kt)("h3",{id:"logindevice-\ub85c\uadf8\uc778-\uae30\uae30"},"logindevice ",(0,o.kt)("inlineCode",{parentName:"h3"},"\ub85c\uadf8\uc778 \uae30\uae30")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ios"),(0,o.kt)("li",{parentName:"ul"},"aos"),(0,o.kt)("li",{parentName:"ul"},"web")),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);
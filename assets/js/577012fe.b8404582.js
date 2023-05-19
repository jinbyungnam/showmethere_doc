"use strict";(self.webpackChunkshowmethere=self.webpackChunkshowmethere||[]).push([[3578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,f=u["".concat(s,".").concat(p)]||u[p]||d[p]||o;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"admin",sidebar_position:2},l="admin",i={unversionedId:"tables/admin",id:"tables/admin",title:"admin",description:"-  \ub9c8\uc2a4\ud130, \uc6b4\uc601\ubd80\uc11c \uacc4\uc815 \uc815\ubcf4",source:"@site/docs/tables/admin.md",sourceDirName:"tables",slug:"/tables/admin",permalink:"/showmethere_doc/docs/tables/admin",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tables/admin.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"admin",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"member",permalink:"/showmethere_doc/docs/tables/member"},next:{title:"seller_info",permalink:"/showmethere_doc/docs/tables/seller_info"}},s={},c=[{value:"Scheme",id:"scheme",level:2},{value:"Columns",id:"columns",level:2},{value:"Constant",id:"constant",level:2}],m={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"admin"},"admin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub9c8\uc2a4\ud130, \uc6b4\uc601\ubd80\uc11c \uacc4\uc815 \uc815\ubcf4")),(0,a.kt)("h2",{id:"scheme"},"Scheme"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE TABLE IF NOT EXISTS `showmethere`.`admin` (\n  `seq` BIGINT NOT NULL,\n  `id` VARCHAR(45) NULL,\n  `pwd` VARCHAR(45) NULL,\n  `name` VARCHAR(45) NULL,\n  `department` VARCHAR(45) NULL,\n  `rank` VARCHAR(45) NULL,\n  `email` VARCHAR(45) NULL,\n  `role` VARCHAR(150) NULL,\n  `regdatetime` DATETIME NULL,\n  PRIMARY KEY (`seq`),\n  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)\nENGINE = InnoDB\nCOMMENT = '\uad00\ub9ac\uc790, \uc6b4\uc601\uc790'\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"columns"},"Columns"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"seq, id, pwd, name, department, rank, email, role, regdatetime\n")),(0,a.kt)("hr",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"constant"},"Constant"),(0,a.kt)("hr",null),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);
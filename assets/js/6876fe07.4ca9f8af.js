"use strict";(self.webpackChunkshowmethere=self.webpackChunkshowmethere||[]).push([[551],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_label:"1:1\ubb38\uc758 \ub4f1\ub85d/\uc218\uc815",sidebar_position:1},l="1:1\ubb38\uc758 \ub2f5\ubcc0",o={unversionedId:"admin/\uae30\ubcf8\uad00\ub9ac/seller/inquiryreg",id:"admin/\uae30\ubcf8\uad00\ub9ac/seller/inquiryreg",title:"1:1\ubb38\uc758 \ub2f5\ubcc0",description:"\uc124\uc815",source:"@site/docs/admin/\uae30\ubcf8\uad00\ub9ac/seller/inquiryreg.md",sourceDirName:"admin/\uae30\ubcf8\uad00\ub9ac/seller",slug:"/admin/\uae30\ubcf8\uad00\ub9ac/seller/inquiryreg",permalink:"/showmethere_doc/docs/admin/\uae30\ubcf8\uad00\ub9ac/seller/inquiryreg",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/admin/\uae30\ubcf8\uad00\ub9ac/seller/inquiryreg.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"1:1\ubb38\uc758 \ub4f1\ub85d/\uc218\uc815",sidebar_position:1},sidebar:"adminSidebar",previous:{title:"1:1\ubb38\uc758",permalink:"/showmethere_doc/docs/admin/\uae30\ubcf8\uad00\ub9ac/seller/inquirylist"},next:{title:"\ub77c\uc774\ube0c\ubc29\uc1a1",permalink:"/showmethere_doc/docs/admin/\uae30\ubcf8\uad00\ub9ac/seller/live"}},s={},u=[{value:"\uc124\uc815",id:"\uc124\uc815",level:2},{value:"Statement",id:"statement",level:2},{value:"Table",id:"table",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"11\ubb38\uc758-\ub2f5\ubcc0"},"1:1\ubb38\uc758 \ub2f5\ubcc0"),(0,a.kt)("h2",{id:"\uc124\uc815"},"\uc124\uc815"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md",metastring:"title=\ub4f1\ub85d",title:"\ub4f1\ub85d"},"INSERT INTO `showmethere`.`inquiry` (`target_seq`, `question`, `type`) \nVALUES ($member_seq, $question, $type);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md",metastring:"title=\uc218\uc815",title:"\uc218\uc815"},"UPDATE\n    inquiry\nSET\n    question = $question,\n    type = $type\nWHERE\n    seq = $seq\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"statement"},"Statement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"member_seq:\ud68c\uc6d0 \ub4f1\ub85d \ud0a4"),(0,a.kt)("li",{parentName:"ul"},"type:\ubb38\uc758 \uc720\ud615"),(0,a.kt)("li",{parentName:"ul"},"seq:\ubb38\uc758 \ub4f1\ub85d \ud0a4"),(0,a.kt)("li",{parentName:"ul"},"question: \ubb38\uc758\ub0b4\uc6a9")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"table"},"Table"),(0,a.kt)("mermaid",{value:"classDiagram   \n      class inquiry{\n          bigint seq\n      }"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/tables/inquiry"},(0,a.kt)("inlineCode",{parentName:"a"},"inquiry"))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);
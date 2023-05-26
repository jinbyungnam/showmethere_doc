"use strict";(self.webpackChunkshowmethere=self.webpackChunkshowmethere||[]).push([[8195],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_label:"\uc57d\uad00\uc815\ubcf4 \ub4f1\ub85d/\uc218\uc815",sidebar_position:1},o="1:1\ubb38\uc758 \ub2f5\ubcc0",i={unversionedId:"admin/\uc6b4\uc601\uad00\ub9ac/termsreg",id:"admin/\uc6b4\uc601\uad00\ub9ac/termsreg",title:"1:1\ubb38\uc758 \ub2f5\ubcc0",description:"\uc124\uc815",source:"@site/docs/admin/\uc6b4\uc601\uad00\ub9ac/termsreg.md",sourceDirName:"admin/\uc6b4\uc601\uad00\ub9ac",slug:"/admin/\uc6b4\uc601\uad00\ub9ac/termsreg",permalink:"/showmethere_doc/docs/admin/\uc6b4\uc601\uad00\ub9ac/termsreg",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/admin/\uc6b4\uc601\uad00\ub9ac/termsreg.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"\uc57d\uad00\uc815\ubcf4 \ub4f1\ub85d/\uc218\uc815",sidebar_position:1},sidebar:"adminSidebar",previous:{title:"\uc57d\uad00\uad00\ub9ac",permalink:"/showmethere_doc/docs/admin/\uc6b4\uc601\uad00\ub9ac/terms"},next:{title:"\ucf58\ud150\uce20 \uc870\ud68c",permalink:"/showmethere_doc/docs/admin/\ucf58\ud150\uce20\uad00\ub9ac/content"}},s={},c=[{value:"\uc124\uc815",id:"\uc124\uc815",level:2},{value:"Statement",id:"statement",level:2},{value:"Table",id:"table",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"11\ubb38\uc758-\ub2f5\ubcc0"},"1:1\ubb38\uc758 \ub2f5\ubcc0"),(0,a.kt)("h2",{id:"\uc124\uc815"},"\uc124\uc815"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md",metastring:"title=\ub4f1\ub85d",title:"\ub4f1\ub85d"},"INSERT INTO `showmethere`.`terms` (`type`, `title`, `content`, `applydate`) \nVALUES ($type, $title, $content, $applydate);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md",metastring:"title=\uc218\uc815",title:"\uc218\uc815"},"UPDATE\n    terms\nSET\n    type = $type,\n    title = $title,\n    content = $content,\n    applydate = $applydate,\nWHERE\n    seq = $seq\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"statement"},"Statement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"seq:\ub4f1\ub85d \ud0a4"),(0,a.kt)("li",{parentName:"ul"},"type:\uc57d\uad00 \uc720\ud615"),(0,a.kt)("li",{parentName:"ul"},"title:\uc81c\ubaa9"),(0,a.kt)("li",{parentName:"ul"},"content:\uc57d\uad00\ub0b4\uc6a9"),(0,a.kt)("li",{parentName:"ul"},"applydate:\uc801\uc6a9\uc77c")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"table"},"Table"),(0,a.kt)("mermaid",{value:"classDiagram   \n      class terms{\n          bigint seq\n      }"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/tables/terms"},(0,a.kt)("inlineCode",{parentName:"a"},"terms"))),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);
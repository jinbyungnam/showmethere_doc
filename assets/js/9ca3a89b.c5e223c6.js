"use strict";(self.webpackChunkshowmethere=self.webpackChunkshowmethere||[]).push([[2724],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>u});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function m(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):m(m({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},b=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=l(r),b=a,u=c["".concat(s,".").concat(b)]||c[b]||d[b]||i;return r?t.createElement(u,m(m({ref:n},p),{},{components:r})):t.createElement(u,m({ref:n},p))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,m=new Array(i);m[0]=b;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:a,m[1]=o;for(var l=2;l<i;l++)m[l]=r[l];return t.createElement.apply(null,m)}return t.createElement.apply(null,r)}b.displayName="MDXCreateElement"},9832:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>m,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=r(7462),a=(r(7294),r(3905));const i={sidebar_label:"\ud68c\uc6d0\ubcc4 \ub85c\uadf8\uc778",sidebar_position:1},m="\ud68c\uc6d0\ubcc4 \ub85c\uadf8\uc778",o={unversionedId:"app/login",id:"app/login",title:"\ud68c\uc6d0\ubcc4 \ub85c\uadf8\uc778",description:"\ub9c8\uc2a4\ud130 \uacc4\uc815",source:"@site/docs/app/login.md",sourceDirName:"app",slug:"/app/login",permalink:"/showmethere_doc/docs/app/login",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/app/login.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"\ud68c\uc6d0\ubcc4 \ub85c\uadf8\uc778",sidebar_position:1},sidebar:"appSidebar",previous:{title:"App Document",permalink:"/showmethere_doc/docs/app/intro"}},s={},l=[{value:"\ub9c8\uc2a4\ud130 \uacc4\uc815",id:"\ub9c8\uc2a4\ud130-\uacc4\uc815",level:2},{value:"\uc6b4\uc601 \ubd80\uc11c",id:"\uc6b4\uc601-\ubd80\uc11c",level:2},{value:"\ud310\ub9e4\uc790 \uacc4\uc815",id:"\ud310\ub9e4\uc790-\uacc4\uc815",level:2},{value:"\ubd80\uc6b4\uc601\uc790 \uacc4\uc815",id:"\ubd80\uc6b4\uc601\uc790-\uacc4\uc815",level:2},{value:"\uc77c\ubc18\ud68c\uc6d0 \uacc4\uc815",id:"\uc77c\ubc18\ud68c\uc6d0-\uacc4\uc815",level:2}],p={toc:l},c="wrapper";function d(e){let{components:n,...r}=e;return(0,a.kt)(c,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ud68c\uc6d0\ubcc4-\ub85c\uadf8\uc778"},"\ud68c\uc6d0\ubcc4 \ub85c\uadf8\uc778"),(0,a.kt)("h2",{id:"\ub9c8\uc2a4\ud130-\uacc4\uc815"},"\ub9c8\uc2a4\ud130 \uacc4\uc815"),(0,a.kt)("mermaid",{value:"classDiagram\n      class admin{\n          bigint seq\n          varchar id\n      }"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT \n    *\nFROM\n    admin\nwhere id = '';\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/tables/admin"},(0,a.kt)("inlineCode",{parentName:"a"},"admin"))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\uc6b4\uc601-\ubd80\uc11c"},"\uc6b4\uc601 \ubd80\uc11c"),(0,a.kt)("mermaid",{value:"classDiagram\n      class admin{\n          bigint seq\n          varchar id\n      }"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT \n    *\nFROM\n    admin\nwhere m.id = '';\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/tables/admin"},(0,a.kt)("inlineCode",{parentName:"a"},"admin"))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ud310\ub9e4\uc790-\uacc4\uc815"},"\ud310\ub9e4\uc790 \uacc4\uc815"),(0,a.kt)("mermaid",{value:"classDiagram\n      member <|-- seller_info\n      member : bigint seq\n      member : varchar id\n      class seller_info{\n          bigint member_seq\n      }"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT \n    *\nFROM\n    seller_info si\n        INNER JOIN\n    member m ON si.member_seq = seq\n        INNER JOIN\n    member_sanctions ms ON m.seq = ms.member_seq\nWHERE\n    m.id = '';\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/tables/member"},(0,a.kt)("inlineCode",{parentName:"a"},"member")),"\n",(0,a.kt)("a",{parentName:"p",href:"/docs/tables/seller_info"},(0,a.kt)("inlineCode",{parentName:"a"},"seller_info")),"\n",(0,a.kt)("a",{parentName:"p",href:"/docs/tables/member_sanctions"},(0,a.kt)("inlineCode",{parentName:"a"},"member_sanctions"))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\ubd80\uc6b4\uc601\uc790-\uacc4\uc815"},"\ubd80\uc6b4\uc601\uc790 \uacc4\uc815"),(0,a.kt)("mermaid",{value:"classDiagram\n      member <|-- operator_info\n      member : bigint seq\n      member : varchar id\n      class operator_info{\n          bigint member_seq\n      }"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT \n    *\nFROM\n    operator_info oi\n        INNER JOIN\n    member m ON oi.member_seq = seq\n        INNER JOIN\n    member_sanctions ms ON m.seq = ms.member_seq\nwhere m.id = '';\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/tables/member"},(0,a.kt)("inlineCode",{parentName:"a"},"member")),"\n",(0,a.kt)("a",{parentName:"p",href:"/docs/tables/operator_info"},(0,a.kt)("inlineCode",{parentName:"a"},"operator_info")),"\n",(0,a.kt)("a",{parentName:"p",href:"/docs/tables/member_sanctions"},(0,a.kt)("inlineCode",{parentName:"a"},"member_sanctions"))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\uc77c\ubc18\ud68c\uc6d0-\uacc4\uc815"},"\uc77c\ubc18\ud68c\uc6d0 \uacc4\uc815"),(0,a.kt)("mermaid",{value:"classDiagram\n      member <|-- user_info\n      member : bigint seq\n      member : varchar id\n      class user_info{\n          bigint member_seq\n      }"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT \n    *\nFROM\n    user_info ui\n        INNER JOIN\n    member m ON ui.member_seq = seq\n        INNER JOIN\n    member_sanctions ms ON m.seq = ms.member_seq\nwhere m.id = '';\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/tables/member"},(0,a.kt)("inlineCode",{parentName:"a"},"member")),"\n",(0,a.kt)("a",{parentName:"p",href:"/docs/tables/user_info"},(0,a.kt)("inlineCode",{parentName:"a"},"user_info")),"\n",(0,a.kt)("a",{parentName:"p",href:"/docs/tables/member_sanctions"},(0,a.kt)("inlineCode",{parentName:"a"},"member_sanctions"))))}d.isMDXComponent=!0}}]);
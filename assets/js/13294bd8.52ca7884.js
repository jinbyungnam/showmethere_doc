"use strict";(self.webpackChunkshowmethere=self.webpackChunkshowmethere||[]).push([[5364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),d=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,f=s["".concat(m,".").concat(u)]||s[u]||c[u]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"\ub2f4\ub2f9\uc790 \uacc4\uc815\uc0dd\uc131",sidebar_position:1},o="\ub2f4\ub2f9\uc790 \uacc4\uc815 \uc0dd\uc131",l={unversionedId:"admin/\uae30\ubcf8\uad00\ub9ac/admin/insertadmin",id:"admin/\uae30\ubcf8\uad00\ub9ac/admin/insertadmin",title:"\ub2f4\ub2f9\uc790 \uacc4\uc815 \uc0dd\uc131",description:"\uc124\uc815",source:"@site/docs/admin/\uae30\ubcf8\uad00\ub9ac/admin/insertadmin.md",sourceDirName:"admin/\uae30\ubcf8\uad00\ub9ac/admin",slug:"/admin/\uae30\ubcf8\uad00\ub9ac/admin/insertadmin",permalink:"/showmethere_doc/docs/admin/\uae30\ubcf8\uad00\ub9ac/admin/insertadmin",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/admin/\uae30\ubcf8\uad00\ub9ac/admin/insertadmin.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"\ub2f4\ub2f9\uc790 \uacc4\uc815\uc0dd\uc131",sidebar_position:1},sidebar:"adminSidebar",previous:{title:"\ub77c\uc774\ube0c\ubc29\uc1a1 \uc228\uae40/\ud574\uc81c",permalink:"/showmethere_doc/docs/admin/\uae30\ubcf8\uad00\ub9ac/admin/hidelive"},next:{title:"\ub77c\uc774\ube0c\ubc29\uc1a1",permalink:"/showmethere_doc/docs/admin/\uae30\ubcf8\uad00\ub9ac/admin/reportcontent"}},m={},d=[{value:"\uc124\uc815",id:"\uc124\uc815",level:2},{value:"Statement",id:"statement",level:2},{value:"Table",id:"table",level:2}],p={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ub2f4\ub2f9\uc790-\uacc4\uc815-\uc0dd\uc131"},"\ub2f4\ub2f9\uc790 \uacc4\uc815 \uc0dd\uc131"),(0,a.kt)("h2",{id:"\uc124\uc815"},"\uc124\uc815"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"INSERT INTO `showmethere`.`admin` (`id`, `pwd`, `name`, `department`, `position`, `email`, `phone`, `role`) \nVALUES ($id, $pwd, $name, $department, $position, $email, $phone, $role);\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"statement"},"Statement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id:ID"),(0,a.kt)("li",{parentName:"ul"},"pwd:\ud328\uc2a4\uc6cc\ub4dc"),(0,a.kt)("li",{parentName:"ul"},"name:\uc774\ub984"),(0,a.kt)("li",{parentName:"ul"},"department:\ubd80\uc11c"),(0,a.kt)("li",{parentName:"ul"},"position:\uc9c1\uae09"),(0,a.kt)("li",{parentName:"ul"},"email:\uc774\uba54\uc77c"),(0,a.kt)("li",{parentName:"ul"},"phone:\ud578\ub4dc\ud3f0\ubc88\ud638"),(0,a.kt)("li",{parentName:"ul"},"role:\uc5ed\ud560")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"table"},"Table"),(0,a.kt)("mermaid",{value:"classDiagram   \n      class admin{\n          bigint seq\n      }"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/tables/admin"},(0,a.kt)("inlineCode",{parentName:"a"},"admin"))),(0,a.kt)("hr",null))}c.isMDXComponent=!0}}]);
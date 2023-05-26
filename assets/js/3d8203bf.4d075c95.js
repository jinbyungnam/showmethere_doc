"use strict";(self.webpackChunkshowmethere=self.webpackChunkshowmethere||[]).push([[2849],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),c=p(n),s=r,g=c["".concat(d,".").concat(s)]||c[s]||k[s]||l;return n?a.createElement(g,i(i({ref:e},o),{},{components:n})):a.createElement(g,i({ref:e},o))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var m={};for(var d in e)hasOwnProperty.call(e,d)&&(m[d]=e[d]);m.originalType=t,m[c]="string"==typeof t?t:r,i[1]=m;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9991:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_label:"\ub2f4\ub2f9\uc790 \uacc4\uc815 \uc0c1\uc138",sidebar_position:1},i="\ub2f4\ub2f9\uc790 \uacc4\uc815 \uc0c1\uc138",m={unversionedId:"admin/\uae30\ubcf8\uad00\ub9ac/admin/admindetail",id:"admin/\uae30\ubcf8\uad00\ub9ac/admin/admindetail",title:"\ub2f4\ub2f9\uc790 \uacc4\uc815 \uc0c1\uc138",description:"\uc870\ud68c",source:"@site/docs/admin/\uae30\ubcf8\uad00\ub9ac/admin/admindetail.md",sourceDirName:"admin/\uae30\ubcf8\uad00\ub9ac/admin",slug:"/admin/\uae30\ubcf8\uad00\ub9ac/admin/admindetail",permalink:"/showmethere_doc/docs/admin/\uae30\ubcf8\uad00\ub9ac/admin/admindetail",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/admin/\uae30\ubcf8\uad00\ub9ac/admin/admindetail.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"\ub2f4\ub2f9\uc790 \uacc4\uc815 \uc0c1\uc138",sidebar_position:1},sidebar:"adminSidebar",previous:{title:"Admin Document",permalink:"/showmethere_doc/docs/admin/intro"},next:{title:"\ub2f4\ub2f9\uc790 \uacc4\uc815\ubaa9\ub85d",permalink:"/showmethere_doc/docs/admin/\uae30\ubcf8\uad00\ub9ac/admin/adminlist"}},d={},p=[{value:"\uc870\ud68c",id:"\uc870\ud68c",level:2},{value:"Statement",id:"statement",level:2},{value:"Table",id:"table",level:2}],o={toc:p},c="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ub2f4\ub2f9\uc790-\uacc4\uc815-\uc0c1\uc138"},"\ub2f4\ub2f9\uc790 \uacc4\uc815 \uc0c1\uc138"),(0,r.kt)("h2",{id:"\uc870\ud68c"},"\uc870\ud68c"),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SELECT \n    seq,\n    department,\n    id,\n    pwd,\n    name,\n    position,\n    phone,\n    email,\n    role,\n    dashboard,\n    livemonitering,\n    videoreport,\n    sellerreg,\n    sellermanager,\n    usermanager,\n    membersanctions,\n    memberdormant,\n    content,\n    inquiry,\n    coupon,\n    statistics\nFROM\n    admin\n        LEFT JOIN\n    admin_grant ag ON admin.seq = ag.admin_seq\nWHERE\n    admin.seq = $seq\nORDER BY regdatetime;\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\ud56d\ubaa9"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\ud0c0\uc785"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\ucf54\uba58\ud2b8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"seq"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bigint"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ub4f1\ub85d \ud0a4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"department"),(0,r.kt)("td",{parentName:"tr",align:"left"},"varchar"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ubd80\uc11c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"varchar"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pwd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"varchar"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud328\uc2a4\uc6cc\ub4dc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"varchar"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc774\ub984")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"position"),(0,r.kt)("td",{parentName:"tr",align:"left"},"varchar"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc9c1\uae09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phone"),(0,r.kt)("td",{parentName:"tr",align:"left"},"varchar"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud734\ub300\ud3f0\ubc88\ud638")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:"left"},"varchar"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc774\uba54\uc77c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"role"),(0,r.kt)("td",{parentName:"tr",align:"left"},"varchar"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc5ed\ud560")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dashboard"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uad8c\ud55c-\ub300\uc2dc\ubcf4\ub4dc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"livemonitering"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uad8c\ud55c-\ub77c\uc774\ube0c\ubaa8\ub2c8\ud130\ub9c1 \uad00\ub9ac")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"videoreport"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uad8c\ud55c-\uc601\uc0c1\uc2e0\uace0 \uad00\ub9ac")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sellerreg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uad8c\ud55c-\uc2e0\uccad\ud68c\uc6d0 \uad00\ub9ac")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sellermanager"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uad8c\ud55c-\ud310\ub9e4\uc0ac \uad00\ub9ac")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"usermanager"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uad8c\ud55c-\uc77c\ubc18\ud68c\uc6d0 \uad00\ub9ac")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"membersanctions"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uad8c\ud55c-\uc81c\ud55c\ud68c\uc6d0 \uad00\ub9ac")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"memberdormant"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uad8c\ud55c-\ud734\uba74\uacc4\uc815 \uad00\ub9ac")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uad8c\ud55c-\ucf58\ud150\uce20 \uad00\ub9ac")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inquiry"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uad8c\ud55c-\ubb38\uc758 \uad00\ub9ac")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"coupon"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uad8c\ud55c-\ucfe0\ud3f0 \uad00\ub9ac")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"statistics"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uad8c\ud55c-\ud1b5\uacc4")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"statement"},"Statement"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"table"},"Table"),(0,r.kt)("mermaid",{value:"classDiagram        \n      class admin{\n          bigint seq\n      }\n      class admin_grant{\n          bigint admin-seq\n      }"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/tables/admin"},(0,r.kt)("inlineCode",{parentName:"a"},"admin")),"\n",(0,r.kt)("a",{parentName:"p",href:"/docs/tables/admin_grant"},(0,r.kt)("inlineCode",{parentName:"a"},"admin_grant"))),(0,r.kt)("hr",null))}k.isMDXComponent=!0}}]);
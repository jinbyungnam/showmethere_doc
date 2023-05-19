"use strict";(self.webpackChunkshowmethere=self.webpackChunkshowmethere||[]).push([[7706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,b=d["".concat(s,".").concat(u)]||d[u]||p[u]||l;return n?r.createElement(b,o(o({ref:t},m),{},{components:n})):r.createElement(b,o({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_label:"\ub300\uc2dc\ubcf4\ub4dc",sidebar_position:5},o="\ub300\uc2dc\ubcf4\ub4dc",i={unversionedId:"querys/seller/dashboard",id:"querys/seller/dashboard",title:"\ub300\uc2dc\ubcf4\ub4dc",description:"1. \ub0b4 \ud504\ub85c\ud544 \ubc29\ubb38\uc790",source:"@site/docs/querys/seller/dashboard.md",sourceDirName:"querys/seller",slug:"/querys/seller/dashboard",permalink:"/docs/querys/seller/dashboard",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/querys/seller/dashboard.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"\ub300\uc2dc\ubcf4\ub4dc",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud328\uc2a4\uc6cc\ub4dc \ucc3e\uae30",permalink:"/docs/querys/seller/pwdfind"},next:{title:"member",permalink:"/docs/tables/member"}},s={},c=[{value:"1. \ub0b4 \ud504\ub85c\ud544 \ubc29\ubb38\uc790",id:"1-\ub0b4-\ud504\ub85c\ud544-\ubc29\ubb38\uc790",level:2},{value:"Statement",id:"statement",level:3},{value:"Table",id:"table",level:3},{value:"2. \ucf58\ud150\uce20 \uc21c\uc704",id:"2-\ucf58\ud150\uce20-\uc21c\uc704",level:2},{value:"Statement",id:"statement-1",level:3},{value:"Table",id:"table-1",level:3}],m={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ub300\uc2dc\ubcf4\ub4dc"},"\ub300\uc2dc\ubcf4\ub4dc"),(0,a.kt)("h2",{id:"1-\ub0b4-\ud504\ub85c\ud544-\ubc29\ubb38\uc790"},"1. \ub0b4 \ud504\ub85c\ud544 \ubc29\ubb38\uc790"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT \n    DATE_FORMAT(visitdatetime, '%Y-%m-%d') AS visitdatet, COUNT(*)\nFROM\n    seller_visit\nWHERE\n    visitdatetime >= $start\n        AND visitdatetime < $end\nGROUP BY visitdatet\nORDER BY visitdatet;\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"statement"},"Statement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"start:\uc870\ud68c \uc2dc\uc791\uc77c"),(0,a.kt)("li",{parentName:"ul"},"end:\uc870\ud68c \uc885\ub8cc\uc77c")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"table"},"Table"),(0,a.kt)("mermaid",{value:"classDiagram        \n      class member{\n          bigint seq\n          varchar id\n      }\n      class seller_info{\n          bigint member_seq\n          int companytype\n          varchar ceoname\n          varchar ceotel\n          varchar email\n      }"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/tables/member"},(0,a.kt)("inlineCode",{parentName:"a"},"member")),"\n",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/tables/seller_info"},(0,a.kt)("inlineCode",{parentName:"a"},"seller_info"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"2-\ucf58\ud150\uce20-\uc21c\uc704"},"2. \ucf58\ud150\uce20 \uc21c\uc704"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT \n    member.type,\n    member.nick,\n    content.title,\n    IFNULL(viewdata.cnt, 0) AS view_count,\n    IFNULL(recomenddata.cnt, 0) AS recomend_count,\n    IFNULL(reportdata.cnt, 0) AS report_count,\n    content.videourl\nFROM\n    content\n        INNER JOIN\n    member ON content.member_seq = member.seq\n        LEFT JOIN\n    (SELECT \n        content_seq,\n            DATE_FORMAT(viewdatetime, '%Y-%m-%d') AS viewdate,\n            COUNT(*) as cnt\n    FROM\n        content_view\n    WHERE\n        member_seq = %seq\n            AND viewdatetime >= $start\n            AND viewdatetime < $end\n    GROUP BY content_seq , viewdate) AS viewdata ON content.seq = viewdata.cotent_seq\n        LEFT JOIN\n    (SELECT \n        content_seq,\n            DATE_FORMAT(recommenddatetime, '%Y-%m-%d') AS recommenddate,\n            COUNT(*) as cnt\n    FROM\n        content_recommend\n    WHERE\n        member_seq = %seq\n            AND recommenddatetime >= $start\n            AND recommenddatetime < $end\n    GROUP BY content_seq , recommenddate) AS recomenddata ON content.seq = recomenddata.cotent_seq\n        LEFT JOIN\n    (SELECT \n        content_seq,\n            DATE_FORMAT(reportdatetime, '%Y-%m-%d') AS reportdate,\n            COUNT(*) as cnt\n    FROM\n        content_report\n    WHERE\n        member_seq = %seq\n            AND reportdatetime >= $start\n            AND reportdatetime < $end\n    GROUP BY content_seq , reportdate) AS reportdata ON content.seq = reportdata.cotent_seq\nWHERE\n    content.member_seq = %seq\norder by view_count+recomend_count*100;\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"statement-1"},"Statement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"seq:\ud68c\uc6d0 \ub4f1\ub85d \ud0a4"),(0,a.kt)("li",{parentName:"ul"},"start:\uc870\ud68c \uc2dc\uc791\uc77c"),(0,a.kt)("li",{parentName:"ul"},"end:\uc870\ud68c \uc885\ub8cc\uc77c")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"table-1"},"Table"),(0,a.kt)("mermaid",{value:"classDiagram        \n      class member{\n          bigint seq\n          varchar id\n      }\n      class seller_info{\n          bigint member_seq\n          int companytype\n          varchar ceoname\n          varchar ceotel\n          varchar email\n      }"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/tables/member"},(0,a.kt)("inlineCode",{parentName:"a"},"member")),"\n",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/tables/seller_info"},(0,a.kt)("inlineCode",{parentName:"a"},"seller_info"))),(0,a.kt)("hr",null))}p.isMDXComponent=!0}}]);
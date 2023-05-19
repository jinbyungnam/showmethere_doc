"use strict";(self.webpackChunkshowmethere=self.webpackChunkshowmethere||[]).push([[7837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_label:"content",sidebar_position:5},o="content",i={unversionedId:"tables/content",id:"tables/content",title:"content",description:"- \ucee8\ud150\uce20",source:"@site/docs/tables/content.md",sourceDirName:"tables",slug:"/tables/content",permalink:"/showmethere_doc/docs/tables/content",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tables/content.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"content",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"operator_info",permalink:"/showmethere_doc/docs/tables/operator_info"},next:{title:"user_info",permalink:"/showmethere_doc/docs/tables/user_info"}},c={},s=[{value:"Scheme",id:"scheme",level:2},{value:"Columns",id:"columns",level:2},{value:"Constant",id:"constant",level:2},{value:"type <code>\uce74\ud14c\uace0\ub9ac</code>",id:"type-\uce74\ud14c\uace0\ub9ac",level:3},{value:"videotype <code>\uc601\uc0c1\uc720\ud615</code>",id:"videotype-\uc601\uc0c1\uc720\ud615",level:3},{value:"private <code>\ube44\uacf5\uac1c\uc5ec\ubd80</code>",id:"private-\ube44\uacf5\uac1c\uc5ec\ubd80",level:3},{value:"advertisement <code>\uad11\uace0</code>",id:"advertisement-\uad11\uace0",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"content"},"content"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucee8\ud150\uce20")),(0,a.kt)("h2",{id:"scheme"},"Scheme"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE TABLE IF NOT EXISTS `showmethere`.`content` (\n  `seq` BIGINT NOT NULL,\n  `member_seq` BIGINT NOT NULL,\n  `manager_seq` BIGINT NULL,\n  `title` VARCHAR(45) NULL,\n  `type` INT NULL COMMENT '\uad6c\ubd84\\n0:\ub85c\uceec\\n1:\uc2a4\ud14c\uc774\\n2:\ud14c\uc774\uc2a4\ud2b8\\n3:\uc1fc\ud551\ud301',\n  `thumbnailurl` VARCHAR(45) NULL,\n  `videourl` VARCHAR(45) NULL,\n  `videotype` INT NULL COMMENT '\uc601\uc0c1\uc720\ud615\\n0:\ub2e4\uc2dc\ubcf4\uae30\\n1:\uc77c\ubc18\uc601\uc0c1',\n  `live_seq` BIGINT NULL,\n  `advertisement` VARCHAR(45) NULL,\n  `private` INT NULL DEFAULT 0 COMMENT '0:\uacf5\uac1c\\n1:\ube44\uacf5\uac1c',\n  `hide` INT NULL COMMENT '\ucc28\ub2e8\\n0:\ub178\ucd9c\\n1:\ub178\ucd9c\uae08\uc9c0',\n  `tag` VARCHAR(45) NULL,\n  `loc` POINT NULL,\n  `city_seq` BIGINT NULL,\n  `revenue` INT NULL COMMENT '\uc218\uc775',\n  `advertisement` INT NULL COMMENT '\uad11\uace0\\n0:\uc5c6\uc74c\\n1:\ud5c8\uc6a9',\n  `tag` VARCHAR(100) NULL COMMENT '\ud574\uc26c\ud0dc\uadf8',\n  PRIMARY KEY (`seq`))\nENGINE = InnoDB\nCOMMENT = '\ucee8\ud150\uce20'\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"columns"},"Columns"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"seq, member_seq, manager_seq, title, type, thumbnailurl, videourl, videotype, live_seq, advertisement, private, hide, tag, loc, city_seq, revenue, advertisement, tag\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"constant"},"Constant"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type-\uce74\ud14c\uace0\ub9ac"},"type ",(0,a.kt)("inlineCode",{parentName:"h3"},"\uce74\ud14c\uace0\ub9ac")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0:\ub85c\uceec"),(0,a.kt)("li",{parentName:"ul"},"1:\uc2a4\ud14c\uc774"),(0,a.kt)("li",{parentName:"ul"},"2:\ud14c\uc774\uc2a4\ud2b8"),(0,a.kt)("li",{parentName:"ul"},"3:\uc1fc\ud551\ud301")),(0,a.kt)("h3",{id:"videotype-\uc601\uc0c1\uc720\ud615"},"videotype ",(0,a.kt)("inlineCode",{parentName:"h3"},"\uc601\uc0c1\uc720\ud615")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0:\ub2e4\uc2dc\ubcf4\uae30"),(0,a.kt)("li",{parentName:"ul"},"1:\uc77c\ubc18\uc601\uc0c1")),(0,a.kt)("h3",{id:"private-\ube44\uacf5\uac1c\uc5ec\ubd80"},"private ",(0,a.kt)("inlineCode",{parentName:"h3"},"\ube44\uacf5\uac1c\uc5ec\ubd80")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0:\uacf5\uac1c"),(0,a.kt)("li",{parentName:"ul"},"1:\ube44\uacf5\uac1c")),(0,a.kt)("h3",{id:"advertisement-\uad11\uace0"},"advertisement ",(0,a.kt)("inlineCode",{parentName:"h3"},"\uad11\uace0")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0:\ubd88\uac00"),(0,a.kt)("li",{parentName:"ul"},"1:\ud5c8\uc6a9")),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);
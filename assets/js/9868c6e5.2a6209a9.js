"use strict";(self.webpackChunkshowmethere=self.webpackChunkshowmethere||[]).push([[1002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(n),p=a,N=s["".concat(d,".").concat(p)]||s[p]||u[p]||l;return n?r.createElement(N,i(i({ref:t},m),{},{components:n})):r.createElement(N,i({ref:t},m))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_label:"member",sidebar_position:1},i="member",o={unversionedId:"tables/member",id:"tables/member",title:"member",description:"- \uc77c\ubc18\ud68c\uc6d0, \ud310\ub9e4\uc790, \ubd80\uc6b4\uc601\uc790 \uacc4\uc815 \uc815\ubcf4",source:"@site/docs/tables/member.md",sourceDirName:"tables",slug:"/tables/member",permalink:"/showmethere_doc/docs/tables/member",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tables/member.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"member",sidebar_position:1},sidebar:"tablesSidebar",next:{title:"admin",permalink:"/showmethere_doc/docs/tables/admin"}},d={},c=[{value:"Scheme",id:"scheme",level:2},{value:"Columns",id:"columns",level:2},{value:"Constant",id:"constant",level:2},{value:"type <code>\ud68c\uc6d0\uad6c\ubd84</code>",id:"type-\ud68c\uc6d0\uad6c\ubd84",level:3},{value:"joinpath <code>\uac00\uc785\uacbd\ub85c</code>",id:"joinpath-\uac00\uc785\uacbd\ub85c",level:3},{value:"joindevice <code>\uac00\uc785\uae30\uae30</code>",id:"joindevice-\uac00\uc785\uae30\uae30",level:3},{value:"identity <code>\ubcf8\uc778\uc778\uc99d</code>",id:"identity-\ubcf8\uc778\uc778\uc99d",level:3},{value:"secession <code>\ud0c8\ud1f4</code>",id:"secession-\ud0c8\ud1f4",level:3},{value:"dormant <code>\ud734\uba74\uacc4\uc815</code>",id:"dormant-\ud734\uba74\uacc4\uc815",level:3},{value:"gender <code>\uc131\ubcc4</code>",id:"gender-\uc131\ubcc4",level:3}],m={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"member"},"member"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc77c\ubc18\ud68c\uc6d0, \ud310\ub9e4\uc790, \ubd80\uc6b4\uc601\uc790 \uacc4\uc815 \uc815\ubcf4")),(0,a.kt)("h2",{id:"scheme"},"Scheme"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE TABLE IF NOT EXISTS `showmethere`.`member` (\n  `seq` BIGINT NOT NULL,\n  `id` VARCHAR(45) NOT NULL COMMENT 'ID',\n  `pwd` VARCHAR(45) NOT NULL COMMENT '\ud328\uc2a4\uc6cc\ub4dc',\n  `name` VARCHAR(45) NOT NULL COMMENT '\uc774\ub984',\n  `nick` VARCHAR(45) NOT NULL COMMENT '\ub2c9\ub124\uc784',\n  `type` INT NOT NULL COMMENT '\ud68c\uc6d0\ud0c0\uc785\\n0:\uc77c\ubc18\ud68c\uc6d0\\n1:\ud310\ub9e4\uc790\\n2:\ubd80\uc6b4\uc601\uc790',\n  `joindatetime` DATETIME NULL COMMENT '\uac00\uc785\uc77c\uc2dc',\n  `sanctionstype` INT NULL DEFAULT 0 COMMENT '\uc81c\uc7ac',\n  `secession` INT NULL DEFAULT 0 COMMENT '\ud0c8\ud1f4\\n0:\uc5c6\uc74c\\n1:\uc694\uccad\\n2:\ud0c8\ud1f4',\n  `secessiondate` DATETIME NULL COMMENT '\ud0c8\ud1f4\uc77c\uc2dc',\n  `joinpath` INT NULL COMMENT '\uac00\uc785\uacbd\ub85c\\n0:\ub85c\uceec\\n1:\uce74\uce74\uc624\\n2:\uad6c\uae00\\n3:\uc560\ud50c\\n4:\uc778\uc2a4\ud0c0',\n  `joindevice` VARCHAR(45) NULL DEFAULT '' COMMENT '\uac00\uc785\uae30\uae30\\nios\\naos\\nweb',\n  `nation` VARCHAR(45) NULL COMMENT '\uad6d\uac00',\n  `logindatetime` DATETIME NULL COMMENT '\ub85c\uadf8\uc778\uc77c\uc2dc',\n  `dormant` INT NULL DEFAULT 0 COMMENT '\ud734\uba74\uacc4\uc815\\n0:\uc5c6\uc74c\\n1:\ud574\ub2f9',\n  `email` VARCHAR(45) NULL DEFAULT '' COMMENT '\uc774\uba54\uc77c',\n  `gender` INT NULL DEFAULT 0 COMMENT '\uc131\ubcc4\\n1:\ub0a8\uc131\\n2:\uc5ec\uc131',\n  `birthday` VARCHAR(45) NULL DEFAULT '' COMMENT '\uc0dd\ub144\uc6d4\uc77c',\n  `identity` INT NULL COMMENT '\ubcf8\uc778\uc778\uc99d\\n0:\ubbf8\uc778\uc99d\\n1\uc778\uc99d',\n  `phone` VARCHAR(45) NULL COMMENT '\ud578\ub4dc\ud3f0\ubc88\ud638',\n  PRIMARY KEY (`seq`),\n  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,\n  UNIQUE INDEX `nick_UNIQUE` (`nick` ASC) VISIBLE)\nENGINE = InnoDB\nCOMMENT = '\ud68c\uc6d0\uc815\ubcf4'\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"columns"},"Columns"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"seq, id, pwd, name, nick, type, joindatetime, sanctionstype, secession, secessiondate, joinpath, joindevice, nation, logindatetime, dormant, email, gender, birthday, phone\n")),(0,a.kt)("hr",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"constant"},"Constant"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type-\ud68c\uc6d0\uad6c\ubd84"},"type ",(0,a.kt)("inlineCode",{parentName:"h3"},"\ud68c\uc6d0\uad6c\ubd84")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0:\uc77c\ubc18\ud68c\uc6d0"),(0,a.kt)("li",{parentName:"ul"},"1:\ud310\ub9e4\uc790"),(0,a.kt)("li",{parentName:"ul"},"2:\ubd80\uc6b4\uc601\uc790")),(0,a.kt)("h3",{id:"joinpath-\uac00\uc785\uacbd\ub85c"},"joinpath ",(0,a.kt)("inlineCode",{parentName:"h3"},"\uac00\uc785\uacbd\ub85c")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0:\ub85c\uceec"),(0,a.kt)("li",{parentName:"ul"},"1:\uce74\uce74\uc624"),(0,a.kt)("li",{parentName:"ul"},"2:\uad6c\uae00"),(0,a.kt)("li",{parentName:"ul"},"3:\uc560\ud50c"),(0,a.kt)("li",{parentName:"ul"},"4:\uc778\uc2a4\ud0c0")),(0,a.kt)("h3",{id:"joindevice-\uac00\uc785\uae30\uae30"},"joindevice ",(0,a.kt)("inlineCode",{parentName:"h3"},"\uac00\uc785\uae30\uae30")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ios"),(0,a.kt)("li",{parentName:"ul"},"aos"),(0,a.kt)("li",{parentName:"ul"},"web")),(0,a.kt)("h3",{id:"identity-\ubcf8\uc778\uc778\uc99d"},"identity ",(0,a.kt)("inlineCode",{parentName:"h3"},"\ubcf8\uc778\uc778\uc99d")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0:\ubbf8\uc778\uc99d"),(0,a.kt)("li",{parentName:"ul"},"1:\uc778\uc99d")),(0,a.kt)("h3",{id:"secession-\ud0c8\ud1f4"},"secession ",(0,a.kt)("inlineCode",{parentName:"h3"},"\ud0c8\ud1f4")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0:\uc5c6\uc74c"),(0,a.kt)("li",{parentName:"ul"},"1:\uc694\uccad"),(0,a.kt)("li",{parentName:"ul"},"2:\ud0c8\ud1f4")),(0,a.kt)("h3",{id:"dormant-\ud734\uba74\uacc4\uc815"},"dormant ",(0,a.kt)("inlineCode",{parentName:"h3"},"\ud734\uba74\uacc4\uc815")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0:\uc5c6\uc74c"),(0,a.kt)("li",{parentName:"ul"},"1:\ud574\ub2f9")),(0,a.kt)("h3",{id:"gender-\uc131\ubcc4"},"gender ",(0,a.kt)("inlineCode",{parentName:"h3"},"\uc131\ubcc4")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"0:\uc54c\uc218\uc5c6\uc74c"),(0,a.kt)("li",{parentName:"ul"},"1:\ub0a8\uc131"),(0,a.kt)("li",{parentName:"ul"},"2:\uc5ec\uc131")),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);
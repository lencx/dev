"use strict";(self.webpackChunkdev=self.webpackChunkdev||[]).push([[135],{4724:function(e,t,a){var n=a(7294),r=a(647);t.Z=function(e){var t=e.author;return n.createElement("div",{className:"author-info"},n.createElement("span",{className:"author",title:t.url,onClick:function(){return(0,r.go)(t.url)}},n.createElement("img",{src:t.avatarUrl,alt:t.login}),n.createElement("span",null,t.login)),e.date&&n.createElement("i",{className:"date"},(0,r.G$)(e.date)),e.extra)}},3863:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(1597),l={zap:"⚡",gear:"⚙️",beer:"🍺",star:"⭐",fire:"🔥",tada:"🎉",ninja:"🥷",mega:"📣",crab:"🦀",rocket:"🚀",warning:"⚠️",unicorn:"🦄",lobster:"🦞",cyclone:"🌀",rainbow:"🌈",computer:"💻",nail_care:"💅",sunglasses:"😎",see_no_evil:"🙈",crystal_ball:"🔮",monocle_face:"🧐",speech_balloon:"💬",exploding_head:"🤯",hammer_and_wrench:"🛠️",globe_with_meridians:"🌐",page_facing_up:"📄",thinking:"🤔",sparkling_heart:"💖",boom:"💥",collision:"💥",anger:"💢",book:"📖",open_book:"📖",books:"📚",game_die:"🎲"},c=a(647),o=function(e){var t=e.data,a=e.go;return n.createElement(r.Link,{className:"gg-category",to:a||"/category/"+(0,c.FL)(t.name,!0),target:a?"_blank":"_self"},function(e){return l[e.slice(1,-1)]||""}(t.emoji)," ",t.name)}},4297:function(e,t,a){var n=a(7294),r=a(647);t.Z=function(e){var t=e.repo+"/discussions/"+e.number;return n.createElement("a",{className:"number issues-num",href:t,target:"_blank"},e.len?(0,r.K0)(e.number,e.len):"#"+e.number)}},8410:function(e,t,a){var n=a(7294),r=a(1597),l=a(647);t.Z=function(e){var t=e.data;return n.createElement(r.Link,{key:t.name,className:"gg-label",style:{borderColor:"#"+t.color},to:"/labels/"+(0,l.FL)(t.name)},n.createElement("b",{style:{background:"#"+t.color}},"#"),n.createElement("em",null,t.name))}},4189:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(7294),r=a(1471),l={width:24,height:24,body:'<path fill="currentColor" d="M17 12V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14l4-4h10a1 1 0 0 0 1-1m4-6h-2v9H6v2a1 1 0 0 0 1 1h11l4 4V7a1 1 0 0 0-1-1Z"/>'},c={width:24,height:24,body:'<path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29H9a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m8.19 3.5c-.89 0-1.6.18-2.14.54c-.55.36-.83.96-.78 1.65h1.97c0-.28.1-.49.26-.63c.2-.14.42-.21.69-.21c.31 0 .58.08.76.26c.18.17.27.39.27.69c0 .28-.08.53-.22.74c-.17.22-.38.4-.64.54c-.52.32-.86.6-1.07.84c-.19.24-.29.58-.29 1.08h2c0-.28.05-.5.14-.68c.09-.17.26-.32.52-.47c.46-.21.84-.49 1.13-.85c.29-.37.44-.76.44-1.2c0-.7-.27-1.26-.81-1.68c-.54-.41-1.29-.62-2.23-.62M11 12v2h2v-2h-2Z"/>'},o={width:24,height:24,body:'<path fill="currentColor" d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"/>'},s=a(4911),i=a(4724),m=a(4297),u=a(3863),h=a(8410),d=a(1597),v={width:24,height:24,body:'<path fill="currentColor" d="M2 3h17a2 2 0 0 1 2 2v4h-2V5H2v14h17v-4h2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m15 12v-2h7v-2h-7V9l-4 3l4 3M4 13h7v-2H4v2m0-4h7V7H4v2m0 8h4v-2H4v2Z"/>'},E={width:24,height:24,body:'<path fill="currentColor" d="M22 3H5a2 2 0 0 0-2 2v4h2V5h17v14H5v-4H3v4a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M7 15v-2H0v-2h7V9l4 3l-4 3m13-2h-7v-2h7v2m0-4h-7V7h7v2m-3 8h-4v-2h4v2Z"/>'},g=function(e){var t=e.previous,a=e.next;return n.createElement("div",{className:"gg-issues-prev-next"},t&&n.createElement(d.Link,{className:"prev",to:"/issues/"+t.number},n.createElement("span",null,n.createElement(r.JO,{className:"icon-action",icon:v,fontSize:"20"}),t.title)),a&&n.createElement(d.Link,{className:"next",to:"/issues/"+a.number},n.createElement("span",null,a.title,n.createElement(r.JO,{className:"icon-action",icon:E,fontSize:"20"}))))};function b(e){var t=(0,n.useState)(!0),a=t[0],d=t[1],v=e.data.issuesJson,E=v.labels.edges,b=v.comments.edges,f=b.length>0,p=v.category.isAnswerable,y=v.author,N=e.data.site.siteMetadata.repo,_=e.pageContext;return(0,n.useEffect)((function(){d(v.category.isAnswerable)}),[]),n.createElement(s.Z,{className:"issues-page",title:v.title+" | Issues"},n.createElement("div",{className:"markdown-body"},n.createElement("h1",null,n.createElement("span",null,n.createElement(m.Z,{repo:N,number:v.number}),n.createElement("span",null,v.title))),n.createElement("div",{className:"widget"},n.createElement(u.Z,{data:v.category}),E.map((function(e){var t=e.node;return n.createElement(h.Z,{key:t.name,data:t})}))),n.createElement("div",null,n.createElement(i.Z,{author:y,date:v.updatedAt}),n.createElement("div",{className:"ques-content"},p&&n.createElement("div",null,n.createElement("span",{className:"icon-action quesicon",title:"Question"},n.createElement(r.JO,{icon:c,fontSize:30})),n.createElement("span",{className:"vote"},n.createElement(r.JO,{icon:o}),n.createElement("b",null,v.upvoteCount))),n.createElement("div",{className:"quescontent",dangerouslySetInnerHTML:{__html:v.bodyHTML}}))),n.createElement(g,{previous:_.previous,next:_.next}),n.createElement("div",{className:"answer-content"},f&&p&&n.createElement("div",{className:"icon-action answericon",title:"Answer",onClick:function(){return d(!a)}},n.createElement(r.JO,{icon:l,fontSize:30})),n.createElement("div",{className:"comments"},f&&!a&&b.map((function(e){var t=e.node,a=t.replies.edges;return n.createElement("div",{className:"comments-item",key:t.id},n.createElement(i.Z,{author:t.author}),n.createElement("div",{className:"comments-item-content",dangerouslySetInnerHTML:{__html:t.bodyHTML}}),a.map((function(e){var t=e.node;return n.createElement("div",{className:"comments-item",key:t.id},n.createElement(i.Z,{author:t.author}),n.createElement("div",{className:"comments-item-content",dangerouslySetInnerHTML:{__html:t.bodyHTML}}))})))}))))))}}}]);
//# sourceMappingURL=component---src-templates-issues-tsx-98d8e237b3de955e06ac.js.map
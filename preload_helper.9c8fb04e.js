!function(){"use strict";var t="/lango-lib/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"lango-ui","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.40d0f1aa.async.js",9],["LangoBadge__index.md.45c4f1ba.async.js",50],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.b11feb57.async.js",65],["HikPlayer__index.md.e76f8ba2.async.js",83],["LangoFilter__index.md.7da3c4f7.async.js",229],["LangoMap__index.md.55e51acb.async.js",264],["docs__components.md.948dfe94.async.js",314],["LangoVideo__index.md.b935dcf7.async.js",402],["nm__dumi__theme-default__layouts__DocLayout__index.98d32a3f.async.js",519],["574.e8c51481.chunk.css",574],["574.5479ab2d.async.js",574],["LangoAvatar__index.md.898b6fd5.async.js",616],["LangoSpace__index.md.36d3efd4.async.js",825],["dumi__tmp-production__dumi__theme__ContextWrapper.5817c156.async.js",923],["docs__index.md.18b5335f.async.js",935],["docs__guide.md.e721fcc0.async.js",937],["DhPlayer__index.md.be82007b.async.js",987]],"r":{"/*":[3,4,10,11,12,15],"/":[16,10,11,12,15],"/components":[8,10,11,12,15],"/guide":[17,10,11,12,15],"/~demos/:id":[0,1,15],"/components/dh-player":[18,10,11,12,15],"/components/hik-player":[5,10,11,12,15],"/components/lango-avatar":[13,10,11,12,15],"/components/lango-badge":[2,10,11,12,15],"/components/lango-filter":[6,10,11,12,15],"/components/lango-map":[7,10,11,12,15],"/components/lango-space":[14,10,11,12,15],"/components/lango-video":[9,10,11,12,15]}},{publicPath:"/lango-lib/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();
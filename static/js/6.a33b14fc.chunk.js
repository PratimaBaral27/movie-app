(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[6],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var c=a(3),s=a(82),n=a(0),r=a.n(n),i=a(72),l=a.n(i),o=a(62),d=a(1),u=a(2),j=a(4),p=a.n(j),b=a(5),h=["xl","lg","md","sm","xs"],f=r.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.noGutters,n=e.as,i=void 0===n?"div":n,l=Object(u.a)(e,["bsPrefix","className","noGutters","as"]),o=Object(b.a)(a,"row"),j=o+"-cols",f=[];return h.forEach((function(e){var t,a=l[e];delete l[e];var c="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&f.push(""+j+c+"-"+t)})),r.a.createElement(i,Object(d.a)({ref:t},l,{className:p.a.apply(void 0,[c,o,s&&"no-gutters"].concat(f))}))}));f.displayName="Row",f.defaultProps={noGutters:!1};var m=f,O=a(40);function v(e){var t=Object(n.useState)({}),a=Object(s.a)(t,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){l.a.get("https://api.themoviedb.org/3/movie/".concat(e.match.params.id,"?api_key=41d53ce60f81201debd1f58add052d16&language=en-US")).then((function(e){return i(e.data)})).catch((function(e){return console.error(e)}))})),Object(c.jsx)(o.a,{className:"mt-5",children:Object(c.jsxs)(m,{children:[Object(c.jsx)(O.a,{md:"6",children:Object(c.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(r.poster_path),alt:""})}),Object(c.jsxs)(O.a,{md:"6",children:[Object(c.jsx)("h2",{children:r.title}),Object(c.jsx)("p",{children:r.overview}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["Revenue: ",r.revenue]}),Object(c.jsxs)("li",{children:["Popularity: ",r.popularity]}),Object(c.jsxs)("li",{children:["Original Language: ",r.original_language]}),Object(c.jsxs)("li",{children:["Release Date: ",r.release_date]})]})]})]})})}}}]);
//# sourceMappingURL=6.a33b14fc.chunk.js.map
(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[6],{121:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return N}));var a=s(5),c=s(73),i=s.n(c),n=s(74),o=s(85),r=s(0),l=s.n(r),d=s(75),j=s.n(d),b=s(72),p=s(62),h=s(40),O=s(122),u=s(23),x=s(69),g=s.n(x);s(70),s(71);function m(e){var t=e.movie;return Object(a.jsxs)(p.a,{children:[Object(a.jsxs)("div",{className:"clearfix mt-5 mb-2",children:[Object(a.jsx)("h4",{className:"float-left",children:"Now Playing"}),Object(a.jsx)(u.b,{className:"float-right text-uppercase",to:"/",children:"see all"})]}),Object(a.jsx)(g.a,Object(b.a)(Object(b.a)({},{dots:!1,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),{},{children:t.map((function(e){return console.log(e),Object(a.jsx)(l.a.Fragment,{children:Object(a.jsx)(u.b,{to:"/movie/".concat(e.id),children:Object(a.jsx)(h.a,{children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(O.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path)}),Object(a.jsx)(O.a.Body,{children:Object(a.jsx)("span",{children:e.title})})]})})})})}))}))]})}var v=s(32);function f(){var e=Object(v.a)(["\n.slick-arrow{\n    background-color: black;\n    height: 35px;\n    width: 35px;\n    border-radius: 100px;\n}\n.slick-arrow: hover {\n    background-color: black;  \n}\n"]);return f=function(){return e},e}var S=s(31).a.div(f());function T(e){var t=e.movieP;return Object(a.jsxs)(p.a,{children:[Object(a.jsxs)("div",{className:"clearfix mt-5 mb-2",children:[Object(a.jsx)("h4",{className:"float-left",children:"PopularMovies"}),Object(a.jsx)(u.b,{className:"float-right text-uppercase",to:"/",children:"see all"})]}),Object(a.jsx)(g.a,Object(b.a)(Object(b.a)({},{dots:!1,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),{},{children:t.map((function(e){return console.log(e),Object(a.jsx)(l.a.Fragment,{children:Object(a.jsx)(u.b,{to:"/movie/".concat(e.id),children:Object(a.jsx)(h.a,{children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(O.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path)}),Object(a.jsx)(O.a.Body,{children:Object(a.jsx)("span",{children:e.title})})]})})})})}))}))]})}function w(e){var t=e.movieT;return Object(a.jsxs)(p.a,{children:[Object(a.jsxs)("div",{className:"clearfix mt-5 mb-2",children:[Object(a.jsx)("h4",{className:"float-left",children:"Top Rated Movies"}),Object(a.jsx)(u.b,{className:"float-right text-uppercase",to:"/",children:"see all"})]}),Object(a.jsx)(g.a,Object(b.a)(Object(b.a)({},{dots:!1,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),{},{children:t.map((function(e){return console.log(e),Object(a.jsx)(l.a.Fragment,{children:Object(a.jsx)(u.b,{to:"/movie/".concat(e.id),children:Object(a.jsx)(h.a,{md:!0,children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(O.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path)}),Object(a.jsx)(O.a.Body,{children:Object(a.jsx)("span",{children:e.title})})]})})})})}))}))]})}var k=s(63);function N(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),s=t[0],c=t[1],l=Object(r.useState)([]),d=Object(o.a)(l,2),b=d[0],p=d[1],h=Object(r.useState)([]),O=Object(o.a)(h,2),u=O[0],x=O[1],g=Object(r.useState)(!1),v=Object(o.a)(g,2),f=v[0],N=v[1];Object(r.useEffect)((function(){y()}),[]);var y=function(){var e=Object(n.a)(i.a.mark((function e(){var t,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),t="41d53ce60f81201debd1f58add052d16",e.next=4,j.a.all([j.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(t,"&language=en-US&page=1")),j.a.get("https://api.themoviedb.org/3/movie/popular?api_key=".concat(t,"&language=en-US&page=1")),j.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(t,"&language=en-US&page=1"))]);case 4:s=e.sent,N(!1),console.log(s[0].data.results),console.log(s[1].data.results),console.log(s[2].data.results),c(s[0].data.results),p(s[1].data.results),x(s[2].data.results);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:f?Object(a.jsxs)("div",{className:"spinnerClass",children:[" ",Object(a.jsx)(k.a,{animation:"border",variant:"warning"})]}):Object(a.jsxs)(S,{children:[Object(a.jsx)(m,{movie:s}),Object(a.jsx)(T,{movieP:b}),Object(a.jsx)(w,{movieT:u})]})})}}}]);
//# sourceMappingURL=6.d5c58acf.chunk.js.map
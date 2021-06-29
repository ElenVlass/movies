(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{61:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s}));var r=n(64),a=n.n(r),o="17b2b146e05f15592cbc027a030a6f63";a.a.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(t){return a.a.get("trending/movie/week?api_key=".concat(o,"&page=").concat(t)).then((function(t){return t.data.results}))},i=function(t){return a.a.get("search/movie?api_key=".concat(o,"&lpage=1&include_adult=false&query=").concat(t)).then((function(t){return t.data.results}))},s=function(t){return a.a.get("movie/".concat(t,"?api_key=").concat(o,"&append_to_response=credits,reviews")).then((function(t){return t.data}))}},65:function(t,e,n){t.exports={MoviesList:"MoviesList_MoviesList__2hkJB",MovieCard:"MoviesList_MovieCard__LkZxp"}},66:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(16),a=n(17),o=n(19),c=n(18),i=n(0),s=n(11),u=n(3),f=n(1),p=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.poster;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(n),alt:e}),Object(f.jsx)("p",{children:e})]})}}]),n}(i.Component),l=n(65),b=n.n(l),v=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=this.props,e=t.movies,n=t.location;return Object(f.jsx)("ul",{className:b.a.MoviesList,children:e.map((function(t){var e=t.id,r=t.title,a=t.poster_path;return Object(f.jsx)("li",{className:b.a.MovieCard,children:Object(f.jsx)(s.b,{to:{pathname:"/movies/".concat(e),state:{from:n}},children:Object(f.jsx)(p,{id:e,title:r,poster:a})})},e)}))})}}]),n}(i.Component),h=Object(u.g)(v)},95:function(t,e,n){t.exports={Button:"LoadMore_Button__3rhSq"}},97:function(t,e,n){"use strict";n.r(e);var r=n(62),a=n.n(r);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n(63),s=n(16),u=n(17),f=n(19),p=n(18),l=n(0),b=n.n(l),v=n(61),h=n(66),d=n(95),j=n.n(d),m=n(1),O=function(t){Object(f.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsx)("button",{type:"button",onClick:this.props.onClick,className:j.a.Button,children:"Load more"})}}]),n}(l.Component);O.defaultProps={onClick:function(){return null}};var y=function(t){Object(f.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return(t=e.call.apply(e,[this].concat(o))).state={movies:[],currentPage:1},t.fetchMovies=Object(i.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.b)(t.state.currentPage);case 2:n=e.sent,t.setState((function(t){return{movies:[].concat(c(t.movies),c(n)),currentPage:t.currentPage+1}}));case 4:case"end":return e.stop()}}),e)}))),t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetchMovies()}},{key:"render",value:function(){var t=this.state.movies;return Object(m.jsxs)(m.Fragment,{children:[t.length>0&&Object(m.jsx)(h.a,{movies:t}),Object(m.jsx)(O,{onClick:this.fetchMovies})]})}}]),n}(b.a.Component);e.default=y}}]);
//# sourceMappingURL=home-page.cef1385b.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[122],{326:function(e,r,t){t.d(r,{TP:function(){return o},XT:function(){return c},gH:function(){return i},tx:function(){return v},zv:function(){return p}});var n=t(861),a=t(757),u=t.n(a),s=t(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"0d2c8f8ee54bc3ab0aecf9b789c7f474"}}),c=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/search/movie",{params:{query:r,page:1,include_adul:!1}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r),{params:{language:"en-US"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},122:function(e,r,t){t.r(r),t.d(r,{default:function(){return m}});var n=t(861),a=t(439),u=t(757),s=t.n(u),c=t(689),i=t(791),o=t(326),p=t(323),v="movie-details-reviews_reviews__wrapper__i-6kO",f="movie-details-reviews_box__reviews__M+LIu",l="movie-details-reviews_reviews__name__rWUsm",d="movie-details-reviews_reviews__text__cjTk2",h=t(184),m=function(){var e=(0,i.useState)([]),r=(0,a.Z)(e,2),t=r[0],u=r[1],m=(0,i.useState)(!1),w=(0,a.Z)(m,2),_=w[0],x=w[1],k=(0,i.useState)(null),b=(0,a.Z)(k,2),g=b[0],Z=b[1],y=(0,c.UO)().movieId;(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,o.tx)(y);case 4:r=e.sent,t=r.results,u(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Z(e.t0);case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[y]);var j=t.map((function(e){var r=e.id,t=e.author,n=e.created_at,a=e.content;return(0,h.jsxs)("li",{className:f,children:[(0,h.jsxs)("p",{className:l,children:[n.slice(0,10),' | "',t,'"']}),(0,h.jsx)("p",{className:d,children:a})]},r)}));return(0,h.jsxs)("div",{children:[_&&(0,h.jsx)(p.Z,{}),g&&(0,h.jsx)("p",{children:g.message}),t.length>0?(0,h.jsx)("ul",{className:v,children:j}):(0,h.jsx)("p",{children:"We dont have any reviews for this movie"})]})}}}]);
//# sourceMappingURL=122.e5f083c5.chunk.js.map
import { c as createCommonjsModule } from './common/_commonjsHelpers-668e6127.js';
import { r as react } from './common/index-59cd3494.js';

var reactJsxRuntime_production_min = createCommonjsModule(function (module, exports) {
var g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment");}var m=react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;
});

var jsxRuntime = createCommonjsModule(function (module) {

{
  module.exports = reactJsxRuntime_production_min;
}
});

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});var i=react,e=function(){return (e=Object.assign||function(r){for(var i,e=1,n=arguments.length;e<n;e++)for(var t in i=arguments[e])Object.prototype.hasOwnProperty.call(i,t)&&(r[t]=i[t]);return r}).apply(this,arguments)};function n(r,i,e){if(e||2===arguments.length)for(var n,t=0,o=i.length;t<o;t++)!n&&t in i||(n||(n=Array.prototype.slice.call(i,0,t)),n[t]=i[t]);return r.concat(n||i)}function t(i){var n=i.size,t=void 0===n?25:n;return jsxRuntime.jsx("svg",e({fill:"currentColor",width:t,height:t,viewBox:"0 0 24 24"},{children:jsxRuntime.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"},void 0)}),void 0)}exports.Rating=function(o){var l=o.ratingValue,s=o.onClick,a=o.stars,c=void 0===a?5:a,u=o.size,d=void 0===u?25:u,v=o.transition,f=void 0!==v&&v,h=o.fillColor,p=void 0===h?"#f1a545":h,x=o.emptyColor,y=void 0===x?"#cccccc":x,g=o.className,j=void 0===g?"":g,m=o.children,C=i.useState(l||null),w=C[0],z=C[1];return jsxRuntime.jsx("span",e({className:j},{children:n([],Array(c)).map((function(i,n){return jsxRuntime.jsx("span",e({onMouseEnter:function(){return z(n+1)},onMouseLeave:function(){return z(null)},onClick:function(){return s&&s(n+1)},"aria-hidden":"true",style:{color:(w||l)&&(w||l)>n?p:y,width:d,height:d,cursor:"pointer",transition:f?"color 0.2s ease-in-out 0s":"",display:"inline-flex"}},{children:m||jsxRuntime.jsx(t,{size:d},void 0)}),n)}))}),void 0)},exports.RatingView=function(i){var o=i.ratingValue,l=i.stars,s=void 0===l?5:l,a=i.size,c=void 0===a?25:a,u=i.fillColor,d=void 0===u?"#f1a545":u,v=i.emptyColor,f=void 0===v?"#cccccc":v,h=i.className,p=void 0===h?"":h,x=i.children;return jsxRuntime.jsx("span",e({className:p},{children:n([],Array(s)).map((function(i,n){return jsxRuntime.jsx("span",e({style:{color:o&&o>n?d:f,width:c,height:c,display:"inline-flex"}},{children:x||jsxRuntime.jsx(t,{size:c},void 0)}),n)}))}),void 0)};

});

var RatingView = dist.RatingView;
export { RatingView };
// Ol3-Cesium. See https://github.com/openlayers/ol3-cesium/
// License: https://github.com/openlayers/ol3-cesium/blob/master/LICENSE
// Version: v1.4-5-gfc5c475

(function(){var h,k=this;function l(a){return void 0!==a}
function n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function s(a){return"array"==n(a)}function aa(a){var b=n(a);return"array"==b||"object"==b&&"number"==typeof a.length}function t(a){return"string"==typeof a}function ba(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function v(a){return a[ca]||(a[ca]=++da)}var ca="closure_uid_"+(1E9*Math.random()>>>0),da=0;function ea(a,b,c){return a.call.apply(a.bind,arguments)}
function fa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function w(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return w.apply(null,arguments)}var ga=Date.now||function(){return+new Date};
function x(a,b){var c=a.split("."),d=k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&l(b)?d[e]=b:d[e]?d=d[e]:d=d[e]={}}function y(a,b){function c(){}c.prototype=b.prototype;a.ca=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ea=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};function z(a){if(Error.captureStackTrace)Error.captureStackTrace(this,z);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}y(z,Error);z.prototype.name="CustomError";function ha(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function ia(a){if(!ja.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ka,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(la,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ma,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(na,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(oa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(pa,"&#0;"));return a}
var ka=/&/g,la=/</g,ma=/>/g,na=/"/g,oa=/'/g,pa=/\x00/g,ja=/[\x00&<>"']/;function qa(a,b){return a<b?-1:a>b?1:0};function sa(a,b){b.unshift(a);z.call(this,ha.apply(null,b));b.shift()}y(sa,z);sa.prototype.name="AssertionError";function A(a,b){throw new sa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var B=Array.prototype;function C(a,b,c){B.forEach.call(a,b,c)}function ta(a,b){var c=B.indexOf.call(a,b,void 0),d;(d=0<=c)&&B.splice.call(a,c,1);return d}function ua(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var D;a:{var va=k.navigator;if(va){var wa=va.userAgent;if(wa){D=wa;break a}}D=""}function F(a){return-1!=D.indexOf(a)};function xa(){return k.navigator||null}var ya=F("Opera")||F("OPR"),G=F("Trident")||F("MSIE"),I=F("Gecko")&&-1==D.toLowerCase().indexOf("webkit")&&!(F("Trident")||F("MSIE")),za=-1!=D.toLowerCase().indexOf("webkit");za&&F("Mobile");var Aa,Ba=xa();Aa=Ba&&Ba.platform||"";Aa.indexOf("Mac");Aa.indexOf("Win");Aa.indexOf("Linux");xa()&&(xa().appVersion||"").indexOf("X11");var J=D;J&&J.indexOf("Android");J&&J.indexOf("iPhone");J&&J.indexOf("iPad");
function Ca(){var a=k.document;return a?a.documentMode:void 0}var Da=function(){var a="",b;if(ya&&k.opera)return a=k.opera.version,"function"==n(a)?a():a;I?b=/rv\:([^\);]+)(\)|;)/:G?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:za&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(D))?a[1]:"");return G&&(b=Ca(),b>parseFloat(a))?String(b):a}(),Ea={};
function K(a){var b;if(!(b=Ea[a])){b=0;for(var c=String(Da).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",p=d[f]||"",ra=RegExp("(\\d*)(\\D*)","g"),Wb=RegExp("(\\d*)(\\D*)","g");do{var H=ra.exec(g)||["","",""],q=Wb.exec(p)||["","",""];if(0==H[0].length&&0==q[0].length)break;b=qa(0==H[1].length?0:parseInt(H[1],10),0==q[1].length?0:parseInt(q[1],10))||qa(0==H[2].length,0==q[2].length)||
qa(H[2],q[2])}while(0==b)}b=Ea[a]=0<=b}return b}var Fa=k.document,Ga=Fa&&G?Ca()||("CSS1Compat"==Fa.compatMode?parseInt(Da,10):5):void 0;var Ha=!G||G&&9<=Ga,Ia=G&&!K("9");!za||K("528");I&&K("1.9b")||G&&K("8")||ya&&K("9.5")||za&&K("528");I&&!K("8")||G&&K("9");function Ja(){0!=Ka&&v(this)}var Ka=0;function L(a,b){this.type=a;this.a=this.target=b}L.prototype.b=function(){};function La(a){La[" "](a);return a}La[" "]=function(){};function M(a,b){L.call(this,a?a.type:"");this.d=this.state=this.a=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;var c=a.relatedTarget;if(c&&I)try{La(c.nodeName)}catch(d){}this.state=a.state;this.d=a;a.defaultPrevented&&this.b()}}y(M,L);M.prototype.b=function(){M.ca.b.call(this);var a=this.d;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ia)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var N="closure_listenable_"+(1E6*Math.random()|0),Ma=0;function Na(a,b,c,d,e){this.p=a;this.proxy=null;this.src=b;this.type=c;this.F=!!d;this.G=e;++Ma;this.v=this.D=!1}function Oa(a){a.v=!0;a.p=null;a.proxy=null;a.src=null;a.G=null};function Pa(a,b,c){for(var d in a)b.call(c,a[d],d,a)}function Qa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Ra(a){var b={},c;for(c in a)b[c]=a[c];return b}function Sa(a){var b={},c;for(c in a)b[a[c]]=c;return b}var Ta="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ua(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ta.length;f++)c=Ta[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function O(a){this.src=a;this.a={};this.b=0}O.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var g=Va(a,b,d,e);-1<g?(b=a[g],c||(b.D=!1)):(b=new Na(b,this.src,f,!!d,e),b.D=c,a.push(b));return b};O.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.a))return!1;var e=this.a[a];b=Va(e,b,c,d);return-1<b?(Oa(e[b]),B.splice.call(e,b,1),0==e.length&&(delete this.a[a],this.b--),!0):!1};
function Wa(a,b){var c=b.type;c in a.a&&ta(a.a[c],b)&&(Oa(b),0==a.a[c].length&&(delete a.a[c],a.b--))}function Va(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.v&&f.p==b&&f.F==!!c&&f.G==d)return e}return-1};var Xa="closure_lm_"+(1E6*Math.random()|0),Ya={},Za=0;function $a(a,b,c,d,e){if(s(b)){for(var f=0;f<b.length;f++)$a(a,b[f],c,d,e);return null}c=ab(c);return a&&a[N]?a.h(b,c,d,e):bb(a,b,c,!1,d,e)}function bb(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,p=cb(a);p||(a[Xa]=p=new O(a));c=p.add(b,c,d,e,f);if(c.proxy)return c;d=db();c.proxy=d;d.src=a;d.p=c;a.addEventListener?a.addEventListener(b.toString(),d,g):a.attachEvent(eb(b.toString()),d);Za++;return c}
function db(){var a=fb,b=Ha?function(c){return a.call(b.src,b.p,c)}:function(c){c=a.call(b.src,b.p,c);if(!c)return c};return b}function gb(a,b,c,d,e){if(s(b))for(var f=0;f<b.length;f++)gb(a,b[f],c,d,e);else c=ab(c),a&&a[N]?a.u.add(String(b),c,!0,d,e):bb(a,b,c,!0,d,e)}function hb(a,b,c,d,e){if(s(b))for(var f=0;f<b.length;f++)hb(a,b[f],c,d,e);else(c=ab(c),a&&a[N])?a.u.remove(String(b),c,d,e):a&&(a=cb(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Va(b,c,!!d,e)),(c=-1<a?b[a]:null)&&ib(c))}
function ib(a){if("number"!=typeof a&&a&&!a.v){var b=a.src;if(b&&b[N])Wa(b.u,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.F):b.detachEvent&&b.detachEvent(eb(c),d);Za--;(c=cb(b))?(Wa(c,a),0==c.b&&(c.src=null,b[Xa]=null)):Oa(a)}}}function eb(a){return a in Ya?Ya[a]:Ya[a]="on"+a}function jb(a,b,c,d){var e=1;if(a=cb(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.F==c&&!f.v&&(e&=!1!==kb(f,d))}return Boolean(e)}
function kb(a,b){var c=a.p,d=a.G||a.src;a.D&&ib(a);return c.call(d,b)}
function fb(a,b){if(a.v)return!0;if(!Ha){var c;if(!(c=b))a:{c=["window","event"];for(var d=k,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new M(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.a;f;f=f.parentNode)e.push(f);for(var f=a.type,p=e.length-1;0<=p;p--)c.a=e[p],d&=jb(e[p],f,!0,c);for(p=0;p<e.length;p++)c.a=e[p],d&=jb(e[p],f,!1,c)}return d}return kb(a,
new M(b,this))}function cb(a){a=a[Xa];return a instanceof O?a:null}var lb="__closure_events_fn_"+(1E9*Math.random()>>>0);function ab(a){return"function"==n(a)?a:a[lb]||(a[lb]=function(b){return a.handleEvent(b)})};function P(a){this.map=a;this.b=this.e=null;this.h=[];this.o={};this.d={};this.f=this.g=null;this.map.on("change:view",function(){this.C(this.map.getView())},this);this.C(this.map.getView());this.map.on("change:layergroup",function(){mb(this,this.map.getLayers())},this);mb(this,this.map.getLayers())}P.prototype.C=function(a){this.e=a;nb(this);this.q()};
function mb(a,b){null===a.b||C(a.h,a.b.unByKey);a.b=b;if(null===b)a.h=[];else{var c=w(function(){this.q()},a);a.h=[b.on("add",c),b.on("remove",c)]}nb(a);a.q()}P.prototype.q=function(){null!==this.e&&null!==this.b&&(this.g=Ra(this.d),this.f=Sa(this.o),this.k(!1),this.b.forEach(function(a){ob(this,a)},this),C(Qa(this.f),function(a){var b=this.o[a];l(b)&&(delete this.o[a],null===b||this.J(b))},this),this.f=null,Pa(this.g,function(a,b){C(a,this.map.unByKey);delete this.d[b]},this),this.g=null)};
function ob(a,b){if(null!==b){var c=v(b);if(b instanceof ol.layer.Group){var d=b.getLayers();l(d)&&d.forEach(function(a){ob(this,a)},a);if(!l(a.d[c])){var e=[];a.d[c]=e;var f,g=[],p=w(function(){f=b.getLayers();if(l(f)){var a=w(function(){this.q()},this);g=[f.on("add",a),f.on("remove",a)];e.push.apply(e,g)}},a);p();e.push(b.on("change:layers",function(){C(g,function(a){ta(e,a);f.unByKey(a)});p()}))}delete a.g[c]}else b instanceof ol.layer.Layer&&(d=a.o[c],l(d)||(d=a.H(b),a.o[c]=d),null!=d&&(a.l(d),
delete a.f[d]))}}function nb(a){a.k(!0);a.o={}};function pb(a){var b;b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}};function Q(a,b,c){Ja.call(this);this.h=a;this.g=c;this.b=b||window;this.d=w(this.f,this)}y(Q,Ja);Q.prototype.a=null;Q.prototype.e=!1;Q.prototype.start=function(){qb(this);this.e=!1;var a=rb(this),b=sb(this);a&&!b&&this.b.mozRequestAnimationFrame?(this.a=$a(this.b,"MozBeforePaint",this.d),this.b.mozRequestAnimationFrame(null),this.e=!0):this.a=a&&b?a.call(this.b,this.d):this.b.setTimeout(pb(this.d),20)};
function qb(a){if(null!=a.a){var b=rb(a),c=sb(a);b&&!c&&a.b.mozRequestAnimationFrame?ib(a.a):b&&c?c.call(a.b,a.a):a.b.clearTimeout(a.a)}a.a=null}Q.prototype.f=function(){this.e&&this.a&&ib(this.a);this.a=null;this.h.call(this.g,ga())};function rb(a){a=a.b;return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||null}
function sb(a){a=a.b;return a.cancelRequestAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||null};var tb,R,ub,vb,wb,xb,yb,zb,Eb,Fb,Gb,Hb,Ib,Jb,Kb,Lb,Mb,Nb,S,Ob,Pb,Qb,Rb,Sb,Tb,Ub,Vb,Xb;function T(a,b){this.a=a;this.b=null;this.k=l(b)?b:null;this.f=!1;this.h=new Cesium.Event;this.d=document.createElement(Yb);this.d.width=1;this.d.height=1;this.a.on("change",function(){Zb(this)},this);Zb(this)}y(T,Cesium.ImageryProvider);
Object.defineProperties(T.prototype,{ready:{get:function(){return this.f}},rectangle:{get:function(){return this.l}},tileWidth:{get:function(){var a=this.a.getTileGrid();return null===a?256:a.getTileSize(0)}},tileHeight:{get:function(){return this.tileWidth}},maximumLevel:{get:function(){var a=this.a.getTileGrid();return null===a?18:a.getMaxZoom()}},minimumLevel:{get:function(){return 0}},tilingScheme:{get:function(){return this.e}},tileDiscardPolicy:{get:function(){}},errorEvent:{get:function(){return this.h}},
credit:{get:function(){return this.g}},proxy:{get:function(){}},hasAlphaChannel:{get:function(){return!0}}});function Zb(a){if(!a.f&&"ready"==a.a.getState()){var b=a.a.getProjection();a.b=null!=b?b:a.k;if(a.b==ol.proj.get("EPSG:4326"))a.e=new Cesium.GeographicTilingScheme;else if(a.b==ol.proj.get("EPSG:3857"))a.e=new Cesium.WebMercatorTilingScheme;else return;a.l=a.e.rectangle;b=$b(a.a);a.g=null===b?void 0:b;a.f=!0}}
function $b(a){var b="",c=a.getAttributions();null===c||C(c,function(a){b+=a.getHTML().replace(/<\/?[^>]+(>|$)/g,"")+" "});var d,e;0==b.length&&(a=a.getLogo(),l(a)&&(t(a)?d=a:(d=a.src,e=a.href)));return l(d)||0<b.length?new Cesium.Credit(b,d,e):null}T.prototype.getTileCredits=function(){};T.prototype.getTileCredits=T.prototype.getTileCredits;
T.prototype.requestImage=function(a,b,c){var d=this.a.getTileUrlFunction();if(null===d||null===this.b)return this.d;var e=this.e instanceof Cesium.GeographicTilingScheme?c+1:c;b=this.a.getTileGrid()instanceof ol.tilegrid.XYZ?b:b-(1<<c);a=d([e,a,-b-1],1,this.b);return l(a)?Cesium.ImageryProvider.loadImage(this,a):this.d};T.prototype.requestImage=T.prototype.requestImage;function U(a){Cesium.PrimitiveCollection.call(this);var b=new Cesium.BillboardCollection,c=new Cesium.PrimitiveCollection;this.a={projection:a,billboards:b,featureToCesiumMap:{},primitives:c};this.add(b)}y(U,Cesium.PrimitiveCollection);U.prototype.b=function(a,b,c){var d=b.getProjection();b=b.getResolution();if(!l(b)||!d)return null;a=a.getStyleFunction();a=tb(c,a,b);if(!a)return null;this.a.projection=d;return R(c,a,this.a)};(function(){function a(a){a=a||"black";if(s(a))return new Cesium.Color(Cesium.Color.byteToFloat(a[0]),Cesium.Color.byteToFloat(a[1]),Cesium.Color.byteToFloat(a[2]),a[3]);if(t(a))return Cesium.Color.fromCssColorString(a);A("impossible")}function b(a,b,c){var d;c instanceof Cesium.PrimitiveCollection?d=c:(d=new Cesium.PrimitiveCollection,d.add(c));if(!b.getText())return d;b=b.getText();(a=Pb(a,b))&&d.add(a);return d}function c(a,b,c){var H=e(c,!1),q=e(c,!0),g=new Cesium.PrimitiveCollection;c.getFill()&&
(a=f(a,H),g.add(a));c.getStroke()&&(c=d(c),a=f(b,q,c),g.add(a));return g}function d(a){if(-1==ub)throw Error("olcs.core.glAliasedLineWidthRange must be initialized using Cesium.Scene.maximumAliasedLineWidth");a=a.getStroke()?a.getStroke().getWidth():1;return Math.min(a,ub)}function e(b,c){var d=b.getFill()?b.getFill().getColor():null,e=b.getStroke()?b.getStroke().getColor():null,f="black";e&&c?f=e:d&&(f=d);return a(f)}function f(a,b,c){var d={flat:!0,renderState:{depthTest:{enabled:!0}}};l(c)&&(d.renderState||
(d.renderState={}),d.renderState.lineWidth=c);c=new Cesium.PerInstanceColorAppearance(d);a=new Cesium.GeometryInstance({geometry:a,attributes:{color:Cesium.ColorGeometryInstanceAttribute.fromColor(b)}});return new Cesium.Primitive({geometryInstances:a,appearance:c})}function g(a,b){var c=ol.proj.get("EPSG:4326"),d=ol.proj.get(b);d!==c&&(a=a.clone(),a.transform(d,c));return a}ub=-1;vb=function(a,b){var c=a.camera,d=a.canvas,e=c.frustum,d=new Cesium.Cartesian2(d.width,d.height),c=Cesium.Cartesian3.magnitude(Cesium.Cartesian3.subtract(c.position,
b,new Cesium.Cartesian3));return e.getPixelSize(d,c)};wb=function(a,b){a.applyTransform(function(a,c,d){if(l(d)&&3<=d)for(a=0;a<c.length;a+=d)c[a+2]+=b;return c})};xb=function(a,b,c,d,e){var f=Cesium.Math.clamp,g=Cesium.defaultValue;e=e||{};var m=g(e.duration,500),E=g(e.easing,ol.easing.linear),Ab=e.callback,hc=ga(),Bb=0,Cb=new Cesium.Matrix4,Db=new Q(function(e){e=E(f((e-hc)/m,0,1));a.transform.clone(Cb);var q=(e-Bb)*b;Bb=e;a.lookAtTransform(d);a.rotate(c,q);a.lookAtTransform(Cb);1>e?Db.start():
Ab&&Ab()});Db.start()};yb=function(a,b,c){var d=a.camera;a=zb(a,c);a=Cesium.Quaternion.fromAxisAngle(d.right,a);var e=Cesium.Matrix3.fromQuaternion(a),f=new Cesium.Cartesian3;Cesium.Cartesian3.subtract(d.position,c,f);a=new Cesium.Cartesian3;Cesium.Matrix3.multiplyByVector(e,f,a);Cesium.Cartesian3.add(a,c,a);c=Cesium.Matrix4.fromTranslation(a);xb(d,b,a,c)};Eb=function(a,b){var c=a.camera.getPickRay(b);return a.globe.pick(c,a)||a.camera.pickEllipsoid(b)};Fb=function(a){var b=a.canvas,b=new Cesium.Cartesian2(b.width/
2,b.height);return Eb(a,b)};Gb=function(a){var b=a.canvas,b=new Cesium.Cartesian2(b.width/2,b.height/2);return Eb(a,b)};Hb=function(a){var b=a.camera,c=new Cesium.Ray(b.position,b.direction);a=a.globe.pick(c,a);if(!a){var d=Cesium.IntersectionTests.rayEllipsoid(c,Cesium.Ellipsoid.WGS84);d&&(a=Cesium.Ray.getPoint(c,d.start))}if(a)return c=new Cesium.Cartesian3,Cesium.Ellipsoid.WGS84.geocentricSurfaceNormal(a,c),b=Ib(b.direction,c,b.right)-Math.PI,Cesium.Math.convertLongitudeRange(b)};Jb=function(a){a=
a.camera;var b=a.direction,c=Cesium.Quaternion.fromAxisAngle(a.right,a.frustum.fovy/2),c=Cesium.Matrix3.fromQuaternion(c),d=new Cesium.Cartesian3;Cesium.Matrix3.multiplyByVector(c,b,d);return new Cesium.Ray(a.position,d)};Ib=function(a,b,c){var d=new Cesium.Cartesian3,e=new Cesium.Cartesian3,f=new Cesium.Cartesian3;Cesium.Cartesian3.normalize(a,d);Cesium.Cartesian3.normalize(b,e);Cesium.Cartesian3.cross(d,e,f);a=Cesium.Cartesian3.dot(d,e);b=Cesium.Cartesian3.magnitude(f);c=Cesium.Cartesian3.dot(c,
f);f=Math.atan2(b,a);return 0<=c?f:-f};zb=function(a,b){var c=a.camera,d=c.frustum.fovy/2,e=Jb(a),e=Cesium.Cartesian3.clone(e.direction);Cesium.Cartesian3.negate(e,e);var f=new Cesium.Cartesian3;Cesium.Ellipsoid.WGS84.geocentricSurfaceNormal(b,f);var g=new Cesium.Cartesian3;Cesium.Cartesian3.negate(c.right,g);return Ib(f,e,g)+d};Kb=function(a,b,c){l(c)&&(c=c.getHeight(b),b.height=l(c)?c:0);c=Cesium.Ellipsoid.WGS84;b=c.cartographicToCartesian(b);var d=a.position,e=new Cesium.Cartesian3;c.geocentricSurfaceNormal(d,
e);a.lookAt(d,b,e)};Lb=function(a,b){if(null===a||null===b)return null;var c=ol.proj.transformExtent(a,b,"EPSG:4326");return Cesium.Rectangle.fromDegrees(c[0],c[1],c[2],c[3])};Mb=function(a,b){if(!(a instanceof ol.layer.Tile))return null;var c=null,c=a.getSource();if(!(c instanceof ol.source.WMTS)&&c instanceof ol.source.TileImage){var d=c.getProjection();if(null===d)d=b;else if(d!==b)return null;var e=d===ol.proj.get("EPSG:3857"),d=d===ol.proj.get("EPSG:4326");if(e||d)c=new T(c,b);else return null}else return null;
e={};d=a.getExtent();null!=d&&null!==b&&(e.rectangle=Lb(d,b));return new Cesium.ImageryLayer(c,e)};Nb=function(a,b){var c=a.getOpacity();l(c)&&(b.alpha=c);c=a.getVisible();l(c)&&(b.show=c);c=a.getSaturation();l(c)&&(b.saturation=c);c=a.getContrast();l(c)&&(b.contrast=c);c=a.getBrightness();l(c)&&(b.brightness=Math.pow(1+parseFloat(c),2))};S=function(a){return 2<a.length?Cesium.Cartesian3.fromDegrees(a[0],a[1],a[2]):Cesium.Cartesian3.fromDegrees(a[0],a[1])};Ob=function(a){for(var b=S,c=[],d=0;d<a.length;++d)c.push(b(a[d]));
return c};Qb=function(a,d,e){a=g(a,d);d=a.getCenter();var f=3==d.length?d[2]:0,q=d.slice();q[0]+=a.getRadius();d=S(d);var q=S(q),r=Cesium.Cartesian3.distance(d,q),q=new Cesium.CircleGeometry({center:d,radius:r,height:f});d=new Cesium.CircleOutlineGeometry({center:d,radius:r,extrudedHeight:f,height:f});d=c(q,d,e);return b(a,e,d)};Rb=function(a,c,d){a=g(a,c);var e=Ob(a.getCoordinates());c=new Cesium.PolylineMaterialAppearance({material:Sb(d,!0)});e=new Cesium.PolylineGeometry({positions:e,vertexFormat:c.vertexFormat});
c=new Cesium.Primitive({geometryInstances:new Cesium.GeometryInstance({geometry:e}),appearance:c});return b(a,d,c)};Tb=function(a,d,e){a=g(a,d);for(var f=a.getLinearRings(),q=d={},r=0;r<f.length;++r){var u=f[r].getCoordinates(),u=Ob(u);0==r?d.positions=u:(d.holes={positions:u},d=d.holes)}f=new Cesium.PolygonGeometry({polygonHierarchy:q,perPositionHeight:!0});d=new Cesium.PolygonOutlineGeometry({polygonHierarchy:d,perPositionHeight:!0});d=c(f,d,e);return b(a,e,d)};Ub=function(a,c,d,e,f){function r(){if(null!==
m&&(m instanceof HTMLCanvasElement||m instanceof Image)){var b=a.getCoordinates(),b=S(b),c,d=u.getOpacity();l(d)&&(c=new Cesium.Color(1,1,1,d));c=e.add({image:m,color:c,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,position:b});f&&f(c)}}a=g(a,c);var u=d.getImage(),m=u.getImage(1);m instanceof Image&&(""==m.src||0==m.naturalHeight||0==m.naturalWidth||!m.complete)?gb(m,"load",function(){r()}):r();return d.getText()?b(a,d,new Cesium.Primitive):null};Vb=function(a,b,c,d){function e(a,d){var f=new Cesium.PrimitiveCollection;
C(a,function(a){f.add(d(a,b,c))});return f}switch(a.getType()){case "MultiPoint":a=a.getPoints();var f=Ub,g=new Cesium.BillboardCollection;if(c.getText()){var m=new Cesium.PrimitiveCollection;C(a,function(a){(a=f(a,b,c,g,d))&&m.add(a)});return m}C(a,function(a){f(a,b,c,g,d)});return g;case "MultiLineString":return a=a.getLineStrings(),e(a,Rb);case "MultiPolygon":return a=a.getPolygons(),e(a,Tb);default:A("Unhandled multi geometry type"+a.getType())}};Pb=function(a,b){var c=b.getText(),f=new Cesium.LabelCollection,
g=ol.extent.getCenter(a.getExtent());if(a instanceof ol.geom.SimpleGeometry){var r=a.getFirstCoordinate();g[2]=3==r.length?r[2]:0}g=S(g);f.modelMatrix=Cesium.Transforms.eastNorthUpToFixedFrame(g);g={};g.text=c;c=b.getOffsetX();r=b.getOffsetY();0!=c&&0!=r&&(c=new Cesium.Cartesian2(c,r),g.pixelOffset=c);c=b.getFont();null!=c&&(g.font=c);c=void 0;b.getFill()&&(g.fillColor=e(b,!1),c=Cesium.LabelStyle.FILL);b.getStroke()&&(g.outlineWidth=d(b),g.outlineColor=e(b,!0),c=Cesium.LabelStyle.OUTLINE);b.getFill()&&
b.getStroke()&&(c=Cesium.LabelStyle.FILL_AND_OUTLINE);g.style=c;if(b.getTextAlign()){var u;switch(b.getTextAlign()){case "center":u=Cesium.HorizontalOrigin.CENTER;break;case "left":u=Cesium.HorizontalOrigin.LEFT;break;case "right":u=Cesium.HorizontalOrigin.RIGHT;break;default:A("unhandled text align "+b.getTextAlign())}g.horizontalOrigin=u}if(b.getTextBaseline()){var m;switch(b.getTextBaseline()){case "top":m=Cesium.VerticalOrigin.TOP;break;case "middle":m=Cesium.VerticalOrigin.CENTER;break;case "bottom":m=
Cesium.VerticalOrigin.BOTTOM;break;case "alphabetic":m=Cesium.VerticalOrigin.TOP;break;case "hanging":m=Cesium.VerticalOrigin.BOTTOM;break;default:A("unhandled baseline "+b.getTextBaseline())}g.verticalOrigin=m}f.add(g);return f};Sb=function(b,c){var d=b.getFill(),e=b.getStroke();if(c&&!e||!c&&!d)return null;d=c?e.getColor():d.getColor();d=a(d);return c&&e.getLineDash()?Cesium.Material.fromType("Stripe",{horizontal:!1,repeat:500,evenColor:d,oddColor:new Cesium.Color(0,0,0,0)}):Cesium.Material.fromType("Color",
{color:d})};tb=function(a,b,c){var d=a.getStyleFunction(),e;l(d)&&(e=d.call(a,c));null==e&&null!=b&&(e=b(a,c));return l(e)?e[0]:null};R=function(a,b,c,d){function e(b){c.featureToCesiumMap[v(a)]=b;f(b)}function f(b){b.olFeature=a;return b}d=d||a.getGeometry();var g=c.projection;if(!d)return null;switch(d.getType()){case "GeometryCollection":var m=new Cesium.PrimitiveCollection;C(d.getGeometries(),function(d){d&&(d=R(a,b,c,d))&&m.add(d)});return f(m);case "Point":return(d=Ub(d,g,b,c.billboards,e))?
f(d):null;case "Circle":return f(Qb(d,g,b));case "LineString":return f(Rb(d,g,b));case "Polygon":return f(Tb(d,g,b));case "MultiPoint":case "MultiLineString":case "MultiPolygon":return f(Vb(d,g,b,e));case "LinearRing":throw Error("LinearRing should only be part of polygon.");default:throw Error("Ol geom type not handled : "+d.getType());}};Xb=function(a,b,c){var d=a.getSource().getFeatures(),e=b.getProjection();b=b.getResolution();if(!l(b)||!e)throw A("View not ready"),Error("View not ready");for(var e=
new U(e),f=e.a,g=0;g<d.length;++g){var m=d[g];if(null!=m){var E=a.getStyleFunction();if(E=tb(m,E,b))if(E=R(m,E,f))c[v(m)]=E,e.add(E)}}return e}})();function V(a,b){this.c=a;this.b=a.camera;this.i=b;this.f=this.d=this.k=this.a=null;this.e=this.g=0;this.h=null;this.l=!1;this.i.on("change:view",function(){this.C(this.i.getView())},this);this.C(this.i.getView())}h=V.prototype;h.C=function(a){null!==this.a&&(this.a.unByKey(this.k),this.k=null);this.a=a;null===a?this.f=this.d=null:(this.d=ol.proj.getTransform(a.getProjection(),"EPSG:4326"),this.f=ol.proj.getTransform("EPSG:4326",a.getProjection()),this.k=a.on("propertychange",this.R,this),ac(this))};
h.R=function(){this.l||ac(this)};h.aa=function(a){null===this.a||this.a.setRotation(a)};h.T=function(){if(null!==this.a){var a=this.a.getRotation();return l(a)?a:0}};h.ba=function(a){this.g=a;bc(this)};h.Q=function(){return this.g};h.Z=function(a){this.e=a;bc(this);this.r()};h.N=function(){return this.e};h.W=function(a){null===this.a||this.a.setCenter(a)};h.getCenter=function(){return null===this.a?void 0:this.a.getCenter()};
h.X=function(a){null!==this.d&&(a=this.d(a),a=new Cesium.Cartographic(a[0]*Math.PI/180,a[1]*Math.PI/180,this.K()),this.b.position=Cesium.Ellipsoid.WGS84.cartographicToCartesian(a),this.r())};h.U=function(){if(null!==this.f){var a=Cesium.Ellipsoid.WGS84.cartesianToCartographic(this.b.position);return this.f([180*a.longitude/Math.PI,180*a.latitude/Math.PI])}};
h.Y=function(a){var b=Cesium.Ellipsoid.WGS84.cartesianToCartographic(this.b.position);b.height=a;this.b.position=Cesium.Ellipsoid.WGS84.cartographicToCartesian(b);this.r()};h.K=function(){return Cesium.Ellipsoid.WGS84.cartesianToCartographic(this.b.position).height};h.V=function(a){null!==this.d&&(a=this.d(a),a=Cesium.Cartographic.fromDegrees(a[0],a[1]),Kb(this.b,a,this.c.globe),this.r())};
function bc(a){if(null!==a.a&&null!==a.d){var b=a.a.getCenter();if(b){b=a.d(b);b=new Cesium.Cartographic(b[0]*Math.PI/180,b[1]*Math.PI/180);if(a.c.globe){var c=a.c.globe.getHeight(b);b.height=l(c)?c:0}a.b.setView({positionCartographic:b,pitch:a.g-Cesium.Math.PI_OVER_TWO,heading:-a.a.getRotation()});a.b.moveBackward(a.e);cc(a,!0)}}}
function ac(a){if(null!==a.a&&null!==a.d){var b=a.a.getCenter();if(null!=b){var c=a.d(b),b=a.a.getResolution(),b=l(b)?b:0,c=c[1]*Math.PI/180,d=a.c.canvas,e=a.b.frustum.fovy,f=a.a.getProjection().getMetersPerUnit();a.e=b*d.height*f*Math.cos(Math.abs(c))/2/Math.tan(e/2);bc(a)}}}
h.r=function(){if(null!==this.a&&null!==this.f){this.l=!0;var a=Cesium.Ellipsoid.WGS84,b=this.c,c=Gb(b),d=c;d||(d=b.globe,b=this.b.positionCartographic.clone(),d=d.getHeight(b),b.height=l(d)?d:0,d=Cesium.Ellipsoid.WGS84.cartographicToCartesian(b));this.e=Cesium.Cartesian3.distance(d,this.b.position);b=a.cartesianToCartographic(d);this.a.setCenter(this.f([180*b.longitude/Math.PI,180*b.latitude/Math.PI]));this.a.setResolution(dc(this,this.e,b?b.latitude:0));if(c){d=this.b.position;b=new Cesium.Cartesian3;
a.geocentricSurfaceNormal(c,b);a=new Cesium.Cartesian3;Cesium.Cartesian3.subtract(d,c,a);Cesium.Cartesian3.normalize(a,a);var d=this.b.up,e=this.b.right,f=new Cesium.Cartesian3(-c.y,c.x,0),e=Cesium.Cartesian3.angleBetween(e,f),c=Cesium.Cartesian3.cross(c,d,new Cesium.Cartesian3).z;this.a.setRotation(0>c?e:-e);c=Math.acos(Cesium.Cartesian3.dot(b,a));this.g=isNaN(c)?0:c}else this.a.setRotation(this.b.heading),this.g=-this.b.pitch+Math.PI/2;this.l=!1}};
function cc(a,b){var c=a.b.viewMatrix;a.h&&a.h.equals(c)||(a.h=c.clone(),!0!==b&&a.r())}function dc(a,b,c){var d=a.c.canvas,e=a.b.frustum.fovy;a=a.a.getProjection().getMetersPerUnit();return 2*b*Math.tan(e/2)/a/Math.cos(Math.abs(c))/d.height};function W(){Ja.call(this);this.u=new O(this);this.k=this}y(W,Ja);W.prototype[N]=!0;W.prototype.removeEventListener=function(a,b,c,d){hb(this,a,b,c,d)};function ec(a,b){var c=a.k,d=b,e=d.type||d;if(t(d))d=new L(d,c);else if(d instanceof L)d.target=d.target||c;else{var f=d,d=new L(e,c);Ua(d,f)}c=d.a=c;fc(c,e,!0,d);fc(c,e,!1,d)}W.prototype.h=function(a,b,c,d){return this.u.add(String(a),b,!1,c,d)};
function fc(a,b,c,d){if(b=a.u.a[String(b)]){b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.v&&g.F==c){var p=g.p,ra=g.G||g.src;g.D&&Wa(a.u,g);e=!1!==p.call(ra,d)&&e}}}};function X(a){a=l(a)?a:{};W.call(this);this.b=this.c=null;this.a=new Cesium.RectanglePrimitive({asynchronous:!1,rectangle:new Cesium.Rectangle,material:Cesium.Material.fromType(Cesium.Material.ColorType)});this.a.material.uniforms.color=new Cesium.Color(0,0,1,.5);this.d=l(a.S)?a.S:Cesium.KeyboardEventModifier.SHIFT;this.e=null}y(X,W);
X.prototype.l=function(a){var b=this.c.globe.ellipsoid;a=this.c.camera.getPickRay(a.position);a=this.c.globe.pick(a,this.c);l(a)&&(this.b.setInputAction(w(this.f,this),Cesium.ScreenSpaceEventType.MOUSE_MOVE),this.b.setInputAction(w(this.g,this),Cesium.ScreenSpaceEventType.LEFT_UP),l(this.d)&&(this.b.setInputAction(w(this.f,this),Cesium.ScreenSpaceEventType.MOUSE_MOVE,this.d),this.b.setInputAction(w(this.g,this),Cesium.ScreenSpaceEventType.LEFT_UP,this.d)),b=b.cartesianToCartographic(a),a=this.a.rectangle,
a.north=a.south=b.latitude,a.east=a.west=b.longitude,this.a.height=b.height,this.a.show=!0,ec(this,{type:"boxstart",position:b}),this.c.primitives.contains(this.a)||this.c.primitives.add(this.a),this.c.screenSpaceCameraController.enableInputs=!1,this.e=b)};
X.prototype.f=function(a){var b=this.c.globe.ellipsoid;a=this.c.camera.getPickRay(a.endPosition);a=this.c.globe.pick(a,this.c);l(a)&&(b=b.cartesianToCartographic(a),this.a.height=Math.max(this.a.height,b.height),b.latitude<this.e.latitude?this.a.rectangle.south=b.latitude:this.a.rectangle.north=b.latitude,b.longitude<this.e.longitude?this.a.rectangle.west=b.longitude:this.a.rectangle.east=b.longitude)};
X.prototype.g=function(a){var b=this.c.globe.ellipsoid;a=this.c.camera.getPickRay(a.position);a=this.c.globe.pick(a,this.c);l(a)&&(b=b.cartesianToCartographic(a),this.a.show=!1,ec(this,{type:"boxend",position:b}),this.b.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_UP),this.b.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE),l(this.d)&&(this.b.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_UP,this.d),this.b.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE,this.d)));this.c.screenSpaceCameraController.enableInputs=
!0};X.prototype.H=function(a){null===a?(this.c.primitives.contains(this.a)&&this.c.primitives.remove(this.a),null!==this.b&&(this.b.destroy(),this.b=null)):(this.b=new Cesium.ScreenSpaceEventHandler(a.canvas),this.b.setInputAction(w(this.l,this),Cesium.ScreenSpaceEventType.LEFT_DOWN,this.d));this.c=a};var gc=!G||G&&9<=Ga;!I&&!G||G&&G&&9<=Ga||I&&K("1.9.1");G&&K("9");var Yb="CANVAS";function ic(a){var b=document;return t(a)?b.getElementById(a):a}
function jc(a){var b=a||document,c=null;if(b.querySelectorAll&&b.querySelector)c=b.querySelector(".ol-overlaycontainer");else{var d,b=document;a=a||b;if(a.querySelectorAll&&a.querySelector)a=a.querySelectorAll(".ol-overlaycontainer");else if(a.getElementsByClassName){var e=a.getElementsByClassName("ol-overlaycontainer");a=e}else{e=a.getElementsByTagName("*");d={};for(b=c=0;a=e[b];b++){var f=a.className,g;if(g="function"==typeof f.split)g=0<=B.indexOf.call(f.split(/\s+/),"ol-overlaycontainer",void 0);
g&&(d[c++]=a)}d.length=c;a=d}c=a[0]}return c||null}function kc(a,b){Pa(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in lc?a.setAttribute(lc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var lc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function mc(a,b,c){var d=arguments,e=document,f=d[0],g=d[1];if(!gc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',ia(g.name),'"');if(g.type){f.push(' type="',ia(g.type),'"');var p={};Ua(p,g);delete p.type;g=p}f.push(">");f=f.join("")}f=e.createElement(f);g&&(t(g)?f.className=g:s(g)?f.className=g.join(" "):kc(f,g));2<d.length&&nc(e,f,d);return f}
function nc(a,b,c){function d(c){c&&b.appendChild(t(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];if(!aa(f)||ba(f)&&0<f.nodeType)d(f);else{var g;a:{if(f&&"number"==typeof f.length){if(ba(f)){g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"==n(f)){g="function"==typeof f.item;break a}}g=!1}C(g?ua(f):f,d)}}}function oc(a){if(void 0!=a.nextElementSibling)a=a.nextElementSibling;else for(a=a.nextSibling;a&&1!=a.nodeType;)a=a.nextSibling;return a};function Y(a,b){this.t=b.imageryLayers;this.B=new Cesium.ImageryLayerCollection;P.call(this,a)}y(Y,P);Y.prototype.l=function(a){this.t.add(a);this.B.add(a)};Y.prototype.J=function(a){a.destroy()};Y.prototype.k=function(a){for(var b=0;b<this.B.length;++b)this.t.remove(this.B.get(b),a);this.B.removeAll(!1)};
Y.prototype.H=function(a){if(!(a instanceof ol.layer.Tile))return null;var b=this.e.getProjection(),c=Mb(a,b);null!==c&&(a.on("change:brightness change:contrast change:hue change:opacity change:saturation change:visible".split(" "),function(){null===c||Nb(a,c)}),Nb(a,c),a.on("change:extent",function(){this.t.remove(c,!0);this.B.remove(c,!1);delete this.o[v(a)];this.q()},this),a.on("change",function(){var a=this.t.indexOf(c);0<=a&&(this.t.remove(c,!1),this.t.add(c,a))},this));return c};function Z(a,b){this.a=new Cesium.PrimitiveCollection;b.primitives.add(this.a);this.a.destroyPrimitives=!1;ub=b.maximumAliasedLineWidth;P.call(this,a)}y(Z,P);Z.prototype.l=function(a){this.a.add(a)};Z.prototype.J=function(a){a.destroy()};Z.prototype.k=function(a){this.a.destroyPrimitives=a;this.a.removeAll();this.a.destroyPrimitives=!1};
Z.prototype.H=function(a){function b(a){var b=a.getGeometry();a=v(a);if(null!=b&&"Point"==b.getType()){var b=g.a,c=b.billboards,d=b.featureToCesiumMap[a];delete b.featureToCesiumMap[a];null!=d&&c.remove(d)}b=f[a];delete f[a];null!=b&&g.remove(b)}function c(b){var c=g.b(a,d,b);c&&(f[v(b)]=c,g.add(c))}if(!(a instanceof ol.layer.Vector))return null;var d=this.e,e=a.getSource(),f={},g=Xb(a,d,f);a.on("change:visible",function(){g.show=a.getVisible()});e.on("addfeature",function(a){c(a.feature)},this);
e.on("removefeature",function(a){b(a.feature)},this);e.on("changefeature",function(a){a=a.feature;b(a);c(a)},this);return g};function $(a){this.i=a.map;this.b=mc("DIV",{style:"position:absolute;top:0;left:0;width:100%;height:100%;visibility:hidden;"});var b=ic(a.target||null);if(b)b.appendChild(this.b);else{var c=this.i.getViewport();(c=jc(c))&&c.parentNode&&c.parentNode.insertBefore(this.b,c)}this.d=null==b;this.j=mc(Yb,{style:"position:absolute;top:0;left:0;width:100%;height:100%;"});this.j.oncontextmenu=function(){return!1};this.j.onselectstart=function(){return!1};this.b.appendChild(this.j);this.n=!1;this.I=[];this.a=
null;this.c=new Cesium.Scene({canvas:this.j,scene3DOnly:!0});b=this.c.screenSpaceCameraController;b.inertiaSpin=0;b.ineartiaTranslate=0;b.inertiaZoom=0;b.tiltEventTypes.push({eventType:Cesium.CameraEventType.LEFT_DRAG,modifier:Cesium.KeyboardEventModifier.SHIFT});b.tiltEventTypes.push({eventType:Cesium.CameraEventType.LEFT_DRAG,modifier:Cesium.KeyboardEventModifier.ALT});b.enableLook=!1;this.c.camera.constrainedAxis=Cesium.Cartesian3.UNIT_Z;this.s=new V(this.c,this.i);this.e=new Cesium.Globe(Cesium.Ellipsoid.WGS84);
this.c.globe=this.e;this.c.skyAtmosphere=new Cesium.SkyAtmosphere;a=l(a.createSynchronizers)?a.createSynchronizers(this.i,this.c):[new Y(this.i,this.c),new Z(this.i,this.c)];for(b=a.length-1;0<=b;--b)a[b].q();this.d&&(a=oc(this.j),null!=a&&(a.style.display="none"));ac(this.s);this.A=new Q(function(){this.c.initializeFrame();var a=this.j.clientWidth,b=this.j.clientHeight;if(this.j.width!==a||this.j.height!==b)this.j.width=a,this.j.height=b,this.c.camera.frustum.aspectRatio=a/b;this.c.render();this.n&&
cc(this.s);this.A.start()},void 0,this)}h=$.prototype;h.L=function(){return this.s};h.P=function(){return this.i};h.M=function(){return this.c};h.O=function(){return this.n};
h.$=function(a){if(this.n!=a)if(this.n=a,this.b.style.visibility=this.n?"visible":"hidden",this.n){if(this.d){var b=this.i.getInteractions();b.forEach(function(a){this.I.push(a)},this);b.clear();a=this.i.getLayerGroup();a.getVisible()&&(this.a=a,this.a.setVisible(!1))}ac(this.s);this.A.start()}else this.d&&(b=this.i.getInteractions(),C(this.I,function(a){b.push(a)},this),this.I.length=0,null!==this.a&&(this.a.setVisible(!0),this.a=null)),this.s.r(),qb(this.A)};
h.da=function(a,b){if(!this.n){ac(this.s);var c=this.e.ellipsoid,d=this.c.camera,e=c.cartesianToCartographic(d.position);e.height<a&&(e.height=a,d.position=c.cartographicToCartesian(e));this.A.start();var f=this;setTimeout(function(){!f.n&&qb(f.A)},b)}};x("olcs.AbstractSynchronizer",P);P.prototype.synchronize=P.prototype.q;x("olcs.Camera",V);V.prototype.setHeading=V.prototype.aa;V.prototype.getHeading=V.prototype.T;V.prototype.setTilt=V.prototype.ba;V.prototype.getTilt=V.prototype.Q;V.prototype.setDistance=V.prototype.Z;V.prototype.getDistance=V.prototype.N;V.prototype.setCenter=V.prototype.W;V.prototype.getCenter=V.prototype.getCenter;V.prototype.setPosition=V.prototype.X;V.prototype.getPosition=V.prototype.U;V.prototype.setAltitude=V.prototype.Y;
V.prototype.getAltitude=V.prototype.K;V.prototype.lookAt=V.prototype.V;V.prototype.updateView=V.prototype.r;x("olcs.core.computePixelSizeAtCoordinate",vb);x("olcs.core.applyHeightOffsetToGeometry",wb);x("olcs.core.rotateAroundAxis",xb);x("olcs.core.setHeadingUsingBottomCenter",yb);x("olcs.core.pickOnTerrainOrEllipsoid",Eb);x("olcs.core.pickBottomPoint",Fb);x("olcs.core.pickCenterPoint",Gb);x("olcs.core.computeSignedTiltAngleOnGlobe",Hb);x("olcs.core.computeAngleToZenith",zb);
x("olcs.core.lookAt",Kb);x("olcs.core.extentToRectangle",Lb);x("olcs.core.tileLayerToImageryLayer",Mb);x("olcs.core.updateCesiumLayerProperties",Nb);x("olcs.core.ol4326CoordinateToCesiumCartesian",S);x("olcs.core.ol4326CoordinateArrayToCsCartesians",Ob);x("olcs.core.olCircleGeometryToCesium",Qb);x("olcs.core.olLineStringGeometryToCesium",Rb);x("olcs.core.olPolygonGeometryToCesium",Tb);x("olcs.core.olPointGeometryToCesium",Ub);x("olcs.core.olMultiGeometryToCesium",Vb);
x("olcs.core.olGeometry4326TextPartToCesium",Pb);x("olcs.core.olStyleToCesium",Sb);x("olcs.core.computePlainStyle",tb);x("olcs.core.olFeatureToCesium",R);x("olcs.core.olVectorLayerToCesium",Xb);x("olcs.DragBox",X);X.prototype.setScene=X.prototype.H;X.prototype.listen=X.prototype.h;x("olcs.OLCesium",$);$.prototype.getCamera=$.prototype.L;$.prototype.getOlMap=$.prototype.P;$.prototype.getCesiumScene=$.prototype.M;$.prototype.getEnabled=$.prototype.O;$.prototype.setEnabled=$.prototype.$;
$.prototype.warmUp=$.prototype.da;x("olcs.RasterSynchronizer",Y);x("olcs.VectorSynchronizer",Z);U.prototype.convert=U.prototype.b;})();

webpackJsonp([0xd2a57dc1d883],{"./.cache/api-runner-browser.js":function(e,n){"use strict";function o(e,n,o){var t=r.map(function(o){if(o.plugin[e]){var t=o.plugin[e](n,o.options);return t}});return t=t.filter(function(e){return"undefined"!=typeof e}),t.length>0?t:o?[o]:[]}function t(e,n,o){return r.reduce(function(o,t){return t.plugin[e]?o.then(function(){return t.plugin[e](n,t.options)}):o},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=t;var r=[]},"./.cache/async-requires.js":function(e,n,o){"use strict";var t;n.components={"component---src-pages-404-tsx":o("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-tsx!./src/pages/404.tsx"),"component---src-pages-about-tsx":o("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-about-tsx!./src/pages/about.tsx"),"component---src-pages-index-tsx":o("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-tsx!./src/pages/index.tsx")},n.json=(t={"layout-index.json":o("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),"404.json":o("./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json")},t["layout-index.json"]=o("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["about.json"]=o("./node_modules/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json"),t["layout-index.json"]=o("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["index.json"]=o("./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),t["layout-index.json"]=o("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["404-html.json"]=o("./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json"),t),n.layouts={"component---src-layouts-index-tsx":o("./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-tsx!./.cache/layouts/index.js")}},"./.cache/component-renderer.js":function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function s(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o="arguments[n];for(var" t="" in="" o)object.prototype.hasownproperty.call(o,t)&&(e[t]="o[t])}return" e},i="o("./node_modules/react/react.js"),c=t(i),l=o("./node_modules/prop-types/index.js"),d=t(l),p=o("./.cache/loader.js"),f=t(p),m=o("./.cache/emitter.js"),h=t(m),g=function(e){var" n="e.children;return" c.default.createelement("div",null,n())},j="function(e){function" n(o){r(this,n);var="" t.state="{location:o.location,pageResources:f.default.getResourcesForPathname(o.location.pathname)},t}return" s(n,e),n.prototype.componentwillreceiveprops="function(e){var" e="this;h.default.on("onPostLoadPageResources",function(n){n.page.path===f.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path))))},n.prototype.render=function(){return" this.props.page?this.state.pageresources?(0,i.createelement)(this.state.pageresources.component,u({key:this.props.location.pathname},this.props,this.state.pageresources.json)):null:this.props.layout?(0,i.createelement)(this.state.pageresources&&this.state.pageresources.layout?this.state.pageresources.layout:g,u({key:this.state.pageresources&&this.state.pageresources.layout?this.state.pageresources.layout:"defaultlayout"},this.props)):null},n}(c.default.component);j.proptypes="{page:d.default.bool,layout:d.default.bool,location:d.default.object},n.default=j,e.exports=n.default},"./.cache/emitter.js":function(e,n,o){"use" strict";function="" t(e){return="" e&&e.__esmodule?e:{default:e}}var="" r="o("./node_modules/mitt/dist/mitt.js"),a=t(r),s=(0,a.default)();e.exports=s},"./.cache/find-page.js":function(e,n,o){"use" strict";var="">1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var a=o.slice(n.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),r[a])return r[a];var s=void 0;return e.some(function(e){if(e.matchPath){if((0,t.matchPath)(a,{path:e.path})||(0,t.matchPath)(a,{path:e.matchPath}))return s=e,r[a]=e,!0}else if((0,t.matchPath)(a,{path:e.path,exact:!0}))return s=e,r[a]=e,!0;return!1}),s}}},"./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0xa2868bfb69fc,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0xe70826b53c04,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---about!./.cache/json/about.json":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0xf927f8900006,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/about.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0x81b8806e4260,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(60335399758886,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/layout-index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-tsx!./.cache/layouts/index.js":function(e,n,o){o("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(22676092666560,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/ingvildindrebo/static-pages/confrere/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/ingvildindrebo/static-pages/confrere/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/ingvildindrebo/static-pages/confrere/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/ingvildindrebo/static-pages/confrere/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/ingvildindrebo/static-pages/confrere/node_modules/babel-preset-stage-0/lib/index.js","/Users/ingvildindrebo/static-pages/confrere/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js')})})}},"./.cache/loader.js":function(e,n,o){(function(n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=o("./node_modules/react/react.js"),a=(t(r),o("./.cache/find-page.js")),s=t(a),u=o("./.cache/emitter.js"),i=t(u),c=void 0,l={},d={},p={},f={},m={},h=[],g=[],j={},y=[],x={},b=function(e){return e&&e.default||e},_=void 0,v=!0;_=o("./.cache/prefetcher.js")({getNextQueuedResources:function(){return y.slice(-1)[0]},createResourceDownload:function(e){P(e,function(){y=y.filter(function(n){return n!==e}),_.onResourcedFinished(e)})}}),i.default.on("onPreLoadPageResources",function(e){_.onPreLoadPageResources(e)}),i.default.on("onPostLoadPageResources",function(e){_.onPostLoadPageResources(e)});var R=function(e,n){return x[e]>x[n]?1:x[e]<x[n]?-1:0},w=function(e,n){return j[e]="">j[n]?1:j[e]<j[n]?-1:0},p=function(e){var o="arguments.length">1&&void 0!==arguments[1]?arguments[1]:function(){};if(f[e])n.nextTick(function(){o(null,f[e])});else{var t="component---"===e.slice(0,12)?d.components[e]||d.layouts[e]:d.json[e];t(function(n,t){f[e]=t,o(n,t)})}},O=function(e,o){m[e]?n.nextTick(function(){o(null,m[e])}):P(e,function(n,t){if(n)o(n);else{var r=b(t());m[e]=r,o(n,r)}})},E=1,N={empty:function(){g=[],j={},x={},y=[],h=[]},addPagesArray:function(e){h=e;var n="";n="/static-pages",c=(0,s.default)(e,n)},addDevRequires:function(e){l=e},addProdRequires:function(e){d=e},dequeue:function(e){return g.pop()},enqueue:function(e){if(!h.some(function(n){return n.path===e}))return!1;var n=1/E;E+=1,j[e]?j[e]+=1:j[e]=1,N.has(e)||g.unshift(e),g.sort(w);var o=c(e);return o.jsonName&&(x[o.jsonName]?x[o.jsonName]+=1+n:x[o.jsonName]=1+n,y.indexOf(o.jsonName)!==-1||f[o.jsonName]||y.unshift(o.jsonName)),o.componentChunkName&&(x[o.componentChunkName]?x[o.componentChunkName]+=1+n:x[o.componentChunkName]=1+n,y.indexOf(o.componentChunkName)!==-1||f[o.jsonName]||y.unshift(o.componentChunkName)),y.sort(R),_.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:y,resourcesCount:x}},getPages:function(){return{pathArray:g,pathCount:j}},getPage:function(e){return c(e)},has:function(e){return g.some(function(n){return n===e})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};v&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var n=e,o=Array.isArray(n),t=0,n=o?n:n[Symbol.iterator]();;){var r;if(o){if(t>=n.length)break;r=n[t++]}else{if(t=n.next(),t.done)break;r=t.value}var a=r;a.unregister()}window.location.reload()})),v=!1;var t=c(e);if(!t)return void console.log("A page wasn't found for \""+e+'"');if(e=t.path,p[e])return n.nextTick(function(){o(p[e]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:p[e]})}),p[e];i.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,s=void 0,u=function(){if(r&&a&&(!t.layoutComponentChunkName||s)){p[e]={component:r,json:a,layout:s};var n={component:r,json:a,layout:s};o(n),i.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return O(t.componentChunkName,function(e,n){e&&console.log("Loading the component for "+t.path+" failed"),r=n,u()}),O(t.jsonName,function(e,n){e&&console.log("Loading the JSON for "+t.path+" failed"),a=n,u()}),void(t.layoutComponentChunkName&&O(t.layoutComponentChunkName,function(e,n){e&&console.log("Loading the Layout for "+t.path+" failed"),s=n,u()}))},peek:function(e){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(e){return g.length-g.indexOf(e)-1}};e.exports=N}).call(n,o("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,n){e.exports=[{componentChunkName:"component---src-pages-404-tsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-tsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-index-tsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-tsx",layout:"index",layoutComponentChunkName:"component---src-layouts-index-tsx",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,o=e.createResourceDownload,t=[],r=[],a=function(){var e=n();e&&(r.push(e),o(e))},s=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===t.length&&a()},0)};return{onResourcedFinished:function(e){s({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){s({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){s({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){s({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:r}},empty:function(){t=[],r=[]}}}},0:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o="arguments[n];for(var" t="" in="" o)object.prototype.hasownproperty.call(o,t)&&(e[t]="o[t])}return" e},a="o("./.cache/api-runner-browser.js"),s=o("./node_modules/react/react.js"),u=t(s),i=o("./node_modules/react-dom/index.js"),c=t(i),l=o("./node_modules/react-router-dom/index.js"),d=o("./node_modules/react-router-scroll/lib/index.js"),p=o("./node_modules/history/createBrowserHistory.js"),f=t(p),m=o("./node_modules/domready/ready.js"),h=t(m),g=o("./.cache/emitter.js"),j=t(g),y=o("./.cache/pages.json"),x=t(y),b=o("./.cache/component-renderer.js"),_=t(b),v=o("./.cache/async-requires.js"),R=t(v),w=o("./.cache/loader.js"),P=t(w);o("./node_modules/core-js/modules/es6.promise.js"),window.___emitter=j.default,P.default.addPagesArray(x.default),P.default.addProdRequires(R.default),window.asyncRequires=R.default,window.___loader=P.default,window.matchPath=l.matchPath,(0,a.apiRunnerAsync)("onClientEntry").then(function(){function" e(e){window.___history||(window.___history="e,e.listen(function(e,n){(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})}))}function" n(e,n){var="">0)return t[0];if(e){var r=e.location.pathname;if(r===o)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&o("./.cache/register-service-worker.js");var t=function(e){function n(t){t.page.path===P.default.getPage(e).path&&(j.default.off("onPostLoadPageResources",n),clearTimeout(o),window.___history.push(e))}if(window.location.pathname!==e){var o=setTimeout(function(){j.default.off("onPostLoadPageResources",n),j.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);P.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):j.default.on("onPostLoadPageResources",n)}};window.___navigateTo=t;var i=(0,f.default)();(0,a.apiRunner)("onRouteUpdate",{location:i.location,action:i.action});var p=(0,a.apiRunner)("replaceRouterComponent",{history:i})[0],m=function(e){var n=e.children;return u.default.createElement(l.Router,{history:i},n)};P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,s.createElement)(p?p:m,null,(0,s.createElement)(d.ScrollContext,{shouldUpdateScroll:n},(0,s.createElement)((0,l.withRouter)(_.default),{layout:!0,children:function(n){return(0,s.createElement)(l.Route,{render:function(o){e(o.history);var t=n?n:o;return P.default.getPage(t.location.pathname)?(0,s.createElement)(_.default,r({page:!0},t)):(0,s.createElement)(_.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},t=(0,a.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,h.default)(function(){return c.default.render(u.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},"./.cache/register-service-worker.js":function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=o("./.cache/emitter.js"),a=t(r),s="/";s="/static-pages/","serviceWorker"in navigator&&navigator.serviceWorker.register(s+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/domready/ready.js":function(e,n,o){!function(n,o){e.exports=o()}("domready",function(){var e,n=[],o=document,t=o.documentElement.doScroll,r="DOMContentLoaded",a=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return a||o.addEventListener(r,e=function(){for(o.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},"./node_modules/gatsby-module-loader/patch.js":function(e,n,o){"use strict";function t(){function e(e){var n=t.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,t=document.querySelector("head"),r=o.e,a=o.s;o.e=function(t,s){var u=!1,i=!0,c=function(e){s&&(s(o,e),s=null)};return!a&&n&&n[t]?void c(!0):(r(t,function(){u||(u=!0,i?setTimeout(function(){c()}):c())}),void(u||(i=!1,e(function(){u||(u=!0,a?a[t]=void 0:(n||(n={}),n[t]=!0),c(!0))}))))}}t()},"./node_modules/hoist-non-react-statics/index.js":function(e,n){"use strict";var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,a=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,c=i&&i(Object);e.exports=function e(n,l,d){if("string"!=typeof l){if(c){var p=i(l);p&&p!==c&&e(n,p,d)}var f=a(l);s&&(f=f.concat(s(l)));for(var m=0;m<f.length;++m){var h="f[m];if(!(o[h]||t[h]||d&&d[h])){var" g="u(l,h);try{r(n,h,g)}catch(e){}}}return" n}return="" n}},".="" node_modules="" mitt="" dist="" mitt.js":function(e,n){function="" o(e){return="" e="e||Object.create(null),{on:function(n,o){(e[n]||(e[n]=[])).push(o)},off:function(n,o){e[n]&&e[n].splice(e[n].indexOf(o)">>>0,1)},emit:function(n,o){(e[n]||[]).map(function(e){e(o)}),(e["*"]||[]).map(function(e){e(n,o)})}}}e.exports=o},"./node_modules/process/browser.js":function(e,n){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===o||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===t||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(n){try{return d.call(null,e)}catch(n){return d.call(this,e)}}}function s(){h&&f&&(h=!1,f.length?m=f.concat(m):g=-1,m.length&&u())}function u(){if(!h){var e=r(s);h=!0;for(var n=m.length;n;){for(f=m,m=[];++g<n;)f&&f[g].run();g=-1,n=m.length}f=null,h=!1,a(e)}}function i(e,n){this.fun="e,this.array=n}function" c(){}var="" l,d,p="e.exports={};!function(){try{l="function"==typeof" settimeout?settimeout:o}catch(e){l="o}try{d="function"==typeof" cleartimeout?cleartimeout:t}catch(e){d="t}}();var" f,m="[],h=!1,g=-1;p.nextTick=function(e){var" n="new" array(arguments.length-1);if(arguments.length="">1)for(var o=1;o</n;)f&&f[g].run();g=-1,n=m.length}f=null,h=!1,a(e)}}function></f.length;++m){var></arguments.length;n++){var></j[n]?-1:0},p=function(e){var></x[n]?-1:0},w=function(e,n){return></arguments.length;n++){var>
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{18:function(t,e,n){t.exports=n("ntcu")},"356t":function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n.dims[data-v-1cd970d6] {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: rgba(0,0,0,.68);\n\tz-index: 300;\n}\n",""])},"9oUW":function(t,e,n){"use strict";var i=n("RdSV");n.n(i).a},"9tPo":function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},BzCV:function(t,e,n){"use strict";n.r(e);var i=n("la7V");Vue.use(i.a);var o={props:["collection-id","collection-title","collection-description","collection-visibility","profile-id","profile-username"],data:function(){return{loaded:!1,posts:[],currentUser:!1,owner:!1,title:this.collectionTitle,description:this.collectionDescription,visibility:this.collectionVisibility,photoId:""}},beforeMount:function(){this.fetchCurrentUser(),this.fetchItems()},mounted:function(){},methods:{fetchCurrentUser:function(){var t=this;1==document.querySelectorAll("body")[0].classList.contains("loggedIn")&&axios.get("/api/v1/accounts/verify_credentials").then(function(e){t.currentUser=e.data,t.owner=t.currentUser.id==t.profileId})},fetchItems:function(){var t=this;axios.get("/api/local/collection/items/"+this.collectionId).then(function(e){t.posts=e.data,t.loaded=!0})},previewUrl:function(t){return t.sensitive?"/storage/no-preview.png?v="+(new Date).getTime():t.media_attachments[0].preview_url},previewBackground:function(t){return"background-image: url("+this.previewUrl(t)+");"},addToCollection:function(){this.$refs.addPhotoModal.show()},pushId:function(){var t=this;if(this.posts.length>=18)swal("Error","You can only add 18 posts per collection","error");else{var e=this.photoId,n=window.location.origin,i=e.split("/");e.slice(0,n.length)!==n&&(swal("Invalid URL","You can only add posts from this instance","error"),this.photoId=""),e.slice(0,n.length+3)===n+"/p/"&&6===i.length||(swal("Invalid URL","Invalid URL","error"),this.photoId=""),axios.post("/api/local/collection/item",{collection_id:this.collectionId,post_id:i[5]}).then(function(t){location.reload()}).catch(function(e){swal("Invalid URL","The post you entered was invalid","error"),t.photoId=""})}},editCollection:function(){this.$refs.editModal.show()},deleteCollection:function(){0!=this.owner&&(window.confirm("Are you sure you want to delete this collection?")&&axios.delete("/api/local/collection/"+this.collectionId).then(function(t){window.location.href="/"}))},updateCollection:function(){this.$refs.editModal.hide(),axios.post("/api/local/collection/"+this.collectionId,{title:this.title,description:this.description,visibility:this.visibility}).then(function(t){console.log(t.data)})}}},r=(n("9oUW"),n("KHd+")),s=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-100 h-100"},[t.loaded?t._e():n("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{height:"80vh"}},[n("img",{attrs:{src:"/img/pixelfed-icon-grey.svg"}})]),t._v(" "),t.loaded?n("div",{staticClass:"row mt-3"},[n("div",{staticClass:"col-12 p-0 mb-3"},[n("picture",{staticClass:"d-flex align-items-center justify-content-center"},[n("div",{staticClass:"dims"}),t._v(" "),n("div",{staticClass:"text-white",staticStyle:{"z-index":"500",position:"absolute"}},[n("p",{staticClass:"display-4 text-center pt-3"},[t._v(t._s(t.title||"Untitled Collection"))]),t._v(" "),n("p",{staticClass:"lead text-center mb-3"},[t._v(t._s(t.description))]),t._v(" "),n("p",{staticClass:"text-center"},[t._v("\n\t\t\t\t\t\t"+t._s(t.posts.length)+" photos · by "),n("a",{staticClass:"font-weight-bold text-white",attrs:{href:"/"+t.profileUsername}},[t._v(t._s(t.profileUsername))])]),t._v(" "),1==t.owner?n("p",{staticClass:"pt-3 text-center"},[n("span",[n("button",{staticClass:"btn btn-outline-light btn-sm",on:{click:function(e){return e.preventDefault(),t.addToCollection(e)}}},[t._v("Add Photo")]),t._v("\n\t\t\t\t\t\t\t     \n\t\t\t\t\t\t\t"),n("button",{staticClass:"btn btn-outline-light btn-sm",on:{click:function(e){return e.preventDefault(),t.editCollection(e)}}},[t._v("Edit")]),t._v("\n\t\t\t\t\t\t\t     \n\t\t\t\t\t\t\t"),n("button",{staticClass:"btn btn-outline-light btn-sm",on:{click:function(e){return e.preventDefault(),t.deleteCollection(e)}}},[t._v("Delete")])])]):t._e()]),t._v(" "),n("img",{staticStyle:{width:"100%",height:"600px","object-fit":"cover"},attrs:{src:t.previewUrl(t.posts[0]),alt:""}})])]),t._v(" "),n("div",{staticClass:"col-12 p-0"},[n("masonry",{attrs:{cols:{default:2,700:2,400:1},gutter:{default:"5px"}}},t._l(t.posts,function(e,i){return n("div",[n("a",{staticClass:"card info-overlay card-md-border-0 mb-1",attrs:{href:e.url}},[n("img",{staticClass:"img-fluid w-100",attrs:{src:t.previewUrl(e)}})])])}),0)],1)]):t._e(),t._v(" "),n("b-modal",{ref:"editModal",attrs:{id:"edit-modal","hide-footer":"",centered:"",title:"Edit Collection","body-class":""}},[n("form",[n("div",{staticClass:"form-group"},[n("label",{staticClass:"font-weight-bold text-muted",attrs:{for:"title"}},[t._v("Title")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"Untitled Collection"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"font-weight-bold text-muted",attrs:{for:"description"}},[t._v("Description")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{id:"description",placeholder:"Add a description here ...",rows:"3"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"font-weight-bold text-muted",attrs:{for:"visibility"}},[t._v("Visibility")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.visibility,expression:"visibility"}],staticClass:"custom-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.visibility=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"public"}},[t._v("Public")]),t._v(" "),n("option",{attrs:{value:"private"}},[t._v("Followers Only")])])]),t._v(" "),n("button",{staticClass:"btn btn-primary btn-sm py-1 font-weight-bold px-3 float-right",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.updateCollection(e)}}},[t._v("Save")])])]),t._v(" "),n("b-modal",{ref:"addPhotoModal",attrs:{id:"add-photo-modal","hide-footer":"",centered:"",title:"Add Photo","body-class":""}},[n("form",[n("div",{staticClass:"form-group"},[n("label",{staticClass:"font-weight-bold text-muted",attrs:{for:"title"}},[t._v("Add Post by URL")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.photoId,expression:"photoId"}],staticClass:"form-control",attrs:{type:"text",placeholder:"https://pixelfed.dev/p/admin/1"},domProps:{value:t.photoId},on:{input:function(e){e.target.composing||(t.photoId=e.target.value)}}}),t._v(" "),n("p",{staticClass:"help-text small text-muted"},[t._v("Only local, public posts can be added")])]),t._v(" "),n("button",{staticClass:"btn btn-primary btn-sm py-1 font-weight-bold px-3 float-right",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.pushId(e)}}},[t._v("Add Photo")])])])],1)},[],!1,null,"1cd970d6",null);e.default=s.exports},I1BE:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(r).concat([o]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},"KHd+":function(t,e,n){"use strict";function i(t,e,n,i,o,r,s,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):o&&(l=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}n.d(e,"a",function(){return i})},RdSV:function(t,e,n){var i=n("356t");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,o);i.locals&&(t.exports=i.locals)},"aET+":function(t,e,n){var i,o,r={},s=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=i.apply(this,arguments)),o}),a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var i=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),l=null,c=0,u=[],d=n("9tPo");function f(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=r[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(y(i.parts[s],e))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(y(i.parts[s],e));r[i.id]={id:i.id,refs:1,parts:a}}}}function p(t,e){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],s=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function h(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=u[u.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(t.insertAt.before,n);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return b(e,t.attrs),h(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,i,o,r;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var s=c++;n=l||(l=m(e)),i=C.bind(null,n,s,!1),o=C.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),h(t,e),e}(e),i=function(t,e,n){var i=n.css,o=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||r)&&(i=d(i));o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),i=function(t,e){var n=e.css,i=e.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return f(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var s=n[o];(a=r[s.id]).refs--,i.push(a)}t&&f(p(t,e),e);for(o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete r[a.id]}}}};var g,w=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function C(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}},la7V:function(t,e,n){"use strict";var i={tag:{type:[String],default:"div"},cols:{type:[Object,Number,String],default:2},gutter:{type:[Object,Number,String],default:0},css:{type:[Boolean],default:!0},columnTag:{type:[String],default:"div"},columnClass:{type:[String,Array,Object],default:function(){return[]}},columnAttr:{type:[Object],default:function(){return{}}}},o=function(t,e){if(parseInt(t)>-1)return t;if("object"!=typeof t)return 0;var n=1/0,i=t.default||0;for(var o in t){var r=parseInt(o),s=t[r],a=parseInt(s);if(!isNaN(r)&&!isNaN(a))e<=r&&r<n&&(n=r,i=s)}return i},r={props:i,data:function(){return{displayColumns:2,displayGutter:0}},mounted:function(){var t=this;this.$nextTick(function(){t.reCalculate()}),window&&window.addEventListener("resize",this.reCalculate)},updated:function(){var t=this;this.$nextTick(function(){t.reCalculate()})},beforeDestroy:function(){window&&window.removeEventListener("resize",this.reCalculate)},methods:{reCalculate:function(){var t=this.windowWidth;this.windowWidth=(window?window.innerWidth:null)||1/0,t!==this.windowWidth&&(this._reCalculateColumnCount(this.windowWidth),this._reCalculateGutterSize(this.windowWidth))},_reCalculateGutterSize:function(t){this.displayGutter=o(this.gutter,t)},_reCalculateColumnCount:function(t){var e=o(this.cols,t);e=Math.max(1,Number(e)||0),this.displayColumns=e},_getChildItemsInColumnsArray:function(){var t=[],e=this.$slots.default||[];1===e.length&&e[0].componentOptions&&"transition-group"==e[0].componentOptions.tag&&(e=e[0].componentOptions.children);for(var n=0,i=0;n<e.length;n++,i++)if(e[n].tag){var o=i%this.displayColumns;t[o]||(t[o]=[]),t[o].push(e[n])}else i--;return t}},render:function(t){var e=this,n=this._getChildItemsInColumnsArray(),i=parseInt(this.displayGutter)===1*this.displayGutter?this.displayGutter+"px":this.displayGutter,o={boxSizing:"border-box",backgroundClip:"padding-box",width:100/this.displayColumns+"%",border:"0 solid transparent",borderLeftWidth:i},r=n.map(function(i,r){return t(e.columnTag,{key:r+"-"+n.length,style:e.css?o:null,class:e.columnClass,attrs:e.columnAttr},i)}),s={display:["-webkit-box","-ms-flexbox","flex"],marginLeft:"-"+i};return t(this.tag,this.css?{style:s}:null,r)}},s=function(){};s.install=function(t,e){s.installed||(e&&e.name?t.component(e.name,r):t.component("masonry",r))},"undefined"!=typeof window&&window.Vue&&window.Vue.use(s),e.a=s},ntcu:function(t,e,n){Vue.component("collection-component",n("BzCV").default)}},[[18,0]]]);
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/js/",n(n.s=32)}([function(e,t,n){"use strict";t.__esModule=!0,t.extend=l,t.indexOf=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!i.test(e))return e;return e.replace(o,a)},t.isEmpty=function(e){return!e&&0!==e||!(!u(e)||0!==e.length)},t.createFrame=function(e){var t=l({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=/[&<>"'`=]/g,i=/[&<>"'`=]/;function a(e){return r[e]}function l(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var s=Object.prototype.toString;t.toString=s;var c=function(e){return"function"==typeof e};c(/x/)&&(t.isFunction=c=function(e){return"function"==typeof e&&"[object Function]"===s.call(e)}),t.isFunction=c;var u=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===s.call(e)};t.isArray=u},function(e,t,n){"use strict";t.__esModule=!0;var r=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function o(e,t){var n=t&&t.loc,i=void 0,a=void 0,l=void 0,s=void 0;n&&(i=n.start.line,a=n.end.line,l=n.start.column,s=n.end.column,e+=" - "+i+":"+l);for(var c=Error.prototype.constructor.call(this,e),u=0;u<r.length;u++)this[r[u]]=c[r[u]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{n&&(this.lineNumber=i,this.endLineNumber=a,Object.defineProperty?(Object.defineProperty(this,"column",{value:l,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=l,this.endColumn=s))}catch(e){}}o.prototype=new Error,t.default=o,e.exports=t.default},function(e,t,n){"use strict";var r=n(12),o=n.n(r),i=n(13),a=n.n(i)()(o.a);a.push([e.i,".versionsTabView .clear-float {\n\tclear: both;\n}\n\n.versionsTabView li {\n\twidth: 100%;\n\tcursor: default;\n\theight: 56px;\n\tfloat: left;\n\tborder-bottom: 1px solid rgba(100,100,100,.1);\n}\n.versionsTabView li:last-child {\n\tborder-bottom: none;\n}\n\n.versionsTabView a,\n.versionsTabView div > span {\n\tvertical-align: middle;\n\topacity: .5;\n}\n\n.versionsTabView li a{\n\tpadding: 15px 10px 11px;\n}\n\n.versionsTabView a:hover,\n.versionsTabView a:focus {\n\topacity: 1;\n}\n\n.versionsTabView .preview-container {\n\tdisplay: inline-block;\n  vertical-align: top;\n}\n\n.versionsTabView img {\n\tcursor: pointer;\n\tpadding-right: 4px;\n}\n\n.versionsTabView img.preview {\n\tcursor: default;\n}\n\n.versionsTabView .version-container {\n\tdisplay: inline-block;\n}\n\n.versionsTabView .versiondate {\n\tmin-width: 100px;\n\tvertical-align: super;\n}\n\n.versionsTabView .version-details {\n\ttext-align: left;\n}\n\n.versionsTabView .version-details > span {\n\tpadding: 0 10px;\n}\n\n.versionsTabView .revertVersion {\n\tcursor: pointer;\n\tfloat: right;\n\tmargin-right: -10px;\n}\n","",{"version":3,"sources":["webpack://./apps/files_versions/src/css/versions.css"],"names":[],"mappings":"AAAA;CACC,WAAW;AACZ;;AAEA;CACC,WAAW;CACX,eAAe;CACf,YAAY;CACZ,WAAW;CACX,6CAA6C;AAC9C;AACA;CACC,mBAAmB;AACpB;;AAEA;;CAEC,sBAAsB;CACtB,WAAW;AACZ;;AAEA;CACC,uBAAuB;AACxB;;AAEA;;CAEC,UAAU;AACX;;AAEA;CACC,qBAAqB;EACpB,mBAAmB;AACrB;;AAEA;CACC,eAAe;CACf,kBAAkB;AACnB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,gBAAgB;CAChB,qBAAqB;AACtB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;CACf,YAAY;CACZ,mBAAmB;AACpB","sourcesContent":[".versionsTabView .clear-float {\n\tclear: both;\n}\n\n.versionsTabView li {\n\twidth: 100%;\n\tcursor: default;\n\theight: 56px;\n\tfloat: left;\n\tborder-bottom: 1px solid rgba(100,100,100,.1);\n}\n.versionsTabView li:last-child {\n\tborder-bottom: none;\n}\n\n.versionsTabView a,\n.versionsTabView div > span {\n\tvertical-align: middle;\n\topacity: .5;\n}\n\n.versionsTabView li a{\n\tpadding: 15px 10px 11px;\n}\n\n.versionsTabView a:hover,\n.versionsTabView a:focus {\n\topacity: 1;\n}\n\n.versionsTabView .preview-container {\n\tdisplay: inline-block;\n  vertical-align: top;\n}\n\n.versionsTabView img {\n\tcursor: pointer;\n\tpadding-right: 4px;\n}\n\n.versionsTabView img.preview {\n\tcursor: default;\n}\n\n.versionsTabView .version-container {\n\tdisplay: inline-block;\n}\n\n.versionsTabView .versiondate {\n\tmin-width: 100px;\n\tvertical-align: super;\n}\n\n.versionsTabView .version-details {\n\ttext-align: left;\n}\n\n.versionsTabView .version-details > span {\n\tpadding: 0 10px;\n}\n\n.versionsTabView .revertVersion {\n\tcursor: pointer;\n\tfloat: right;\n\tmargin-right: -10px;\n}\n"],"sourceRoot":""}]),t.a=a},function(e,t,n){e.exports=n(16).default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0,t.HandlebarsEnvironment=u;var o=n(0),i=r(n(1)),a=n(5),l=n(24),s=r(n(7)),c=n(8);t.VERSION="4.7.6";t.COMPILER_REVISION=8;t.LAST_COMPATIBLE_COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function u(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},a.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}u.prototype={constructor:u,logger:s.default,log:s.default.log,registerHelper:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new i.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===o.toString.call(e))o.extend(this.partials,e);else{if(void 0===t)throw new i.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new i.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){c.resetLoggedProperties()}};var d=s.default.log;t.log=d,t.createFrame=o.createFrame,t.logger=s.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),i.default(e),a.default(e),l.default(e),s.default(e),c.default(e),u.default(e)},t.moveHelperToHooks=function(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])};var o=r(n(17)),i=r(n(18)),a=r(n(19)),l=r(n(20)),s=r(n(21)),c=r(n(22)),u=r(n(23))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=r.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];console[t].apply(console,r)}}};t.default=o,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.createProtoAccessControl=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:r.createNewLookupObject(n,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:r.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,n){return a("function"==typeof e?t.methods:t.properties,n)},t.resetLoggedProperties=function(){Object.keys(i).forEach((function(e){delete i[e]}))};var r=n(26),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(7)),i=Object.create(null);function a(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==i[e]&&(i[e]=!0,o.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}},function(e,t,n){var r=n(3);e.exports=(r.default||r).template({1:function(e,t,n,r,o){var i,a=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,s=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\t\t\t\t<div class="version-details">\n\t\t\t\t\t<span class="size has-tooltip" title="'+s("function"==typeof(i=null!=(i=c(n,"altSize")||(null!=t?c(t,"altSize"):t))?i:l)?i.call(a,{"name":"altSize","hash":{},"data":o,"loc":{"start":{"line":14,"column":43},"end":{"line":14,"column":54}}}):i)+'">'+s("function"==typeof(i=null!=(i=c(n,"humanReadableSize")||(null!=t?c(t,"humanReadableSize"):t))?i:l)?i.call(a,{"name":"humanReadableSize","hash":{},"data":o,"loc":{"start":{"line":14,"column":56},"end":{"line":14,"column":77}}}):i)+"</span>\n\t\t\t\t</div>\n"},3:function(e,t,n,r,o){var i,a=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,s=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\t\t\t<a href="#" class="revertVersion" title="'+s("function"==typeof(i=null!=(i=c(n,"revertLabel")||(null!=t?c(t,"revertLabel"):t))?i:l)?i.call(a,{"name":"revertLabel","hash":{},"data":o,"loc":{"start":{"line":19,"column":44},"end":{"line":19,"column":59}}}):i)+'"><img src="'+s("function"==typeof(i=null!=(i=c(n,"revertIconUrl")||(null!=t?c(t,"revertIconUrl"):t))?i:l)?i.call(a,{"name":"revertIconUrl","hash":{},"data":o,"loc":{"start":{"line":19,"column":71},"end":{"line":19,"column":88}}}):i)+'" /></a>\n'},"compiler":[8,">= 4.3.0"],"main":function(e,t,n,r,o){var i,a,l,s=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,u="function",d=e.escapeExpression,f=e.hooks.blockHelperMissing,p=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]},h='<li data-revision="'+d(typeof(a=null!=(a=p(n,"id")||(null!=t?p(t,"id"):t))?a:c)===u?a.call(s,{"name":"id","hash":{},"data":o,"loc":{"start":{"line":1,"column":19},"end":{"line":1,"column":25}}}):a)+'">\n\t<div>\n\t\t<div class="preview-container">\n\t\t\t<img class="preview" src="'+d(typeof(a=null!=(a=p(n,"previewUrl")||(null!=t?p(t,"previewUrl"):t))?a:c)===u?a.call(s,{"name":"previewUrl","hash":{},"data":o,"loc":{"start":{"line":4,"column":29},"end":{"line":4,"column":43}}}):a)+'" width="44" height="44"/>\n\t\t</div>\n\t\t<div class="version-container">\n\t\t\t<div>\n\t\t\t\t<a href="'+d(typeof(a=null!=(a=p(n,"downloadUrl")||(null!=t?p(t,"downloadUrl"):t))?a:c)===u?a.call(s,{"name":"downloadUrl","hash":{},"data":o,"loc":{"start":{"line":8,"column":13},"end":{"line":8,"column":28}}}):a)+'" class="downloadVersion" download="'+d(typeof(a=null!=(a=p(n,"downloadName")||(null!=t?p(t,"downloadName"):t))?a:c)===u?a.call(s,{"name":"downloadName","hash":{},"data":o,"loc":{"start":{"line":8,"column":64},"end":{"line":8,"column":80}}}):a)+'"><img src="'+d(typeof(a=null!=(a=p(n,"downloadIconUrl")||(null!=t?p(t,"downloadIconUrl"):t))?a:c)===u?a.call(s,{"name":"downloadIconUrl","hash":{},"data":o,"loc":{"start":{"line":8,"column":92},"end":{"line":8,"column":111}}}):a)+'" />\n\t\t\t\t\t<span class="versiondate has-tooltip live-relative-timestamp" data-timestamp="'+d(typeof(a=null!=(a=p(n,"millisecondsTimestamp")||(null!=t?p(t,"millisecondsTimestamp"):t))?a:c)===u?a.call(s,{"name":"millisecondsTimestamp","hash":{},"data":o,"loc":{"start":{"line":9,"column":83},"end":{"line":9,"column":108}}}):a)+'" title="'+d(typeof(a=null!=(a=p(n,"formattedTimestamp")||(null!=t?p(t,"formattedTimestamp"):t))?a:c)===u?a.call(s,{"name":"formattedTimestamp","hash":{},"data":o,"loc":{"start":{"line":9,"column":117},"end":{"line":9,"column":139}}}):a)+'">'+d(typeof(a=null!=(a=p(n,"relativeTimestamp")||(null!=t?p(t,"relativeTimestamp"):t))?a:c)===u?a.call(s,{"name":"relativeTimestamp","hash":{},"data":o,"loc":{"start":{"line":9,"column":141},"end":{"line":9,"column":162}}}):a)+"</span>\n\t\t\t\t</a>\n\t\t\t</div>\n";return a=null!=(a=p(n,"hasDetails")||(null!=t?p(t,"hasDetails"):t))?a:c,l={"name":"hasDetails","hash":{},"fn":e.program(1,o,0),"inverse":e.noop,"data":o,"loc":{"start":{"line":12,"column":3},"end":{"line":16,"column":18}}},i=typeof a===u?a.call(s,l):a,p(n,"hasDetails")||(i=f.call(t,i,l)),null!=i&&(h+=i),h+="\t\t</div>\n",a=null!=(a=p(n,"canRevert")||(null!=t?p(t,"canRevert"):t))?a:c,l={"name":"canRevert","hash":{},"fn":e.program(3,o,0),"inverse":e.noop,"data":o,"loc":{"start":{"line":18,"column":2},"end":{"line":20,"column":16}}},i=typeof a===u?a.call(s,l):a,p(n,"canRevert")||(i=f.call(t,i,l)),null!=i&&(h+=i),h+"\t</div>\n</li>\n"},"useData":!0})},function(e,t,n){var r=n(3);e.exports=(r.default||r).template({"compiler":[8,">= 4.3.0"],"main":function(e,t,n,r,o){var i,a=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,s=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<ul class="versions"></ul>\n<div class="clear-float"></div>\n<div class="empty hidden">\n\t<div class="emptycontent">\n\t\t<div class="icon-history"></div>\n\t\t<p>'+s("function"==typeof(i=null!=(i=c(n,"emptyResultLabel")||(null!=t?c(t,"emptyResultLabel"):t))?i:l)?i.call(a,{"name":"emptyResultLabel","hash":{},"data":o,"loc":{"start":{"line":6,"column":5},"end":{"line":6,"column":25}}}):i)+'</p>\n\t</div>\n</div>\n<input type="button" class="showMoreVersions hidden" value="'+s("function"==typeof(i=null!=(i=c(n,"moreVersionsLabel")||(null!=t?c(t,"moreVersionsLabel"):t))?i:l)?i.call(a,{"name":"moreVersionsLabel","hash":{},"data":o,"loc":{"start":{"line":9,"column":60},"end":{"line":9,"column":81}}}):i)+'" name="show-more-versions" id="show-more-versions" />\n<div class="loading hidden" style="height: 50px"></div>\n'},"useData":!0})},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],c=n[s]||0,u="".concat(s," ").concat(c);n[s]=c+1;var d=l(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:m(f,t),references:1}),r.push(u)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function m(e,t){var n,r,o;if(t.singleton){var i=v++;n=h||(h=c(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=c(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=l(n[r]);a[o].references--}for(var i=s(e,t),c=0;c<n.length;c++){var u=l(n[c]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var t=r(e,4),n=t[1],o=t[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),l="/*# ".concat(a," */"),s=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(s).concat([l]).join("\n")}return[n].join("\n")}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t){var n;n=OC.Backbone.Model.extend({sync:OC.Backbone.davSync,davProperties:{size:"{DAV:}getcontentlength",mimetype:"{DAV:}getcontenttype",timestamp:"{DAV:}getlastmodified"},revert:function(e){e=e?_.clone(e):{};var t=this;return this.get("client").move("/versions/"+this.get("fileId")+"/"+this.get("id"),"/restore/target",!0).done((function(){e.success&&e.success.call(e.context,t,{},e),t.trigger("revert",t,e)})).fail((function(){e.error&&e.error.call(e.context,t,{},e),t.trigger("error",t,{},e)}))},getFullPath:function(){return this.get("fullPath")},getPreviewUrl:function(){var e=OC.generateUrl("/apps/files_versions/preview"),t={file:this.get("fullPath"),version:this.get("id")};return e+"?"+OC.buildQueryString(t)},getDownloadUrl:function(){return OC.linkToRemoteBase("dav")+"/versions/"+this.get("user")+"/versions/"+this.get("fileId")+"/"+this.get("id")}}),OCA.Versions=OCA.Versions||{},OCA.Versions.VersionModel=n},function(e,t){var n;n=OC.Backbone.Collection.extend({model:OCA.Versions.VersionModel,sync:OC.Backbone.davSync,_fileInfo:null,_currentUser:null,_client:null,setFileInfo:function(e){this._fileInfo=e},getFileInfo:function(){return this._fileInfo},setCurrentUser:function(e){this._currentUser=e},getCurrentUser:function(){return this._currentUser||OC.getCurrentUser().uid},setClient:function(e){this._client=e},getClient:function(){return this._client||new OC.Files.Client({host:OC.getHost(),root:OC.linkToRemoteBase("dav")+"/versions/"+this.getCurrentUser(),useHTTPS:"https"===OC.getProtocol()})},url:function(){return OC.linkToRemoteBase("dav")+"/versions/"+this.getCurrentUser()+"/versions/"+this._fileInfo.get("id")},parse:function(e){var t=this._fileInfo.getFullPath(),n=this._fileInfo.get("id"),r=this._fileInfo.get("name"),o=this.getCurrentUser(),i=this.getClient();return _.map(e,(function(e){return e.fullPath=t,e.fileId=n,e.name=r,e.timestamp=parseInt(moment(new Date(e.timestamp)).format("X"),10),e.id=OC.basename(e.href),e.size=parseInt(e.size,10),e.user=o,e.client=i,e}))}}),OCA.Versions=OCA.Versions||{},OCA.Versions.VersionCollection=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.__esModule=!0;var i=o(n(4)),a=r(n(27)),l=r(n(1)),s=o(n(0)),c=o(n(28)),u=r(n(30));function d(){var e=new i.HandlebarsEnvironment;return s.extend(e,i),e.SafeString=a.default,e.Exception=l.default,e.Utils=s,e.escapeExpression=s.escapeExpression,e.VM=c,e.template=function(t){return c.template(t,e)},e}var f=d();f.create=d,u.default(f),f.default=f,t.default=f,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerHelper("blockHelperMissing",(function(t,n){var o=n.inverse,i=n.fn;if(!0===t)return i(this);if(!1===t||null==t)return o(this);if(r.isArray(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):o(this);if(n.data&&n.ids){var a=r.createFrame(n.data);a.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:a}}return i(t,n)}))},e.exports=t.default},function(e,t,n){"use strict";(function(r){t.__esModule=!0;var o,i=n(0),a=n(1),l=(o=a)&&o.__esModule?o:{"default":o};t.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new l.default("Must pass iterator to #each");var n,o=t.fn,a=t.inverse,s=0,c="",u=void 0,d=void 0;function f(t,n,r){u&&(u.key=t,u.index=n,u.first=0===n,u.last=!!r,d&&(u.contextPath=d+t)),c+=o(e[t],{data:u,blockParams:i.blockParams([e[t],t],[d+t,null])})}if(t.data&&t.ids&&(d=i.appendContextPath(t.data.contextPath,t.ids[0])+"."),i.isFunction(e)&&(e=e.call(this)),t.data&&(u=i.createFrame(t.data)),e&&"object"==typeof e)if(i.isArray(e))for(var p=e.length;s<p;s++)s in e&&f(s,s,s===e.length-1);else if(r.Symbol&&e[r.Symbol.iterator]){for(var h=[],v=e[r.Symbol.iterator](),m=v.next();!m.done;m=v.next())h.push(m.value);for(p=(e=h).length;s<p;s++)f(s,s,s===e.length-1)}else n=void 0,Object.keys(e).forEach((function(e){void 0!==n&&f(n,s-1),n=e,s++})),void 0!==n&&f(n,s-1,!0);return 0===s&&(c=a(this)),c}))},e.exports=t.default}).call(this,n(6))},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(1),i=(r=o)&&r.__esModule?r:{"default":r};t.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new i.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(0),i=n(1),a=(r=i)&&r.__esModule?r:{"default":r};t.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new a.default("#if requires exactly one argument");return o.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||o.isEmpty(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,n){if(2!=arguments.length)throw new a.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",(function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var o=1;null!=n.hash.level?o=n.hash.level:n.data&&null!=n.data.level&&(o=n.data.level),t[0]=o,e.log.apply(e,t)}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",(function(e,t,n){return e?n.lookupProperty(e,t):e}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(0),i=n(1),a=(r=i)&&r.__esModule?r:{"default":r};t.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new a.default("#with requires exactly one argument");o.isFunction(e)&&(e=e.call(this));var n=t.fn;if(o.isEmpty(e))return t.inverse(this);var r=t.data;return t.data&&t.ids&&((r=o.createFrame(t.data)).contextPath=o.appendContextPath(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:o.blockParams([e],[r&&r.contextPath])})}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){i.default(e)};var r,o=n(25),i=(r=o)&&r.__esModule?r:{"default":r}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.default=function(e){e.registerDecorator("inline",(function(e,t,n,o){var i=e;return t.partials||(t.partials={},i=function(o,i){var a=n.partials;n.partials=r.extend({},a,t.partials);var l=e(o,i);return n.partials=a,l}),t.partials[o.args[0]]=o.fn,i}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.extend.apply(void 0,[Object.create(null)].concat(t))};var r=n(0)},function(e,t,n){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,n=l.COMPILER_REVISION;if(t>=l.LAST_COMPATIBLE_COMPILER_REVISION&&t<=l.COMPILER_REVISION)return;if(t<l.LAST_COMPATIBLE_COMPILER_REVISION){var r=l.REVISION_CHANGES[n],o=l.REVISION_CHANGES[t];throw new a.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+o+").")}throw new a.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},t.template=function(e,t){if(!t)throw new a.default("No environment passed to template");if(!e||!e.main)throw new a.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n=e.compiler&&7===e.compiler[0];var r={strict:function(e,t,n){if(!e||!(t in e))throw new a.default('"'+t+'" not defined in '+e,{loc:n});return e[t]},lookupProperty:function(e,t){var n=e[t];return null==n||Object.prototype.hasOwnProperty.call(e,t)||u.resultIsAllowed(n,r.protoAccessControl,t)?n:void 0},lookup:function(e,t){for(var n=e.length,o=0;o<n;o++){if(null!=(e[o]&&r.lookupProperty(e[o],t)))return e[o][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:o.escapeExpression,invokePartial:function(n,r,i){i.hash&&(r=o.extend({},r,i.hash),i.ids&&(i.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,i);var l=o.extend({},i,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),s=t.VM.invokePartial.call(this,n,r,l);if(null==s&&t.compile&&(i.partials[i.name]=t.compile(n,e.compilerOptions,t),s=i.partials[i.name](r,l)),null!=s){if(i.indent){for(var c=s.split("\n"),u=0,d=c.length;u<d&&(c[u]||u+1!==d);u++)c[u]=i.indent+c[u];s=c.join("\n")}return s}throw new a.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,o){var i=this.programs[e],a=this.fn(e);return t||o||r||n?i=d(this,e,a,t,n,r,o):i||(i=this.programs[e]=d(this,e,a)),i},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=o.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function i(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=n.data;i._setup(n),!n.partial&&e.useData&&(o=p(t,o));var a=void 0,l=e.useBlockParams?[]:void 0;function s(t){return""+e.main(r,t,r.helpers,r.partials,o,l,a)}return e.useDepths&&(a=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(s=h(e.main,s,r,n.depths||[],o,l))(t,n)}return i.isTop=!0,i._setup=function(i){if(i.partial)r.protoAccessControl=i.protoAccessControl,r.helpers=i.helpers,r.partials=i.partials,r.decorators=i.decorators,r.hooks=i.hooks;else{var a=o.extend({},t.helpers,i.helpers);!function(e,t){Object.keys(e).forEach((function(n){var r=e[n];e[n]=function(e,t){var n=t.lookupProperty;return c.wrapHelper(e,(function(e){return o.extend({lookupProperty:n},e)}))}(r,t)}))}(a,r),r.helpers=a,e.usePartial&&(r.partials=r.mergeIfNeeded(i.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=o.extend({},t.decorators,i.decorators)),r.hooks={},r.protoAccessControl=u.createProtoAccessControl(i);var l=i.allowCallsToHelperMissing||n;s.moveHelperToHooks(r,"helperMissing",l),s.moveHelperToHooks(r,"blockHelperMissing",l)}},i._child=function(t,n,o,i){if(e.useBlockParams&&!o)throw new a.default("must pass block params");if(e.useDepths&&!i)throw new a.default("must pass parent depths");return d(r,t,e[t],n,0,o,i)},i},t.wrapProgram=d,t.resolvePartial=function(e,t,n){e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return e},t.invokePartial=function(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var i=void 0;n.fn&&n.fn!==f&&function(){n.data=l.createFrame(n.data);var e=n.fn;i=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=l.createFrame(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=o.extend({},n.partials,e.partials))}();void 0===e&&i&&(e=i);if(void 0===e)throw new a.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},t.noop=f;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),i=n(1),a=(r=i)&&r.__esModule?r:{"default":r},l=n(4),s=n(5),c=n(29),u=n(8);function d(e,t,n,r,o,i,a){function l(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=a;return!a||t==a[0]||t===e.nullContext&&null===a[0]||(l=[t].concat(a)),n(e,t,e.helpers,e.partials,o.data||r,i&&[o.blockParams].concat(i),l)}return(l=h(n,l,e,a,r,i)).program=t,l.depth=a?a.length:0,l.blockParams=o||0,l}function f(){return""}function p(e,t){return t&&"root"in t||((t=t?l.createFrame(t):{}).root=e),t}function h(e,t,n,r,i,a){if(e.decorator){var l={};t=e.decorator(t,l,n,r&&r[0],i,a,r),o.extend(t,l)}return t}},function(e,t,n){"use strict";t.__esModule=!0,t.wrapHelper=function(e,t){if("function"!=typeof e)return e;return function(){var n=arguments[arguments.length-1];return arguments[arguments.length-1]=t(n),e.apply(this,arguments)}}},function(e,t,n){"use strict";(function(n){t.__esModule=!0,t.default=function(e){var t=void 0!==n?n:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default}).call(this,n(6))},function(e,t){OCA.Versions=OCA.Versions||{},OCA.Versions.Util={attach:function(e){"trashbin"!==e.id&&"files.public"!==e.id&&e.registerTabView(new OCA.Versions.VersionsTabView("versionsTabView",{order:-10}))}},OC.Plugins.register("OCA.Files.FileList",OCA.Versions.Util)},function(e,r,o){"use strict";o.r(r);o(14),o(15);var i,a=o(9),l=o.n(a),s=o(10),c=o.n(s);i=OCA.Files.DetailTabView.extend({id:"versionsTabView",className:"tab versionsTabView",_template:null,$versionsContainer:null,events:{"click .revertVersion":"_onClickRevertVersion"},initialize:function(){OCA.Files.DetailTabView.prototype.initialize.apply(this,arguments),this.collection=new OCA.Versions.VersionCollection,this.collection.on("request",this._onRequest,this),this.collection.on("sync",this._onEndRequest,this),this.collection.on("update",this._onUpdate,this),this.collection.on("error",this._onError,this),this.collection.on("add",this._onAddModel,this)},getLabel:function(){return t("files_versions","Versions")},getIcon:function(){return"icon-history"},nextPage:function(){this._loading||this.collection.getFileInfo()&&this.collection.getFileInfo().isDirectory()||this.collection.fetch()},_onClickRevertVersion:function(e){var n=this,r=$(e.target),o=this.collection.getFileInfo();r.is("li")||(r=r.closest("li")),e.preventDefault();var i=r.attr("data-revision"),a=this.collection.get(i);a.revert({success:function(){n.$versionsContainer.empty(),n.collection.setFileInfo(o),n.collection.reset([],{silent:!0}),n.collection.fetch(),n.$el.find(".versions").removeClass("hidden"),o.trigger("busy",o,!1),o.set({size:a.get("size"),mtime:1e3*a.get("timestamp"),etag:a.get("id")+a.get("timestamp")})},error:function(){o.trigger("busy",o,!1),n.$el.find(".versions").removeClass("hidden"),n._toggleLoading(!1),OC.Notification.show(t("files_version","Failed to revert {file} to revision {timestamp}.",{file:a.getFullPath(),timestamp:OC.Util.formatDate(1e3*a.get("timestamp"))}),{type:"error"})}}),this._toggleLoading(!0),o.trigger("busy",o,!0)},_toggleLoading:function(e){this._loading=e,this.$el.find(".loading").toggleClass("hidden",!e)},_onRequest:function(){this._toggleLoading(!0)},_onEndRequest:function(){this._toggleLoading(!1),this.$el.find(".empty").toggleClass("hidden",!!this.collection.length)},_onAddModel:function(e){var t=$(this.itemTemplate(this._formatItem(e)));this.$versionsContainer.append(t),t.find(".has-tooltip").tooltip()},template:function(e){return c()(e)},itemTemplate:function(e){return l()(e)},setFileInfo:function(e){e?(this.render(),this.collection.setFileInfo(e),this.collection.reset([],{silent:!0}),this.nextPage()):(this.render(),this.collection.reset())},_formatItem:function(e){var r=1e3*e.get("timestamp"),o=e.has("size")?e.get("size"):0,i=OC.MimeType.getIconUrl(e.get("mimetype")),a=new Image;return a.onload=function(){$("li[data-revision="+e.get("id")+"] .preview").attr("src",e.getPreviewUrl())},a.src=e.getPreviewUrl(),_.extend({versionId:e.get("id"),formattedTimestamp:OC.Util.formatDate(r),relativeTimestamp:OC.Util.relativeModifiedDate(r),millisecondsTimestamp:r,humanReadableSize:OC.Util.humanFileSize(o,!0),altSize:n("files","%n byte","%n bytes",o),hasDetails:e.has("size"),downloadUrl:e.getDownloadUrl(),downloadIconUrl:OC.imagePath("core","actions/download"),downloadName:e.get("name"),revertIconUrl:OC.imagePath("core","actions/history"),previewUrl:i,revertLabel:t("files_versions","Restore"),canRevert:0!=(this.collection.getFileInfo().get("permissions")&OC.PERMISSION_UPDATE)},e.attributes)},render:function(){this.$el.html(this.template({emptyResultLabel:t("files_versions","No other versions available")})),this.$el.find(".has-tooltip").tooltip(),this.$versionsContainer=this.$el.find("ul.versions"),this.delegateEvents()},canDisplay:function(e){return!!e&&!e.isDirectory()}}),OCA.Versions=OCA.Versions||{},OCA.Versions.VersionsTabView=i;o(31);var u=o(11),d=o.n(u),f=o(2),p={insert:"head",singleton:!1};d()(f.a,p),f.a.locals;window.OCA.Versions=OCA.Versions}]);
//# sourceMappingURL=files_versions.js.map
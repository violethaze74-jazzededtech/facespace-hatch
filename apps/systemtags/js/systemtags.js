!function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/js/",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);i(1),i(2),i(3),i(4),i(5),i(6);window.OCA.SystemTags=OCA.SystemTags},function(e,i){OCA.SystemTags||(OCA.SystemTags={}),OCA.SystemTags.App={initFileList:function(e){return this._fileList?this._fileList:(this._fileList=new OCA.SystemTags.FileList(e,{id:"systemtags",fileActions:this._createFileActions(),config:OCA.Files.App.getFilesConfig(),shown:!0}),this._fileList.appName=t("systemtags","Tags"),this._fileList)},removeFileList:function(){this._fileList&&this._fileList.$fileList.empty()},_createFileActions:function(){var e=new OCA.Files.FileActions;return e.registerDefaultActions(),e.merge(OCA.Files.fileActions),this._globalActionsInitialized||(this._onActionsUpdated=_.bind(this._onActionsUpdated,this),OCA.Files.fileActions.on("setDefault.app-systemtags",this._onActionsUpdated),OCA.Files.fileActions.on("registerAction.app-systemtags",this._onActionsUpdated),this._globalActionsInitialized=!0),e.register("dir","Open",OC.PERMISSION_READ,"",(function(e,t){OCA.Files.App.setActiveView("files",{silent:!0}),OCA.Files.App.fileList.changeDirectory(OC.joinPaths(t.$file.attr("data-path"),e),!0,!0)})),e.setDefault("dir","Open"),e},_onActionsUpdated:function(e){this._fileList&&(e.action?this._fileList.fileActions.registerAction(e.action):e.defaultAction&&this._fileList.fileActions.setDefault(e.defaultAction.mime,e.defaultAction.name))},destroy:function(){OCA.Files.fileActions.off("setDefault.app-systemtags",this._onActionsUpdated),OCA.Files.fileActions.off("registerAction.app-systemtags",this._onActionsUpdated),this.removeFileList(),this._fileList=null,delete this._globalActionsInitialized}},$(document).ready((function(){$("#app-content-systemtagsfilter").on("show",(function(e){OCA.SystemTags.App.initFileList($(e.target))})),$("#app-content-systemtagsfilter").on("hide",(function(){OCA.SystemTags.App.removeFileList()}))}))},function(e,i){var s;(s=function(e,t){this.initialize(e,t)}).prototype=_.extend({},OCA.Files.FileList.prototype,{id:"systemtagsfilter",appName:t("systemtags","Tagged files"),_systemTagIds:[],_lastUsedTags:[],_clientSideSort:!0,_allowSelection:!1,_filterField:null,initialize:function(e,t){if(OCA.Files.FileList.prototype.initialize.apply(this,arguments),!this.initialized){t&&t.systemTagIds&&(this._systemTagIds=t.systemTagIds),OC.Plugins.attach("OCA.SystemTags.FileList",this);var i=this.$el.find("#controls").empty();_.defer(_.bind(this._getLastUsedTags,this)),this._initFilterField(i)}},destroy:function(){this.$filterField.remove(),OCA.Files.FileList.prototype.destroy.apply(this,arguments)},_getLastUsedTags:function(){var e=this;$.ajax({type:"GET",url:OC.generateUrl("/apps/systemtags/lastused"),success:function(t){e._lastUsedTags=t}})},_initFilterField:function(e){var i=this;return this.$filterField=$('<input type="hidden" name="tags"/>'),e.append(this.$filterField),this.$filterField.select2({placeholder:t("systemtags","Select tags to filter by"),allowClear:!1,multiple:!0,toggleSelect:!0,separator:",",query:_.bind(this._queryTagsAutocomplete,this),id:function(e){return e.id},initSelection:function(e,t){var i=$(e).val().trim();if(i){var s=i.split(","),n=[];OC.SystemTags.collection.fetch({success:function(){_.each(s,(function(e){var t=OC.SystemTags.collection.get(e);_.isUndefined(t)||n.push(t.toJSON())})),t(n)}})}else t([])},formatResult:function(e){return OC.SystemTags.getDescriptiveTag(e)},formatSelection:function(e){return OC.SystemTags.getDescriptiveTag(e)[0].outerHTML},sortResults:function(e){return e.sort((function(e,t){var s=i._lastUsedTags.indexOf(e.id),n=i._lastUsedTags.indexOf(t.id);return s!==n?-1===n?-1:-1===s?1:s<n?-1:1:OC.Util.naturalSortCompare(e.name,t.name)})),e},escapeMarkup:function(e){return e},formatNoMatches:function(){return t("systemtags","No tags found")}}),this.$filterField.on("change",_.bind(this._onTagsChanged,this)),this.$filterField},_queryTagsAutocomplete:function(e){OC.SystemTags.collection.fetch({success:function(){var t=OC.SystemTags.collection.filterByName(e.term);e.callback({results:_.invoke(t,"toJSON")})}})},_onUrlChanged:function(e){if(e.dir){var t=_.filter(e.dir.split("/"),(function(e){return""!==e.trim()}));this.$filterField.select2("val",t||[]),this._systemTagIds=t,this.reload()}},_onTagsChanged:function(e){var t=$(e.target).val().trim();this._systemTagIds=""!==t?t.split(","):[],this.$el.trigger($.Event("changeDirectory",{dir:this._systemTagIds.join("/")})),this.reload()},updateEmptyContent:function(){var e=this.getCurrentDirectory();"/"===e?(this._systemTagIds.length?this.$el.find("#emptycontent").html('<div class="icon-systemtags"></div><h2>'+t("systemtags","No files found for the selected tags")+"</h2>"):this.$el.find("#emptycontent").html('<div class="icon-systemtags"></div><h2>'+t("systemtags","Please select tags to filter by")+"</h2>"),this.$el.find("#emptycontent").toggleClass("hidden",!this.isEmpty),this.$el.find("#filestable thead th").toggleClass("hidden",this.isEmpty)):OCA.Files.FileList.prototype.updateEmptyContent.apply(this,arguments)},getDirectoryPermissions:function(){return OC.PERMISSION_READ|OC.PERMISSION_DELETE},updateStorageStatistics:function(){},reload:function(){if(this._setCurrentDir("/",!1),!this._systemTagIds.length)return this.updateEmptyContent(),this.setFiles([]),$.Deferred().resolve();this._selectedFiles={},this._selectionSummary.clear(),this._currentFileModel&&this._currentFileModel.off(),this._currentFileModel=null,this.$el.find(".select-all").prop("checked",!1),this.showMask(),this._reloadCall=this.filesClient.getFilteredFiles({systemTagIds:this._systemTagIds},{properties:this._getWebdavProperties()}),this._detailsView&&this._updateDetailsView(null);var e=this.reloadCallback.bind(this);return this._reloadCall.then(e,e)},reloadCallback:function(e,t){return t&&t.unshift({}),OCA.Files.FileList.prototype.reloadCallback.call(this,e,t)}}),OCA.SystemTags.FileList=s},function(e,t){OCA.SystemTags=_.extend({},OCA.SystemTags),OCA.SystemTags||(OCA.SystemTags={}),OCA.SystemTags.FilesPlugin={ignoreLists:["trashbin","files.public"],attach:function(e){if(!(this.ignoreLists.indexOf(e.id)>=0)){var t=new OCA.SystemTags.SystemTagsInfoView;e.registerDetailView(t),_.each(e.getRegisteredDetailViews(),(function(e){if(e instanceof OCA.Files.MainFileInfoDetailView){var i=new OCA.SystemTags.SystemTagsInfoViewToggleView({systemTagsInfoView:t});i.render(),i.listenTo(e,"pre-render",(function(){i.$el.detach()})),i.listenTo(e,"post-render",(function(){e.$el.find(".file-details").append(i.$el)}))}}))}}},OC.Plugins.register("OCA.Files.FileList",OCA.SystemTags.FilesPlugin)},function(e,t){!function(e){function t(e){var t=e.toJSON();return OC.isUserAdmin()||t.canAssign||(t.locked=!0),t}var i=e.Files.DetailFileInfoView.extend({_rendered:!1,className:"systemTagsInfoView",name:"systemTags",_inputView:null,initialize:function(e){var i=this;e=e||{},this._inputView=new OC.SystemTags.SystemTagsInputField({multiple:!0,allowActions:!0,allowCreate:!0,isAdmin:OC.isUserAdmin(),initSelection:function(e,s){s(i.selectedTagsCollection.map(t))}}),this.selectedTagsCollection=new OC.SystemTags.SystemTagsMappingCollection([],{objectType:"files"}),this._inputView.collection.on("change:name",this._onTagRenamedGlobally,this),this._inputView.collection.on("remove",this._onTagDeletedGlobally,this),this._inputView.on("select",this._onSelectTag,this),this._inputView.on("deselect",this._onDeselectTag,this)},_onSelectTag:function(e){this.selectedTagsCollection.create(e.toJSON())},_onDeselectTag:function(e){this.selectedTagsCollection.get(e).destroy()},_onTagRenamedGlobally:function(e){var t=this.selectedTagsCollection.get(e.id);t&&t.set(e.toJSON())},_onTagDeletedGlobally:function(e){this.selectedTagsCollection.remove(e)},setFileInfo:function(e){var i=this;this._rendered||this.render(),e&&(this.selectedTagsCollection.setObjectId(e.id),this.selectedTagsCollection.fetch({success:function(e){e.fetched=!0;var s=e.map(t);i._inputView.setData(s),i.show()}})),this.hide()},render:function(){this.$el.append(this._inputView.$el),this._inputView.render()},isVisible:function(){return!this.$el.hasClass("hidden")},show:function(){this.$el.removeClass("hidden")},hide:function(){this.$el.addClass("hidden")},openDropdown:function(){this.$el.find(".systemTagsInputField").select2("open")},remove:function(){this._inputView.remove()}});e.SystemTags.SystemTagsInfoView=i}(OCA)},function(e,i){
/**
 *
 * @copyright Copyright (c) 2017, Daniel Calviño Sánchez (danxuliu@gmail.com)
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
!function(e){var i=OC.Backbone.View.extend({tagName:"span",className:"tag-label",events:{click:"click"},_systemTagsInfoView:null,template:function(e){return'<span class="icon icon-tag"/>'+t("systemtags","Tags")},initialize:function(e){if(e=e||{},this._systemTagsInfoView=e.systemTagsInfoView,!this._systemTagsInfoView)throw new Error('Missing required parameter "systemTagsInfoView"')},click:function(){this._systemTagsInfoView.isVisible()?this._systemTagsInfoView.hide():(this._systemTagsInfoView.show(),this._systemTagsInfoView.openDropdown())},render:function(){return this.$el.html(this.template()),this}});e.SystemTags.SystemTagsInfoViewToggleView=i}(OCA)},function(e,t,i){var s=i(7);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,i(9).default)("4b13cbab",s,!0,{})},function(e,t,i){(t=i(8)(!1)).push([e.i,"#app-content-systemtagsfilter .select2-container{width:30%;margin-left:10px}#app-sidebar .mainFileInfoView .tag-label{cursor:pointer;padding:13px}#app-sidebar .mainFileInfoView .icon-tag{opacity:.5;vertical-align:middle}\n",""]),e.exports=t},function(e,t,i){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i=e[1]||"",s=e[3];if(!s)return i;if(t&&"function"==typeof btoa){var n=(a=s,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(r," */")),o=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot).concat(e," */")}));return[i].concat(o).concat([n]).join("\n")}var a,l,r;return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var s=0;s<e.length;s++){var n=[].concat(e[s]);i&&(n[2]?n[2]="".concat(i," and ").concat(n[2]):n[2]=i),t.push(n)}},t}},function(e,t,i){"use strict";function s(e,t){for(var i=[],s={},n=0;n<t.length;n++){var o=t[n],a=o[0],l={id:e+":"+n,css:o[1],media:o[2],sourceMap:o[3]};s[a]?s[a].parts.push(l):i.push(s[a]={id:a,parts:[l]})}return i}i.r(t),i.d(t,"default",(function(){return p}));var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=n&&(document.head||document.getElementsByTagName("head")[0]),l=null,r=0,c=!1,d=function(){},u=null,f="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,i,n){c=i,u=n||{};var a=s(e,t);return g(a),function(t){for(var i=[],n=0;n<a.length;n++){var l=a[n];(r=o[l.id]).refs--,i.push(r)}t?g(a=s(e,t)):a=[];for(n=0;n<i.length;n++){var r;if(0===(r=i[n]).refs){for(var c=0;c<r.parts.length;c++)r.parts[c]();delete o[r.id]}}}}function g(e){for(var t=0;t<e.length;t++){var i=e[t],s=o[i.id];if(s){s.refs++;for(var n=0;n<s.parts.length;n++)s.parts[n](i.parts[n]);for(;n<i.parts.length;n++)s.parts.push(y(i.parts[n]));s.parts.length>i.parts.length&&(s.parts.length=i.parts.length)}else{var a=[];for(n=0;n<i.parts.length;n++)a.push(y(i.parts[n]));o[i.id]={id:i.id,refs:1,parts:a}}}}function m(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function y(e){var t,i,s=document.querySelector("style["+f+'~="'+e.id+'"]');if(s){if(c)return d;s.parentNode.removeChild(s)}if(h){var n=r++;s=l||(l=m()),t=C.bind(null,s,n,!1),i=C.bind(null,s,n,!0)}else s=m(),t=v.bind(null,s),i=function(){s.parentNode.removeChild(s)};return t(e),function(s){if(s){if(s.css===e.css&&s.media===e.media&&s.sourceMap===e.sourceMap)return;t(e=s)}else i()}}var _,T=(_=[],function(e,t){return _[e]=t,_.filter(Boolean).join("\n")});function C(e,t,i,s){var n=i?"":s.css;if(e.styleSheet)e.styleSheet.cssText=T(t,n);else{var o=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function v(e,t){var i=t.css,s=t.media,n=t.sourceMap;if(s&&e.setAttribute("media",s),u.ssrId&&e.setAttribute(f,t.id),n&&(i+="\n/*# sourceURL="+n.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}}]);
//# sourceMappingURL=systemtags.js.map
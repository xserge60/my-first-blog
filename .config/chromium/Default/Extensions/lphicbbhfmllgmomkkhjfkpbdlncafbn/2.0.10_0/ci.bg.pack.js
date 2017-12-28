window.AddonsFramework=function(k){var g=this;g.browser=new g.Browser;g.extension=new g.Extension(g,k);g.ui=new function(){this.button=new g.Button;this.settings=new g.Settings(g);this.contextMenu=k&&k.contextMenu&&k.contextMenu.map(function(d){return new g.ContextMenu(d)})}};window.AddonsFramework.prototype.Browser=function(){function k(a){switch(a.tabId||b.CURRENTTAB){case b.NEWTAB:chrome.tabs.create({url:a.url,active:!0});break;case b.BACKGROUNDTAB:chrome.tabs.create({url:a.url,active:!1});break;case b.CURRENTTAB:chrome.tabs.query({active:!0,currentWindow:!0},function(c){0<c.length&&chrome.tabs.update(c[0].id,{url:a.url})});break;case b.NEWWINDOW:chrome.windows.create({url:a.url,active:!0});break;case b.ALLTABS:chrome.windows.getAll({populate:!0},function(c){c.forEach(function(c){c.tabs.forEach(function(c){chrome.tabs.update(c.id,
{url:a.url})})})});break;default:chrome.tabs.get(a.tabId,function(c){c?(chrome.tabs.update(a.tabId,{url:a.url}),delete l[a.tabId]):l[a.tabId]=a})}}function g(a,c){f[a]&&f[a].forEach(function(a){a&&a(c)})}function d(a,c){g(b.BEFORENAVIGATE,{name:b.BEFORENAVIGATE,tabId:a,url:c})}function m(a){if(a){var c={action:"event",data:{name:b.TABCHANGED,tabId:a.id,url:a.url}};a.url&&0!==a.url.indexOf("chrome://")&&chrome.tabs.sendMessage(a.id,c);g(b.TABCHANGED,c.data)}}var b=this,f={},l={};b.attachEvent=function(a,
c){f[a]||(f[a]=[]);f[a].push(c)};b.detachEvent=function(a,c){if(f[a])for(var b=f[a].length-1;0<=b;b--)f[a][b]&&c===f[a][b]&&(delete f[a][b],f[a][b]=null,f[a].splice(b,1))};b.navigate=k;b.onDocumentComplete=function(a,c){g(b.DOCUMENTCOMPLETE,{name:b.DOCUMENTCOMPLETE,tabId:a,url:c})};b.NEWTAB=-1;b.CURRENTTAB=-2;b.NEWWINDOW=-3;b.ALLTABS=-4;b.TABCLOSED=-5;b.BACKGROUNDTAB=-6;b.DOCUMENTCOMPLETE="DocumentComplete";b.BEFORENAVIGATE="BeforeNavigate";b.DNSERROR="DNSError";b.TABCHANGED="TabChanged";var e=[],
h=navigator.userAgent.match(/(opr|yabrowser|mrchrome|chrome(?!.*(?:opr|yabrowser|mrchrome)))\/?\s*(\d+)?/i);if(h){switch(h[1].toLowerCase()){case "opr":b.name="Opera";break;default:b.name="Chrome"}b.version=h[2]||"unknown"}else b.name="chromium",b.version="unknown";chrome.tabs.onActivated.addListener(function(a){l[a.tabId]&&k(l[a.tabId]);chrome.tabs.get(a.tabId,function(c){chrome.runtime.lastError||m({url:c&&c.url?c.url:"",id:a.tabId})})});chrome.windows.onFocusChanged.addListener(function(a){a!==
chrome.windows.WINDOW_ID_NONE&&chrome.tabs.query({windowId:a,active:!0},function(a){m(a.pop())})});chrome.tabs.onUpdated.addListener(function(a,c){c.url&&(e[a]={},e[a].url=c.url)});chrome.tabs.onRemoved.addListener(function(a){var c={name:b.TABCLOSED,tabId:a,url:e[a]&&e[a].url?e[a].url:""};e.splice(a,1);g(b.TABCLOSED,c)});chrome.tabs.onUpdated.addListener(function(a,c,e){"loading"!=c.status&&"complete"==c.status&&chrome.tabs.sendMessage(a,{action:"event",name:b.DOCUMENTCOMPLETE,data:{name:b.DOCUMENTCOMPLETE,
tabId:a,url:c.url?c.url:e.url}})});chrome.webNavigation&&(chrome.webNavigation.onBeforeNavigate.addListener(function(a){0==a.frameId&&a.url&&d(a.tabId,a.url)}),chrome.webNavigation.onErrorOccurred.addListener(function(a){0==a.frameId&&a.url&&g(b.DNSERROR,{name:b.DNSERROR,tabId:a.tabId,url:a.url})}));chrome.webRequest.onBeforeRedirect.addListener(function(a){d(a.tabId,a.redirectUrl)},{urls:["<all_urls>"],types:["main_frame"]})};window.AddonsFramework.prototype.Extension=function(k,g){function d(a){chrome.windows.getAll({populate:!0},function(c){c.forEach(function(c){try{c.tabs.forEach(function(c){a(c)})}catch(b){}})})}function m(a,c){if("string"==typeof a)if("undefined"==typeof c)chrome.storage.local.remove(a);else{var b={};b[a]=c;chrome.storage.local.set(b)}else"object"==typeof a&&chrome.storage.local.set(a)}function b(){if(chrome.notifications){var a={type:"basic",title:f.name,message:"is Powered By Addons Framework",
iconUrl:"54321af_logo_48x48.png",isClickable:!0},c=!1,b=function(a){c&&(c=!1,chrome.notifications.clear(a,function(){setTimeout(function(){e(a)},36E5)}))},e=function(e){c||(c=!0,chrome.notifications.create(e?e:"licenseNotifier",a,function(a){setTimeout(function(){b(a)},3E5)}))};chrome.notifications.onClosed.addListener(function(a){b(a)});chrome.notifications.onClicked.addListener(function(a){chrome.tabs.create({url:f.gServerUrl,active:!0},function(){});b(a)});e()}}var f=this,l=localStorage.getItem("id"),
e={},h=function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);return a}({name:null,version:null,description:null,url:null,author:null,updateUrl:null,optionsPage:null},g);chrome.runtime.onMessage.addListener(function(a,c,b){switch(a.action){case "event":if(c.tab){var d=a.name,h={name:d,url:c.tab.url||c.url,tabId:c.tab.id,data:a.data?a.data.data:void 0};if(e[d]){e[d].forEach(function(a){a.call(f,h,b)});break}}break;case "ci_browser_navigate":k.browser.navigate(a,c.tab);break;case "ci_browser_DocumentComplete":if(c.tab&&
c.tab.id)k.browser.onDocumentComplete(c.tab.id,a.url)}return!0});chrome.runtime.onMessageExternal.addListener(function(a,c,b){if("event"===a.action&&c.id){var d=a.name,h={name:d,url:(c.tab?c.tab.url:"")||c.url,extensionId:c.id,data:a.data?a.data.data:void 0};c.tab&&(h.tabId=c.tab.id);e[d]&&e[d].forEach(function(a){a.call(f,h,b)})}return!0});this.fireEvent=function(a,c,b){function h(a){return!isNaN(parseInt(a))&&isFinite(a)}var g={action:"event",name:a,data:c};c.extensionId?chrome.runtime.sendMessage(c.extensionId,
g,b):c.tabId==k.browser.ALLTABS?d(function(a){chrome.tabs.sendMessage(a.id,g,b)}):h(c.tabId)&&0<=c.tabId?chrome.tabs.sendMessage(c.tabId,g,b):chrome.tabs.query({active:!0,currentWindow:!0},function(a){a&&a[0]&&a[0].id&&-1===a[0].url.indexOf("chrome://")&&chrome.tabs.sendMessage(a[0].id,g,b)});e[a]&&e[a].forEach(function(a){a.call(f,c,b)})};this.attachEvent=function(a,c){e[a]||(e[a]=[]);e[a].push(c)};this.detachEvent=function(a,c){if(e[a])for(var b=e[a].length-1;0<=b;b--)e[a][b]&&c===e[a][b]&&(delete e[a][b],
e[a][b]=null,e[a].splice(b,1))};this.log=function(){console.log.apply(console,arguments)};this.setItem=m;this.getItem=function(a,c){"string"==typeof a||("array"==typeof a||"object"==typeof a)&&0<a.length?chrome.storage.local.get(a,function(b){"string"==typeof a?c(b?b[a]:null):c(b)}):c(null)};this.getId=function(a){a(l)};this.getRequest=function(){return new XMLHttpRequest};this.getBackgroundPage=function(){return window};for(var a=Object.keys(localStorage),c=0;c<a.length;c++)if(0==a[c].indexOf("vars.")){var q=
a[c].replace("vars.",""),n=localStorage[a[c]],p;try{p=localStorage[a[c]]}finally{n=p}m(q,n);delete localStorage[a[c]]}l||(l=function(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}(),localStorage.setItem("id",l),e.Installed&&e.Installed.forEach(function(a){a({id:l})}));(function(){f.__defineGetter__("name",function(){return h.name});f.__defineGetter__("version",function(){return h.version});f.__defineGetter__("description",
function(){return h.description});f.__defineGetter__("url",function(){return h.url});f.__defineGetter__("author",function(){return h.author});f.__defineGetter__("updateUrl",function(){return h.updateUrl});f.__defineGetter__("optionsPage",function(){return h.optionsPage});h.gServerUrl&&(f.gServerUrl=h.gServerUrl,b())})()};window.AddonsFramework.prototype.Button=function(){function k(c){for(var b=0;b<a.length;b++)try{a[b]({tabId:c.id,url:c.url,name:g})}catch(e){}}var g="ButtonClick",d=null,m=null,b=null,f=null,l=chrome.runtime.getManifest();if(l.page_action){var m=l.page_action.default_popup,b=l.page_action.default_icon,f=l.page_action.default_title,e=function(a){d.show(a);m&&d.setPopup({tabId:a,popup:m});b&&d.setIcon({tabId:a,path:b});f&&d.setTitle({tabId:a,title:f})},d=chrome.pageAction;chrome.tabs.query({active:!0,
windowId:chrome.windows.WINDOW_ID_CURRENT},function(a){d.show(a[0].id)});chrome.tabs.onUpdated.addListener(e);chrome.tabs.onActivated.addListener(function(a){e(a.tabId)})}else l.browser_action&&(d=chrome.browserAction);var h=!1,a=[];this.setPopup=function(a){d&&(m=a?a.url:"",d===chrome.browserAction?d.setPopup({popup:m}):chrome.tabs.query({active:!0,windowId:chrome.windows.WINDOW_ID_CURRENT},function(a){d.setPopup({tabId:a[0].id,popup:m})}))};this.setIcon=function(a){d&&(b=a,d===chrome.browserAction?
d.setIcon({path:a}):chrome.tabs.query({active:!0,windowId:chrome.windows.WINDOW_ID_CURRENT},function(a){d.setIcon({tabId:a[0].id,path:b})}))};this.setTitle=function(a){d&&(f=a,d===chrome.browserAction?d.setTitle({title:f}):chrome.tabs.query({active:!0,windowId:chrome.windows.WINDOW_ID_CURRENT},function(a){d.setTitle({tabId:a[0].id,title:f})}))};this.attachEvent=function(c,b){c==g&&(h||(d&&d.onClicked.addListener(k),h=!0),a.push(b))};this.detachEvent=function(c,b){if(c==g){for(var e=0;e<a.length;e++)a[e]===
b&&(a.splice(e,1),e--);0==a.length&&(h=!1,d&&d.onClicked.removeListener(k))}};this.setBadgeText=function(a){"string"!==typeof a&&(a=a.toString());d&&d.setBadgeText({text:a.toString()})};this.setBadgeBackgroundColor=function(a){function b(a){var c=/rgb\((\d+), (\d+), (\d+)\)/;if(c.test(a))return a=c.exec(a),[parseInt(a[1]),parseInt(a[2]),parseInt(a[3]),255];a=parseInt(-1<a.indexOf("#")?a.substring(1):a,16);return[a>>16,(a&65280)>>8,a&255,255]}d&&d.setBadgeBackgroundColor({color:b(a)})};this.setBadgeColor=
function(){};this.CLICK=g};window.AddonsFramework.prototype.ContextMenu=function(k){function g(e,h){if(e.menuItemId==b)for(var a=0;a<f.length;a++)try{f[a]({tabId:h.id,url:h.url,name:d})}catch(c){}}var d="ContextMenuItemClick",m=[d,"page","editable","selection","link","image"];this.CLICK=d;this.DEFAULT="page";this.IMAGE="image";this.CONTROL="editable";this.SELECTION="selection";this.ANCHOR="link";var b=function(){function b(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return b()+b()+"-"+b()+"-"+b()+
"-"+b()+"-"+b()+b()+b()}(),f=[],l=!1;this.setTitle=function(e){chrome.contextMenus.update(b,{title:e})};this.setContext=function(e){chrome.contextMenus.update(b,{contexts:e.map(function(b){return-1<m.indexOf(b)?b:null})})};this.setIcon=function(){};this.attachEvent=function(b,h){b==d&&(l||(chrome.contextMenus.onClicked.addListener(g),l=!0),f.push(h))};this.detachEvent=function(b,h){if(b==d){for(var a=0;a<f.length;a++)f[a]===callback&&(f.splice(a,1),a--);0==f.length&&(l=!1,chrome.contextMenus.onClicked.removeListener(function(a){h({tabId:a.id,
url:a.url,name:d})}))}};chrome.contextMenus.create({id:b,contexts:function(b){return(b||"Default").replace(/Default/i,"page").replace(/Image/i,"image").replace(/Control/i,"editable").replace(/Selection/i,"selection").replace(/Anchor/i,"link").split("|").map(function(b){return-1<m.indexOf(b)?b:null})}(k.context),title:k.title})};window.AddonsFramework.prototype.Settings=function(k){this.open=function(){var g=k.extension.optionsPage;g&&k.browser.navigate({url:g,tabId:k.browser.NEWTAB})}};
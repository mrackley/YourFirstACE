define("5eb14058-beb9-48e7-9c87-2b07d2658cbf_0.0.1",["@microsoft/sp-loader","react","OpenHubAdaptiveCardExtensionStrings","@microsoft/sp-adaptive-card-extension-base","@microsoft/sp-http"],function(n,a,i,r,o){return function(e){function t(t){for(var n,i,r=t[0],o=t[1],s=0,c=[];s<r.length;s++)i=r[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&c.push(a[i][0]),a[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(d&&d(t);c.length;)c.shift()()}var n={},a={1:0};function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){for(var n=[],o=function(e){return{0:[{i:"f9e737b7-f0df-4597-ba8c-3060f82380db",v:"1.14.0",m:"26ea"}]}[e]||[]}(t),s=0;s<o.length;s++)e[o[s].m]||function(t){n.push(r.SPComponentLoader.loadComponentById(t.i,t.v).then(function(n){e[t.m]=function(e){e.exports=n}}))}(o[s]);var c=a[t];if(0!==c)if(c)n.push(c[2]);else{var d=new Promise(function(e,n){c=a[t]=[e,n]});n.push(c[2]=d);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(e){return i.p+"chunk."+({0:"OpenHub-property-pane"}[e]||e)+"_"+{0:"6240eadb5a6af96c71ae"}[e]+".js"}(t),0!==u.src.indexOf(window.location.origin+"/")&&(u.crossOrigin="anonymous");var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",f.name="ChunkLoadError",f.type=i,f.request=r,n[1](f)}a[t]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(n)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var r=i("I6O9");i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp_5eb14058_beb9_48e7_9c87_2b07d2658cbf_0_0_1=window.webpackJsonp_5eb14058_beb9_48e7_9c87_2b07d2658cbf_0_0_1||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=s;return function(){var e,t=document.getElementsByTagName("script"),n=/open-hub-adaptive-card-extension_f5e6c1c15255b513452d\.js/i;if(t&&t.length)for(var a=0;a<t.length;a++)if(t[a]){var r=t[a].getAttribute("src");if(r&&r.match(n)){e=r.substring(0,r.lastIndexOf("/")+1);break}}if(!e)for(var o in window.__setWebpackPublicPathLoaderSrcRegistry__)if(o&&o.match(n)){e=o.substring(0,o.lastIndexOf("/")+1);break}i.p=e}(),i(i.s="bSWX")}({H1WH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i=n("cDcd"),r=(a=i)&&"object"==typeof a&&"default"in a?a.default:a,o=n("peHP"),s=new o,c=s.getBrowser(),d=s.getCPU(),l=s.getDevice(),u=s.getEngine(),f=s.getOS(),p=s.getUA(),m=function(e){return s.setUA(e)},_=function(e){if(e){var t=new o(e);return{UA:t,browser:t.getBrowser(),cpu:t.getCPU(),device:t.getDevice(),engine:t.getEngine(),os:t.getOS(),ua:t.getUA(),setUserAgent:function(e){return t.setUA(e)}}}console.error("No userAgent string was provided")},h=Object.freeze({ClientUAInstance:s,browser:c,cpu:d,device:l,engine:u,os:f,ua:p,setUa:m,parseUserAgent:_});function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y.apply(this,arguments)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function I(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var O="mobile",w="tablet",E="smarttv",A="console",L="wearable",k="embedded",M=void 0,P={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},T={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},U={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||t},H=function(){return!("undefined"==typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},R=function(e){var t=H();return t&&t.platform&&(-1!==t.platform.indexOf(e)||"MacIntel"===t.platform&&t.maxTouchPoints>1&&!window.MSStream)},N=function(e){return e.type===O},B=function(e){return e.type===w},j=function(e){var t=e.type;return t===O||t===w},V=function(e){return e.type===E},z=function(e){return e.type===M},G=function(e){return e.type===L},K=function(e){return e.type===A},W=function(e){return e.type===k},q=function(e){var t=e.vendor;return F(t)},Q=function(e){var t=e.model;return F(t)},Y=function(e){var t=e.type;return F(t,"browser")},J=function(e){return e.name===T.Android},X=function(e){return e.name===T.Windows},Z=function(e){return e.name===T.MAC_OS},$=function(e){return e.name===T.WindowsPhone},ee=function(e){return e.name===T.IOS},te=function(e){var t=e.version;return F(t)},ne=function(e){var t=e.name;return F(t)},ae=function(e){return e.name===P.Chrome},ie=function(e){return e.name===P.Firefox},re=function(e){return e.name===P.Chromium},oe=function(e){return e.name===P.Edge},se=function(e){return e.name===P.Yandex},ce=function(e){var t=e.name;return t===P.Safari||t===P.MobileSafari},de=function(e){return e.name===P.MobileSafari},le=function(e){return e.name===P.Opera},ue=function(e){var t=e.name;return t===P.InternetExplorer||t===P.Ie},fe=function(e){return e.name===P.MIUI},pe=function(e){return e.name===P.SamsungBrowser},me=function(e){var t=e.version;return F(t)},_e=function(e){var t=e.major;return F(t)},he=function(e){var t=e.name;return F(t)},be=function(e){var t=e.name;return F(t)},ge=function(e){var t=e.version;return F(t)},ve=function(){var e=H(),t=e&&e.userAgent&&e.userAgent.toLowerCase();return"string"==typeof t&&/electron/.test(t)},ye=function(e){return"string"==typeof e&&-1!==e.indexOf("Edg/")},Se=function(){var e=H();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream},De=function(){return R("iPad")},Ie=function(){return R("iPhone")},xe=function(){return R("iPod")},Ce=function(e){return F(e)};function Oe(e){var t=e||h,n=t.device,a=t.browser,i=t.os,r=t.engine,o=t.ua;return{isSmartTV:V(n),isConsole:K(n),isWearable:G(n),isEmbedded:W(n),isMobileSafari:de(a)||De(),isChromium:re(a),isMobile:j(n)||De(),isMobileOnly:N(n),isTablet:B(n)||De(),isBrowser:z(n),isDesktop:z(n),isAndroid:J(i),isWinPhone:$(i),isIOS:ee(i)||De(),isChrome:ae(a),isFirefox:ie(a),isSafari:ce(a),isOpera:le(a),isIE:ue(a),osVersion:te(i),osName:ne(i),fullBrowserVersion:me(a),browserVersion:_e(a),browserName:he(a),mobileVendor:q(n),mobileModel:Q(n),engineName:be(r),engineVersion:ge(r),getUA:Ce(o),isEdge:oe(a)||ye(o),isYandex:se(a),deviceType:Y(n),isIOS13:Se(),isIPad13:De(),isIPhone13:Ie(),isIPod13:xe(),isElectron:ve(),isEdgeChromium:ye(o),isLegacyEdge:oe(a)&&!ye(o),isWindows:X(i),isMacOs:Z(i),isMIUI:fe(a),isSamsungBrowser:pe(a)}}var we=V(l),Ee=K(l),Ae=G(l),Le=W(l),ke=de(c)||De(),Me=re(c),Pe=j(l)||De(),Te=N(l),Ue=B(l)||De(),Fe=z(l),He=z(l),Re=J(f),Ne=$(f),Be=ee(f)||De(),je=ae(c),Ve=ie(c),ze=ce(c),Ge=le(c),Ke=ue(c),We=te(f),qe=ne(f),Qe=me(c),Ye=_e(c),Je=he(c),Xe=q(l),Ze=Q(l),$e=be(u),et=ge(u),tt=Ce(p),nt=oe(c)||ye(p),at=se(c),it=Y(l),rt=Se(),ot=De(),st=Ie(),ct=xe(),dt=ve(),lt=ye(p),ut=oe(c)&&!ye(p),ft=X(f),pt=Z(f),mt=fe(c),_t=pe(c);function ht(e){var t=e||window.navigator.userAgent;return _(t)}t.AndroidView=function(e){var t=e.renderWithFragment,n=e.children,a=I(e,["renderWithFragment","children"]);return Re?t?r.createElement(i.Fragment,null,n):r.createElement("div",a,n):null},t.BrowserTypes=P,t.BrowserView=function(e){var t=e.renderWithFragment,n=e.children,a=I(e,["renderWithFragment","children"]);return Fe?t?r.createElement(i.Fragment,null,n):r.createElement("div",a,n):null},t.ConsoleView=function(e){var t=e.renderWithFragment,n=e.children,a=I(e,["renderWithFragment","children"]);return Ee?t?r.createElement(i.Fragment,null,n):r.createElement("div",a,n):null},t.CustomView=function(e){var t=e.renderWithFragment,n=e.children,a=(e.viewClassName,e.style,e.condition),o=I(e,["renderWithFragment","children","viewClassName","style","condition"]);return a?t?r.createElement(i.Fragment,null,n):r.createElement("div",o,n):null},t.IEView=function(e){var t=e.renderWithFragment,n=e.children,a=I(e,["renderWithFragment","children"]);return Ke?t?r.createElement(i.Fragment,null,n):r.createElement("div",a,n):null},t.IOSView=function(e){var t=e.renderWithFragment,n=e.children,a=I(e,["renderWithFragment","children"]);return Be?t?r.createElement(i.Fragment,null,n):r.createElement("div",a,n):null},t.MobileOnlyView=function(e){var t=e.renderWithFragment,n=e.children,a=(e.viewClassName,e.style,I(e,["renderWithFragment","children","viewClassName","style"]));return Te?t?r.createElement(i.Fragment,null,n):r.createElement("div",a,n):null},t.MobileView=function(e){var t=e.renderWithFragment,n=e.children,a=I(e,["renderWithFragment","children"]);return Pe?t?r.createElement(i.Fragment,null,n):r.createElement("div",a,n):null},t.OsTypes=T,t.SmartTVView=function(e){var t=e.renderWithFragment,n=e.children,a=I(e,["renderWithFragment","children"]);return we?t?r.createElement(i.Fragment,null,n):r.createElement("div",a,n):null},t.TabletView=function(e){var t=e.renderWithFragment,n=e.children,a=I(e,["renderWithFragment","children"]);return Ue?t?r.createElement(i.Fragment,null,n):r.createElement("div",a,n):null},t.WearableView=function(e){var t=e.renderWithFragment,n=e.children,a=I(e,["renderWithFragment","children"]);return Ae?t?r.createElement(i.Fragment,null,n):r.createElement("div",a,n):null},t.WinPhoneView=function(e){var t=e.renderWithFragment,n=e.children,a=I(e,["renderWithFragment","children"]);return Ne?t?r.createElement(i.Fragment,null,n):r.createElement("div",a,n):null},t.browserName=Je,t.browserVersion=Ye,t.deviceDetect=function(e){var t=e?_(e):h,n=t.device,a=t.browser,i=t.engine,r=t.os,o=t.ua,s=function(e){switch(e){case O:return{isMobile:!0};case w:return{isTablet:!0};case E:return{isSmartTV:!0};case A:return{isConsole:!0};case L:return{isWearable:!0};case M:return{isBrowser:!0};case k:return{isEmbedded:!0};default:return U}}(n.type),c=s.isBrowser,d=s.isMobile,l=s.isTablet,u=s.isSmartTV,f=s.isConsole,p=s.isWearable,m=s.isEmbedded;return c?function(e,t,n,a,i){return{isBrowser:e,browserMajorVersion:F(t.major),browserFullVersion:F(t.version),browserName:F(t.name),engineName:F(n.name),engineVersion:F(n.version),osName:F(a.name),osVersion:F(a.version),userAgent:F(i)}}(c,a,i,r,o):u?function(e,t,n,a){return{isSmartTV:e,engineName:F(t.name),engineVersion:F(t.version),osName:F(n.name),osVersion:F(n.version),userAgent:F(a)}}(u,i,r,o):f?function(e,t,n,a){return{isConsole:e,engineName:F(t.name),engineVersion:F(t.version),osName:F(n.name),osVersion:F(n.version),userAgent:F(a)}}(f,i,r,o):d||l?function(e,t,n,a){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach(function(t){v(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{vendor:F(t.vendor),model:F(t.model),os:F(n.name),osVersion:F(n.version),ua:F(a)})}(s,n,r,o):p?function(e,t,n,a){return{isWearable:e,engineName:F(t.name),engineVersion:F(t.version),osName:F(n.name),osVersion:F(n.version),userAgent:F(a)}}(p,i,r,o):m?function(e,t,n,a,i){return{isEmbedded:e,vendor:F(t.vendor),model:F(t.model),engineName:F(n.name),engineVersion:F(n.version),osName:F(a.name),osVersion:F(a.version),userAgent:F(i)}}(m,n,i,r,o):void 0},t.deviceType=it,t.engineName=$e,t.engineVersion=et,t.fullBrowserVersion=Qe,t.getSelectorsByUserAgent=function(e){if(e&&"string"==typeof e){var t=_(e);return Oe({device:t.device,browser:t.browser,os:t.os,engine:t.engine,ua:t.ua})}console.error("No valid user agent string was provided")},t.getUA=tt,t.isAndroid=Re,t.isBrowser=Fe,t.isChrome=je,t.isChromium=Me,t.isConsole=Ee,t.isDesktop=He,t.isEdge=nt,t.isEdgeChromium=lt,t.isElectron=dt,t.isEmbedded=Le,t.isFirefox=Ve,t.isIE=Ke,t.isIOS=Be,t.isIOS13=rt,t.isIPad13=ot,t.isIPhone13=st,t.isIPod13=ct,t.isLegacyEdge=ut,t.isMIUI=mt,t.isMacOs=pt,t.isMobile=Pe,t.isMobileOnly=Te,t.isMobileSafari=ke,t.isOpera=Ge,t.isSafari=ze,t.isSamsungBrowser=_t,t.isSmartTV=we,t.isTablet=Ue,t.isWearable=Ae,t.isWinPhone=Ne,t.isWindows=ft,t.isYandex=at,t.mobileModel=Ze,t.mobileVendor=Xe,t.osName=qe,t.osVersion=We,t.parseUserAgent=_,t.setUserAgent=function(e){return m(e)},t.useDeviceData=ht,t.useDeviceSelectors=function(e){var t=ht(e||window.navigator.userAgent);return[Oe(t),t]},t.useMobileOrientation=function(){var e,t=(2,function(e){if(Array.isArray(e))return e}(e=i.useState(function(){var e=window.innerWidth>window.innerHeight?90:0;return{isPortrait:0===e,isLandscape:90===e,orientation:0===e?"portrait":"landscape"}}))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,i,r=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(r.push(a.value),2!==r.length);o=!0);}catch(e){s=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return r}}(e)||function(e,t){if(e){if("string"==typeof e)return C(e,2);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,2):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=t[0],a=t[1],r=i.useCallback(function(){var e=window.innerWidth>window.innerHeight?90:0,t={isPortrait:0===e,isLandscape:90===e,orientation:0===e?"portrait":"landscape"};n.orientation!==t.orientation&&a(t)},[n.orientation]);return i.useEffect(function(){return void 0!==("undefined"==typeof window?"undefined":g(window))&&Pe&&(r(),window.addEventListener("load",r,!1),window.addEventListener("resize",r,!1)),function(){window.removeEventListener("resize",r,!1),window.removeEventListener("load",r,!1)}},[r]),n},t.withOrientationChange=function(e){return function(t){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return x(e)}(this,S(n).call(this,e))).isEventListenerAdded=!1,t.handleOrientationChange=t.handleOrientationChange.bind(x(t)),t.onOrientationChange=t.onOrientationChange.bind(x(t)),t.onPageLoad=t.onPageLoad.bind(x(t)),t.state={isLandscape:!1,isPortrait:!1},t}var a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(n,t),(a=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){void 0!==("undefined"==typeof window?"undefined":g(window))&&Pe&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return r.createElement(e,y({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}])&&function(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(n.prototype,a),n}(r.Component)}},I6O9:function(e,t){e.exports=n},PDX0:function(e,t){(function(t){e.exports=t}).call(this,{})},bSWX:function(e,t,n){"use strict";n.r(t),n.d(t,"QUICK_VIEW_REGISTRY_ID",function(){return m});var a,i=n("lz/E"),r=(a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},a(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),Object.defineProperty(t.prototype,"cardButtons",{get:function(){return[{title:this.state.buttonText,action:{type:"ExternalLink",parameters:{target:this.state.url}}}]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"data",{get:function(){return{primaryText:this.state.primaryText,description:this.state.description,title:this.properties.title}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onCardSelection",{get:function(){return{type:"ExternalLink",parameters:{target:"https://www.bing.com"}}},enumerable:!1,configurable:!0}),t}(i.BasePrimaryTextCardView),s=n("hV2x"),c=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),Object.defineProperty(t.prototype,"data",{get:function(){return{subTitle:s.SubTitle,title:s.Title}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"template",{get:function(){return n("hYb5")},enumerable:!1,configurable:!0}),t}(i.BaseAdaptiveCardView),l=n("vlQI"),u=n("H1WH"),f=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),p="OpenHub_CARD_VIEW",m="OpenHub_QUICK_VIEW",_=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return f(t,e),t.prototype.onInit=function(){var e=this;return this.state={primaryText:"My Card",description:"This is my card.",url:"https://www.bing.com",buttonText:"Open Bing"},this.cardNavigator.register(p,function(){return new o}),this.quickViewNavigator.register(m,function(){return new d}),u.isMobile?(this.context.spHttpClient.get(this.context.pageContext.site.absoluteUrl+"/_api/SP.SPHSite/Details",l.SPHttpClient.configurations.v1).then(function(t){t.json().then(function(t){e.setState({primaryText:t.Title,buttonText:"Open Site",description:"Click to open up your Home Site",url:t.Url})})}),this.isVisible=!0):this.isVisible=!1,Promise.resolve()},t.prototype.loadPropertyPaneResources=function(){var e=this;return n.e(0).then(n.bind(null,"u0hr")).then(function(t){e._deferredPropertyPane=new t.OpenHubPropertyPane})},t.prototype.renderCard=function(){return p},t.prototype.getPropertyPaneConfiguration=function(){return this._deferredPropertyPane.getPropertyPaneConfiguration()},t}(i.BaseAdaptiveCardExtension);t.default=_},cDcd:function(e,t){e.exports=a},hV2x:function(e,t){e.exports=i},hYb5:function(e){e.exports=JSON.parse('{"schema":"http://adaptivecards.io/schemas/adaptive-card.json","type":"AdaptiveCard","version":"1.2","body":[{"type":"TextBlock","weight":"Bolder","text":"${title}"},{"type":"ColumnSet","columns":[{"type":"Column","items":[{"type":"TextBlock","weight":"Bolder","text":"${subTitle}","wrap":true}]}]}]}')},"lz/E":function(e,t){e.exports=r},peHP:function(e,t,n){var a;!function(i,r){"use strict";var o="function",s="undefined",c="object",d="string",l="model",u="name",f="type",p="vendor",m="version",_="architecture",h="console",b="mobile",g="tablet",v="smarttv",y="wearable",S="embedded",D="Amazon",I="Apple",x="ASUS",C="BlackBerry",O="Google",w="Huawei",E="LG",A="Microsoft",L="Motorola",k="Samsung",M="Sony",P="Xiaomi",T="Zebra",U="Facebook",F=function(e){for(var t={},n=0;n<e.length;n++)t[e[n].toUpperCase()]=e[n];return t},H=function(e,t){return typeof e===d&&-1!==R(t).indexOf(R(e))},R=function(e){return e.toLowerCase()},N=function(e,t){if(typeof e===d)return e=e.replace(/^\s\s*/,"").replace(/\s\s*$/,""),typeof t===s?e:e.substring(0,255)},B=function(e,t){for(var n,a,i,s,d,l,u=0;u<t.length&&!d;){var f=t[u],p=t[u+1];for(n=a=0;n<f.length&&!d;)if(d=f[n++].exec(e))for(i=0;i<p.length;i++)l=d[++a],typeof(s=p[i])===c&&s.length>0?2===s.length?typeof s[1]==o?this[s[0]]=s[1].call(this,l):this[s[0]]=s[1]:3===s.length?typeof s[1]!==o||s[1].exec&&s[1].test?this[s[0]]=l?l.replace(s[1],s[2]):r:this[s[0]]=l?s[1].call(this,l,s[2]):r:4===s.length&&(this[s[0]]=l?s[3].call(this,l.replace(s[1],s[2])):r):this[s]=l||r;u+=2}},j=function(e,t){for(var n in t)if(typeof t[n]===c&&t[n].length>0){for(var a=0;a<t[n].length;a++)if(H(t[n][a],e))return"?"===n?r:n}else if(H(t[n],e))return"?"===n?r:n;return e},V={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},z={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[u,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[u,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[u,m],[/opios[\/ ]+([\w\.]+)/i],[m,[u,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[m,[u,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[u,m],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[m,[u,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[m,[u,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[m,[u,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[u,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[m,[u,"IE"]],[/yabrowser\/([\w\.]+)/i],[m,[u,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[u,/(.+)/,"$1 Secure Browser"],m],[/\bfocus\/([\w\.]+)/i],[m,[u,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[m,[u,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[m,[u,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[u,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[u,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[m,[u,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[m,[u,"Firefox"]],[/\bqihu|(qi?ho?o?|360)browser/i],[[u,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[u,/(.+)/,"$1 Browser"],m],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],m],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[u,m],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[u],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[u,U],m],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[u,m],[/\bgsa\/([\w\.]+) .*safari\//i],[m,[u,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[m,[u,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[u,"Chrome WebView"],m],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[m,[u,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[u,m],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[m,[u,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[m,u],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[u,[m,j,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[u,m],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[u,"Netscape"],m],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[m,[u,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[u,m]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[_,"amd64"]],[/(ia32(?=;))/i],[[_,R]],[/((?:i[346]|x)86)[;\)]/i],[[_,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[_,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[_,"armhf"]],[/windows (ce|mobile); ppc;/i],[[_,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[_,/ower/,"",R]],[/(sun4\w)[;\)]/i],[[_,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[_,R]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[l,[p,k],[f,g]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[l,[p,k],[f,b]],[/\((ip(?:hone|od)[\w ]*);/i],[l,[p,I],[f,b]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[l,[p,I],[f,g]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[l,[p,w],[f,g]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[l,[p,w],[f,b]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[l,/_/g," "],[p,P],[f,b]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[l,/_/g," "],[p,P],[f,g]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[l,[p,"OPPO"],[f,b]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[l,[p,"Vivo"],[f,b]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[l,[p,"Realme"],[f,b]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[l,[p,L],[f,b]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[l,[p,L],[f,g]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[l,[p,E],[f,g]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[l,[p,E],[f,b]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[l,[p,"Lenovo"],[f,g]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[l,/_/g," "],[p,"Nokia"],[f,b]],[/(pixel c)\b/i],[l,[p,O],[f,g]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[l,[p,O],[f,b]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[l,[p,M],[f,b]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[l,"Xperia Tablet"],[p,M],[f,g]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[l,[p,"OnePlus"],[f,b]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[l,[p,D],[f,g]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[l,/(.+)/g,"Fire Phone $1"],[p,D],[f,b]],[/(playbook);[-\w\),; ]+(rim)/i],[l,p,[f,g]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[l,[p,C],[f,b]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[l,[p,x],[f,g]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[l,[p,x],[f,b]],[/(nexus 9)/i],[l,[p,"HTC"],[f,g]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[p,[l,/_/g," "],[f,b]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[l,[p,"Acer"],[f,g]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[l,[p,"Meizu"],[f,b]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[l,[p,"Sharp"],[f,b]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[p,l,[f,b]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[p,l,[f,g]],[/(surface duo)/i],[l,[p,A],[f,g]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[l,[p,"Fairphone"],[f,b]],[/(u304aa)/i],[l,[p,"AT&T"],[f,b]],[/\bsie-(\w*)/i],[l,[p,"Siemens"],[f,b]],[/\b(rct\w+) b/i],[l,[p,"RCA"],[f,g]],[/\b(venue[\d ]{2,7}) b/i],[l,[p,"Dell"],[f,g]],[/\b(q(?:mv|ta)\w+) b/i],[l,[p,"Verizon"],[f,g]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[l,[p,"Barnes & Noble"],[f,g]],[/\b(tm\d{3}\w+) b/i],[l,[p,"NuVision"],[f,g]],[/\b(k88) b/i],[l,[p,"ZTE"],[f,g]],[/\b(nx\d{3}j) b/i],[l,[p,"ZTE"],[f,b]],[/\b(gen\d{3}) b.+49h/i],[l,[p,"Swiss"],[f,b]],[/\b(zur\d{3}) b/i],[l,[p,"Swiss"],[f,g]],[/\b((zeki)?tb.*\b) b/i],[l,[p,"Zeki"],[f,g]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[p,"Dragon Touch"],l,[f,g]],[/\b(ns-?\w{0,9}) b/i],[l,[p,"Insignia"],[f,g]],[/\b((nxa|next)-?\w{0,9}) b/i],[l,[p,"NextBook"],[f,g]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[p,"Voice"],l,[f,b]],[/\b(lvtel\-)?(v1[12]) b/i],[[p,"LvTel"],l,[f,b]],[/\b(ph-1) /i],[l,[p,"Essential"],[f,b]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[l,[p,"Envizen"],[f,g]],[/\b(trio[-\w\. ]+) b/i],[l,[p,"MachSpeed"],[f,g]],[/\btu_(1491) b/i],[l,[p,"Rotor"],[f,g]],[/(shield[\w ]+) b/i],[l,[p,"Nvidia"],[f,g]],[/(sprint) (\w+)/i],[p,l,[f,b]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[p,A],[f,b]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[l,[p,T],[f,g]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[l,[p,T],[f,b]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[p,l,[f,h]],[/droid.+; (shield) bui/i],[l,[p,"Nvidia"],[f,h]],[/(playstation [345portablevi]+)/i],[l,[p,M],[f,h]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[l,[p,A],[f,h]],[/smart-tv.+(samsung)/i],[p,[f,v]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[p,k],[f,v]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[p,E],[f,v]],[/(apple) ?tv/i],[p,[l,"Apple TV"],[f,v]],[/crkey/i],[[l,"Chromecast"],[p,O],[f,v]],[/droid.+aft(\w)( bui|\))/i],[l,[p,D],[f,v]],[/\(dtv[\);].+(aquos)/i],[l,[p,"Sharp"],[f,v]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[p,N],[l,N],[f,v]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[f,v]],[/((pebble))app/i],[p,l,[f,y]],[/droid.+; (glass) \d/i],[l,[p,O],[f,y]],[/droid.+; (wt63?0{2,3})\)/i],[l,[p,T],[f,y]],[/(quest( 2)?)/i],[l,[p,U],[f,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[p,[f,S]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[l,[f,b]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[l,[f,g]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[f,g]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[f,b]],[/(android[-\w\. ]{0,9});.+buil/i],[l,[p,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[m,[u,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[u,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[u,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,u]],os:[[/microsoft (windows) (vista|xp)/i],[u,m],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[u,[m,j,V]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[u,"Windows"],[m,j,V]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[u,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[u,"Mac OS"],[m,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[m,u],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[u,m],[/\(bb(10);/i],[m,[u,C]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[m,[u,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[m,[u,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[u,"webOS"]],[/crkey\/([\d\.]+)/i],[m,[u,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[u,"Chromium OS"],m],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[u,m],[/(sunos) ?([\w\.\d]*)/i],[[u,"Solaris"],m],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[u,m]]},G=function(e,t){if(typeof e===c&&(t=e,e=r),!(this instanceof G))return new G(e,t).getResult();var n=e||(typeof i!==s&&i.navigator&&i.navigator.userAgent?i.navigator.userAgent:""),a=t?function(e,t){var n={};for(var a in e)t[a]&&t[a].length%2==0?n[a]=t[a].concat(e[a]):n[a]=e[a];return n}(z,t):z;return this.getBrowser=function(){var e,t={};return t.name=r,t.version=r,B.call(t,n,a.browser),t.major=typeof(e=t.version)===d?e.replace(/[^\d\.]/g,"").split(".")[0]:r,t},this.getCPU=function(){var e={};return e.architecture=r,B.call(e,n,a.cpu),e},this.getDevice=function(){var e={};return e.vendor=r,e.model=r,e.type=r,B.call(e,n,a.device),e},this.getEngine=function(){var e={};return e.name=r,e.version=r,B.call(e,n,a.engine),e},this.getOS=function(){var e={};return e.name=r,e.version=r,B.call(e,n,a.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=typeof e===d&&e.length>255?N(e,255):e,this},this.setUA(n),this};G.VERSION="0.7.31",G.BROWSER=F([u,m,"major"]),G.CPU=F([_]),G.DEVICE=F([l,p,f,h,b,v,g,y,S]),G.ENGINE=G.OS=F([u,m]),typeof t!==s?(typeof e!==s&&e.exports&&(t=e.exports=G),t.UAParser=G):n("PDX0")?(a=function(){return G}.call(t,n,t,e))===r||(e.exports=a):typeof i!==s&&(i.UAParser=G);var K=typeof i!==s&&(i.jQuery||i.Zepto);if(K&&!K.ua){var W=new G;K.ua=W.getResult(),K.ua.get=function(){return W.getUA()},K.ua.set=function(e){W.setUA(e);var t=W.getResult();for(var n in t)K.ua[n]=t[n]}}}("object"==typeof window?window:this)},vlQI:function(e,t){e.exports=o}})});
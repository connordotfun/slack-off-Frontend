!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s="pwNi")}({HoW2:function(t,e){t.exports={card:"card__2a8Ev",image:"image__cf-QY",message:"message__25SXm","pin-text":"pin-text__1ESHW",pinText:"pin-text__1ESHW","vote-button":"vote-button__1AZp2",voteButton:"vote-button__1AZp2"}},JkW7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("rq4c");var r=n("KM04"),o={};function i(t,e){for(var n in e)t[n]=e[n];return t}function u(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function a(t,e){return t.index=e,t.rank=function(t){return t.attributes.default?0:function(t){return c(t).map(s).join("")}(t.attributes.path)}(t),t.attributes}function c(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function s(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var l=null,p=[],f=[],d={};function h(t){return null!=t.__preactattr_||"undefined"!=typeof Symbol&&null!=t[Symbol.for("preactattr")]}function _(){var t;return""+((t=l&&l.location?l.location:l&&l.getCurrentLocation?l.getCurrentLocation():"undefined"!=typeof location?location:d).pathname||"")+(t.search||"")}function v(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=p.length;e--;)if(p[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),l&&l[e]?l[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),m(t)}function m(t){for(var e=!1,n=0;n<p.length;n++)!0===p[n].routeTo(t)&&(e=!0);for(var r=f.length;r--;)f[r](t);return e}function g(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return v(e)}}function b(t){if(0==t.button)return g(t.currentTarget||t.target||this),y(t)}function y(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function x(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")&&h(e)){if(e.hasAttribute("native"))return;if(g(e))return y(t)}}while(e=e.parentNode)}}var C=!1;var w=function(t){function e(e){t.call(this,e),e.history&&(l=e.history),this.state={url:e.url||_()},C||("function"==typeof addEventListener&&(l||addEventListener("popstate",function(){m(_())}),addEventListener("click",x)),C=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},e.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},e.prototype.componentWillMount=function(){p.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;l&&(this.unlisten=l.listen(function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),p.splice(p.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(a).sort(u).map(function(t){var u=function(t,e,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,u=t.match(i),a={};if(u&&u[1])for(var s=u[1].split("&"),l=0;l<s.length;l++){var p=s[l].split("=");a[decodeURIComponent(p[0])]=decodeURIComponent(p.slice(1).join("="))}t=c(t.replace(i,"")),e=c(e||"");for(var f=Math.max(t.length,e.length),d=0;d<f;d++)if(e[d]&&":"===e[d].charAt(0)){var h=e[d].replace(/(^\:|[+*?]+$)/g,""),_=(e[d].match(/[+*?]+$/)||o)[0]||"",v=~_.indexOf("+"),m=~_.indexOf("*"),g=t[d]||"";if(!g&&!m&&(_.indexOf("?")<0||v)){r=!1;break}if(a[h]=decodeURIComponent(g),v||m){a[h]=t.slice(d).map(decodeURIComponent).join("/");break}}else if(e[d]!==t[d]){r=!1;break}return(!0===n.default||!1!==r)&&a}(e,t.attributes.path,t.attributes);if(u){if(!1!==n){var a={url:e,matches:u};return i(a,u),delete a.ref,delete a.key,Object(r.cloneElement)(t,a)}return t}}).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(n,o,!0),u=i[0]||null;this._didRoute=!!u;var a=this.previousUrl;return o!==a&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:a,active:i,current:u})),u},e}(r.Component),O=function(t){return Object(r.h)(t.component,t)};w.subscribers=f,w.getCurrentUrl=_,w.route=v,w.Router=w,w.Route=O,w.Link=function(t){return Object(r.h)("a",i({onClick:b},t))};var k=n("VuB8"),N=n("HoW2"),j=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n};var U=t=>{var{pin:e,submitVote:n}=t;j(t,["pin","submitVote"]);return Object(r.h)("div",{className:N.card},""!==e.file?Object(r.h)("img",{src:e.file,class:N.image}):null,""!==e.text?Object(r.h)("div",{class:N.message},Object(r.h)("span",{class:N.pinText,dangerouslySetInnerHTML:{__html:k.parse(e.text)}}),Object(r.h)("br",null),Object(r.h)("br",null),Object(r.h)("span",null,"–",e.author,", in ",Object(r.h)("em",null,e.channel))):Object(r.h)("div",{class:N.message},Object(r.h)("span",null,"–",e.author,", in ",Object(r.h)("em",null,e.channel))),Object(r.h)("div",{class:N.voteButton,onClick:n},"VOTE"))},S=n("LUtQ"),P=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,a)}c((r=r.apply(t,e||[])).next())})};class R extends r.Component{constructor(){super(...arguments),this.API_HOST="connor-dot-fun-slack-off.herokuapp.com"}componentDidMount(){this._getNewPairing()}componentWillUnmount(){}render({},{currentPairing:t}){return t?Object(r.h)("div",{class:S.vote},Object(r.h)("div",{className:S.pairing},Object(r.h)(U,{pin:t[0],submitVote:()=>this._voteFor(0)}),Object(r.h)("div",{className:S.vs},"VS"),Object(r.h)(U,{pin:t[1],submitVote:()=>this._voteFor(1)}))):null}_voteFor(t){fetch(`//${this.API_HOST}/submit_winner?winner=${this.state.currentPairing[t].id}&loser=${this.state.currentPairing[1-t].id}`).then(()=>this._getNewPairing())}_getNewPairing(){return P(this,void 0,void 0,function*(){const t=yield(yield fetch(`//${this.API_HOST}/new_pairing`)).json();this.setState(()=>({currentPairing:t}))})}}e.default=class extends r.Component{constructor(){super(...arguments),this.handleRoute=(t=>{this.currentUrl=t.url})}render(){return Object(r.h)("div",{id:"app"},Object(r.h)(w,{onChange:this.handleRoute},Object(r.h)(O,{path:"/",component:R})))}}},KM04:function(t,e,n){"use strict";!function(){function e(t,e){var n,r,o,i,u=S;for(i=arguments.length;i-- >2;)U.push(arguments[i]);for(e&&null!=e.children&&(U.length||U.push(e.children),delete e.children);U.length;)if((r=U.pop())&&void 0!==r.pop)for(i=r.length;i--;)U.push(r[i]);else"boolean"==typeof r&&(r=null),(o="function"!=typeof t)&&(null==r?r="":"number"==typeof r?r+="":"string"!=typeof r&&(o=!1)),o&&n?u[u.length-1]+=r:u===S?u=[r]:u.push(r),n=o;var a=new N;return a.nodeName=t,a.children=u,a.attributes=null==e?void 0:e,a.key=null==e?void 0:e.key,void 0!==j.vnode&&j.vnode(a),a}function n(t,e){for(var n in e)t[n]=e[n];return t}function r(t,e){null!=t&&("function"==typeof t?t(e):t.current=e)}function o(t){!t.__d&&(t.__d=!0)&&1==M.push(t)&&(j.debounceRendering||P)(i)}function i(){for(var t;t=M.pop();)t.__d&&C(t)}function u(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&a(t,e.nodeName):n||t._componentConstructor===e.nodeName}function a(t,e){return t.__n===e||t.nodeName.toLowerCase()===e.toLowerCase()}function c(t){var e=n({},t.attributes);e.children=t.children;var r=t.nodeName.defaultProps;if(void 0!==r)for(var o in r)void 0===e[o]&&(e[o]=r[o]);return e}function s(t){var e=t.parentNode;e&&e.removeChild(t)}function l(t,e,n,o,i){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)r(n,null),r(o,t);else if("class"!==e||i)if("style"===e){if(o&&"string"!=typeof o&&"string"!=typeof n||(t.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var u in n)u in o||(t.style[u]="");for(var u in o)t.style[u]="number"==typeof o[u]&&!1===R.test(u)?o[u]+"px":o[u]}}else if("dangerouslySetInnerHTML"===e)o&&(t.innerHTML=o.__html||"");else if("o"==e[0]&&"n"==e[1]){var a=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),o?n||t.addEventListener(e,p,a):t.removeEventListener(e,p,a),(t.__l||(t.__l={}))[e]=o}else if("list"!==e&&"type"!==e&&!i&&e in t){try{t[e]=null==o?"":o}catch(t){}null!=o&&!1!==o||"spellcheck"==e||t.removeAttribute(e)}else{var c=i&&e!==(e=e.replace(/^xlink:?/,""));null==o||!1===o?c?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof o&&(c?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),o):t.setAttribute(e,o))}else t.className=o||""}function p(t){return this.__l[t.type](j.event&&j.event(t)||t)}function f(){for(var t;t=T.shift();)j.afterMount&&j.afterMount(t),t.componentDidMount&&t.componentDidMount()}function d(t,e,n,r,o,i){E++||(W=null!=o&&void 0!==o.ownerSVGElement,L=null!=t&&!("__preactattr_"in t));var u=h(t,e,n,r,i);return o&&u.parentNode!==o&&o.appendChild(u),--E||(L=!1,i||f()),u}function h(t,e,n,r,o){var i=t,u=W;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),v(t,!0))),i.__preactattr_=!0,i;var c=e.nodeName;if("function"==typeof c)return w(t,e,n,r);if(W="svg"===c||"foreignObject"!==c&&W,c+="",(!t||!a(t,c))&&(i=function(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.__n=t,n}(c,W),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),v(t,!0)}var s=i.firstChild,l=i.__preactattr_,p=e.children;if(null==l){l=i.__preactattr_={};for(var f=i.attributes,d=f.length;d--;)l[f[d].name]=f[d].value}return!L&&p&&1===p.length&&"string"==typeof p[0]&&null!=s&&void 0!==s.splitText&&null==s.nextSibling?s.nodeValue!=p[0]&&(s.nodeValue=p[0]):(p&&p.length||null!=s)&&_(i,p,n,r,L||null!=l.dangerouslySetInnerHTML),g(i,e.attributes,l),W=u,i}function _(t,e,n,r,o){var i,a,c,l,p,f=t.childNodes,d=[],_={},m=0,g=0,b=f.length,y=0,x=e?e.length:0;if(0!==b)for(var C=0;C<b;C++){var w=f[C],O=w.__preactattr_;null!=(k=x&&O?w._component?w._component.__k:O.key:null)?(m++,_[k]=w):(O||(void 0!==w.splitText?!o||w.nodeValue.trim():o))&&(d[y++]=w)}if(0!==x)for(C=0;C<x;C++){var k;if(p=null,null!=(k=(l=e[C]).key))m&&void 0!==_[k]&&(p=_[k],_[k]=void 0,m--);else if(g<y)for(i=g;i<y;i++)if(void 0!==d[i]&&u(a=d[i],l,o)){p=a,d[i]=void 0,i===y-1&&y--,i===g&&g++;break}p=h(p,l,n,r),c=f[C],p&&p!==t&&p!==c&&(null==c?t.appendChild(p):p===c.nextSibling?s(c):t.insertBefore(p,c))}if(m)for(var C in _)void 0!==_[C]&&v(_[C],!1);for(;g<=y;)void 0!==(p=d[y--])&&v(p,!1)}function v(t,e){var n=t._component;n?O(n):(null!=t.__preactattr_&&r(t.__preactattr_.ref,null),!1!==e&&null!=t.__preactattr_||s(t),m(t))}function m(t){for(t=t.lastChild;t;){var e=t.previousSibling;v(t,!0),t=e}}function g(t,e,n){var r;for(r in n)e&&null!=e[r]||null==n[r]||l(t,r,n[r],n[r]=void 0,W);for(r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||l(t,r,n[r],n[r]=e[r],W)}function b(t,e,n){var r,o=A.length;for(t.prototype&&t.prototype.render?(r=new t(e,n),k.call(r,e,n)):((r=new k(e,n)).constructor=t,r.render=y);o--;)if(A[o].constructor===t)return r.__b=A[o].__b,A.splice(o,1),r;return r}function y(t,e,n){return this.constructor(t,n)}function x(t,e,n,i,u){t.__x||(t.__x=!0,t.__r=e.ref,t.__k=e.key,delete e.ref,delete e.key,void 0===t.constructor.getDerivedStateFromProps&&(!t.base||u?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,i)),i&&i!==t.context&&(t.__c||(t.__c=t.context),t.context=i),t.__p||(t.__p=t.props),t.props=e,t.__x=!1,0!==n&&(1!==n&&!1===j.syncComponentUpdates&&t.base?o(t):C(t,1,u)),r(t.__r,t))}function C(t,e,r,o){if(!t.__x){var i,u,a,s=t.props,l=t.state,p=t.context,h=t.__p||s,_=t.__s||l,m=t.__c||p,g=t.base,y=t.__b,w=g||y,k=t._component,N=!1,U=m;if(t.constructor.getDerivedStateFromProps&&(l=n(n({},l),t.constructor.getDerivedStateFromProps(s,l)),t.state=l),g&&(t.props=h,t.state=_,t.context=m,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(s,l,p)?N=!0:t.componentWillUpdate&&t.componentWillUpdate(s,l,p),t.props=s,t.state=l,t.context=p),t.__p=t.__s=t.__c=t.__b=null,t.__d=!1,!N){i=t.render(s,l,p),t.getChildContext&&(p=n(n({},p),t.getChildContext())),g&&t.getSnapshotBeforeUpdate&&(U=t.getSnapshotBeforeUpdate(h,_));var S,P,R=i&&i.nodeName;if("function"==typeof R){var M=c(i);(u=k)&&u.constructor===R&&M.key==u.__k?x(u,M,1,p,!1):(S=u,t._component=u=b(R,M,p),u.__b=u.__b||y,u.__u=t,x(u,M,0,p,!1),C(u,1,r,!0)),P=u.base}else a=w,(S=k)&&(a=t._component=null),(w||1===e)&&(a&&(a._component=null),P=d(a,i,p,r||!g,w&&w.parentNode,!0));if(w&&P!==w&&u!==k){var W=w.parentNode;W&&P!==W&&(W.replaceChild(P,w),S||(w._component=null,v(w,!1)))}if(S&&O(S),t.base=P,P&&!o){for(var L=t,A=t;A=A.__u;)(L=A).base=P;P._component=L,P._componentConstructor=L.constructor}}for(!g||r?T.push(t):N||(t.componentDidUpdate&&t.componentDidUpdate(h,_,U),j.afterUpdate&&j.afterUpdate(t));t.__h.length;)t.__h.pop().call(t);E||o||f()}}function w(t,e,n,r){for(var o=t&&t._component,i=o,u=t,a=o&&t._componentConstructor===e.nodeName,s=a,l=c(e);o&&!s&&(o=o.__u);)s=o.constructor===e.nodeName;return o&&s&&(!r||o._component)?(x(o,l,3,n,r),t=o.base):(i&&!a&&(O(i),t=u=null),o=b(e.nodeName,l,n),t&&!o.__b&&(o.__b=t,u=null),x(o,l,1,n,r),t=o.base,u&&t!==u&&(u._component=null,v(u,!1))),t}function O(t){j.beforeUnmount&&j.beforeUnmount(t);var e=t.base;t.__x=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?O(n):e&&(null!=e.__preactattr_&&r(e.__preactattr_.ref,null),t.__b=e,s(e),A.push(t),m(e)),r(t.__r,null)}function k(t,e){this.__d=!0,this.context=e,this.props=t,this.state=this.state||{},this.__h=[]}var N=function(){},j={},U=[],S=[],P="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,R=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,M=[],T=[],E=0,W=!1,L=!1,A=[];n(k.prototype,{setState:function(t,e){this.__s||(this.__s=this.state),this.state=n(n({},this.state),"function"==typeof t?t(this.state,this.props):t),e&&this.__h.push(e),o(this)},forceUpdate:function(t){t&&this.__h.push(t),C(this,2)},render:function(){}});var V={h:e,createElement:e,cloneElement:function(t,r){return e(t.nodeName,n(n({},t.attributes),r),arguments.length>2?[].slice.call(arguments,2):t.children)},createRef:function(){return{}},Component:k,render:function(t,e,n){return d(n,t,{},!1,e,!1)},rerender:i,options:j};t.exports=V}()},LUtQ:function(t,e){t.exports={vote:"vote__gi92t",vs:"vs__RFRh3",pairing:"pairing__3__zv"}},VuB8:function(t,e,n){"use strict";var r,o,i;
/*! https://github.com/blockmar/slackdown by @blockmar | MIT license */!function(n,u){o=[],void 0===(i="function"==typeof(r=u)?r.apply(e,o):r)||(t.exports=i)}(0,function(){var t=new RegExp("^\\w?$"),e=new RegExp("<(.+?)>","g"),n=new RegExp("\\*([^\\*]+?)\\*","g"),r=new RegExp("_([^_]+?)_","g"),o=new RegExp("`([^`]+?)`","g"),i=function(t,e){e||(e=0);var n=t.length;return u(t.substr(e,n-e))},u=function(t){return t.split("|")},a=function(t,e,n){n||(n=e,e={});var r="<".concat(t);for(var o in e)e.hasOwnProperty(o)&&(r=r.concat(" ",o,'="',e[o],'"'));return r.concat(">",n,"</",t,">")},c=function(t){var e;switch(t[1].substr(0,1)){case"!":return a("span",{class:"slack-cmd"},i(t[1],1)[0]);case"#":return e=i(t[1],2),a("span",{class:"slack-channel"},1===e.length?e[0]:e[1]);case"@":return e=i(t[1],2),a("span",{class:"slack-user"},1===e.length?e[0]:e[1]);default:return e=i(t[1]),a("a",{href:e[0]},1===e.length?e[0]:e[1])}},s=function(t){return h(t,a("strong",i(t[1])),"*")},l=function(t){return h(t,a("em",i(t[1])),"_")},p=function(t){return h(t,a("code",i(t[1])))},f=function(e){return!t.test(e)},d=function(t,e){return!t||t!==e},h=function(t,e,n){var r=0===t.index,o=t.index===t.input.length-t[0].length;if(!r){var i=t.input.substr(t.index-1,1);r=f(i)&&d(n,i)}if(!o){var u=t.input.substr(t.index+t[0].length,1);o=f(u)&&d(n,u)}return!(!r||!o)&&e};return{parse:function(t){if("string"==typeof t)for(var i=[{p:e,cb:c},{p:n,cb:s},{p:r,cb:l},{p:o,cb:p}],u=0;u<i.length;u++)for(var a,f=i[u],d=t;null!==(a=f.p.exec(d));){var h=f.cb(a);h&&(t=t.replace(a[0],h))}return t}}})},pwNi:function(t,e,n){"use strict";var r=n("KM04");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register(n.p+"sw.js");var o=function(t){return t&&t.default?t.default:t};if("function"==typeof o(n("JkW7"))){var i=document.body.firstElementChild,u=function(){var t=o(n("JkW7"));i=(0,r.render)((0,r.h)(t),document.body,i)};0,u()}},rq4c:function(t,e){}});
"use strict";(self.webpackChunklearnings=self.webpackChunklearnings||[]).push([[166],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9982:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={slug:"providing-quality-support-saas",title:"Providing quality support to SaaS customers",authors:"jharrison",tags:["saas","support"]},u=void 0,l={permalink:"/blog/providing-quality-support-saas",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-04-19-setting-up-a-support-channel/index.md",source:"@site/blog/2022-04-19-setting-up-a-support-channel/index.md",title:"Providing quality support to SaaS customers",description:"Introduction",date:"2022-04-19T00:00:00.000Z",formattedDate:"April 19, 2022",tags:[{label:"saas",permalink:"/blog/tags/saas"},{label:"support",permalink:"/blog/tags/support"}],readingTime:1.32,truncated:!1,authors:[{name:"James Harrison",title:"Solution Architect",url:"https://jharrison.io",imageURL:"https://github.com/endiliey.png",key:"jharrison"}],frontMatter:{slug:"providing-quality-support-saas",title:"Providing quality support to SaaS customers",authors:"jharrison",tags:["saas","support"]}},c={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",children:[{value:"Key Requirements",id:"key-requirements",children:[],level:3},{value:"Choosing a Platform",id:"choosing-a-platform",children:[],level:3}],level:2}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"At work we currently use Slack as a support channel. Our customers are invited to private channels and can chat to us 24x7. This is fantastic for realtime troubleshooting and quick resolution of issues, but it doesn't scale well and can be a huge overhead on the engineering team. It is also difficult to put in place any kind of triaging of issues. We end up helping customers with anything, regardless of whether or not it's a platform issue or an implementation question. I've been tasked with setting up proper support channels for our customers that can scale to thousands of users and reduce the burden on our engineering team."),(0,o.kt)("h3",{id:"key-requirements"},"Key Requirements"),(0,o.kt)("p",null,"A successful implementation would achieve the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Simple form for raising tickets, including custom field capture and screenshots"),(0,o.kt)("li",{parentName:"ul"},"Help article suggestions to reduce number of tickets raised in the first place"),(0,o.kt)("li",{parentName:"ul"},"Help centre articles & categories"),(0,o.kt)("li",{parentName:"ul"},"SLA management for first response and next reply times"),(0,o.kt)("li",{parentName:"ul"},"Integration: Between support platform and engineering platform (Azure Devops)"),(0,o.kt)("li",{parentName:"ul"},"Integration: Raise tickets from Slack messages"),(0,o.kt)("li",{parentName:"ul"},"Integration: Notify Slack channels of new tickets and comments on tickets")),(0,o.kt)("h3",{id:"choosing-a-platform"},"Choosing a Platform"),(0,o.kt)("p",null,"I didn't spend much time assessing the merits of different platforms. Our requirements are fairly basic, and I have experience with Zendesk already so it made sense to use it. I looked briefly at the various plans and feature limitations of each to make sure we wouldn't end up paying a fortune. The only feature that might push us into a higher bracket would be SLA management."))}f.isMDXComponent=!0}}]);
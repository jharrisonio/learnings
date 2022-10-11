"use strict";(self.webpackChunklearnings=self.webpackChunklearnings||[]).push([[406],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(t),d=i,m=g["".concat(p,".").concat(d)]||g[d]||c[d]||a;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1423:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return g}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={sidebar_position:1},p="NX Plugin Development",s={unversionedId:"nx/nx-plugin-development",id:"nx/nx-plugin-development",title:"NX Plugin Development",description:"This page describes how to create plugins to extend NX's functionality. Nx plugins are npm packages that contain generators and executors to extend a Nx workspace. Generators are blueprints to create new files from templates, and executors run those files. These plugins also update the nx.json when generating new libs or apps.",source:"@site/docs/nx/nx-plugin-development.md",sourceDirName:"nx",slug:"/nx/nx-plugin-development",permalink:"/docs/nx/nx-plugin-development",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nx/nx-plugin-development.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"NX Basics",permalink:"/docs/nx/nx-basics"},next:{title:"NX Targets",permalink:"/docs/nx/nx-targets"}},u=[{value:"Creating a Plugin",id:"creating-a-plugin",children:[{value:"New Workspace",id:"new-workspace",children:[],level:3},{value:"Existing Workspace",id:"existing-workspace",children:[],level:3},{value:"Adding more generators to the plugin",id:"adding-more-generators-to-the-plugin",children:[],level:3},{value:"Creating a &#39;preset&#39; generator",id:"creating-a-preset-generator",children:[],level:3}],level:2},{value:"Building &amp; Testing Plugins",id:"building--testing-plugins",children:[{value:"Building the plugin",id:"building-the-plugin",children:[],level:3},{value:"Testing the plugin",id:"testing-the-plugin",children:[],level:3},{value:"Publishing to NPM",id:"publishing-to-npm",children:[],level:3}],level:2}],c={toc:u};function g(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nx-plugin-development"},"NX Plugin Development"),(0,a.kt)("p",null,"This page describes how to create plugins to extend NX's functionality. Nx plugins are npm packages that contain generators and executors to extend a Nx workspace. Generators are blueprints to create new files from templates, and executors run those files. These plugins also update the nx.json when generating new libs or apps."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://nx.dev/packages/nx-plugin"},"documentation")),(0,a.kt)("h2",{id:"creating-a-plugin"},"Creating a Plugin"),(0,a.kt)("p",null,"Plugins can either be created in a blank workspace or added to an existing workspace."),(0,a.kt)("h3",{id:"new-workspace"},"New Workspace"),(0,a.kt)("p",null,"Call the create-nx-plugin CLI tool, specify a workspace name and plugin name.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"$ npx create-nx-plugin [workspaceName] --pluginName [pluginName]"),"  "),(0,a.kt)("h3",{id:"existing-workspace"},"Existing Workspace"),(0,a.kt)("p",null,"Install the @nrwl/nx-plugin dependency using NPM and then use the provided plugin generator.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"$ npm i @nrwl/nx-plugin"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"$ nx g @nrwl/nx-plugin:plugin [pluginName]")),(0,a.kt)("h3",{id:"adding-more-generators-to-the-plugin"},"Adding more generators to the plugin"),(0,a.kt)("p",null,"Plugins are created with a basic generator and executor. To add another generator, use this command:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"$ nx g @nrwl/nx-plugin:generator [generatorName] --project=[pluginName]")),(0,a.kt)("h3",{id:"creating-a-preset-generator"},"Creating a 'preset' generator"),(0,a.kt)("p",null,"A Preset is a customization option which you provide when creating a new workspace. TS, Node, React are some internal presets that Nx provides by default."),(0,a.kt)("p",null,"To create a preset, follow the steps above but add a generator named 'preset':",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"$ nx g @nrwl/nx-plugin:generator preset --project=[pluginName]")),(0,a.kt)("h2",{id:"building--testing-plugins"},"Building & Testing Plugins"),(0,a.kt)("h3",{id:"building-the-plugin"},"Building the plugin"),(0,a.kt)("p",null,"You can build a plugin in the same way other NX packages are built:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"$ nx build [pluginName]")),(0,a.kt)("p",null,"All built files are put into the ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder in the root of the monorepo."),(0,a.kt)("h3",{id:"testing-the-plugin"},"Testing the plugin"),(0,a.kt)("p",null,"Plugins come with Unit and E2E tests out of the box.\nUnit tests can be run with the following command:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"$ nx test [pluginName]")),(0,a.kt)("p",null,"E2E test can be run with this command:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"$ nx e2e [pluginName-e2e]")),(0,a.kt)("h3",{id:"publishing-to-npm"},"Publishing to NPM"),(0,a.kt)("p",null,"See the page on ",(0,a.kt)("a",{parentName:"p",href:"/docs/node-js/nodejs"},"Running a Local NPM Registry"),"\nTo easily increment the version number and perform a build, edit ",(0,a.kt)("inlineCode",{parentName:"p"},"project.json")," to include targets like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ... other project.json properties here\n  "targets": {\n    // .. other targets here, e.g. \'build\'\n\n    // the \'bump\' target increments the NPM version number, e.g. 0.0.1 -> 0.0.2\n    "bump": {\n      "executor": "nx:run-commands",\n      "options": {\n        "cwd": "./packages/nx-vast",\n        "commands": [\n          "npm version patch --force"\n        ]\n      }\n    },\n\n    // the \'publish\' target changes directories to the \'dist\' folder and publishes the built package to a local repository running Verdaccio. It also ensures the \'bump\' and \'build\' targets are run first (in that order)\n    "publish": {\n      "executor": "nx:run-commands",\n      "options": {\n        "cwd": "./dist/packages/nx-vast",\n        "commands": [\n          "npm publish --tag=latest --registry=http://localhost:4873"\n        ]\n      },\n      "dependsOn": ["bump", "build"]\n    }\n    }\n  }\n}\n')))}g.isMDXComponent=!0}}]);
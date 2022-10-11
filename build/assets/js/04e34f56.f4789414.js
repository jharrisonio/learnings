"use strict";(self.webpackChunklearnings=self.webpackChunklearnings||[]).push([[775],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(g,a(a({ref:n},c),{},{components:t})):r.createElement(g,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},27:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],s={},l="Basic NodeJS Project",p={unversionedId:"programming/basic-nodejs-cli",id:"programming/basic-nodejs-cli",title:"Basic NodeJS Project",description:"This page documents how to set up a basic NodeJS project, the starting point for many examples in this documentation.",source:"@site/docs/programming/basic-nodejs-cli.md",sourceDirName:"programming",slug:"/programming/basic-nodejs-cli",permalink:"/docs/programming/basic-nodejs-cli",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/programming/basic-nodejs-cli.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Abstract Syntax Trees - AST",permalink:"/docs/programming/abstract-syntax-trees"},next:{title:"Basic NodeJS Project",permalink:"/docs/programming/basic-nodejs-setup"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Initialise the project",id:"initialise-the-project",children:[],level:3},{value:"Install and configure dependencies",id:"install-and-configure-dependencies",children:[],level:3},{value:"Creating an entrypoint",id:"creating-an-entrypoint",children:[],level:3},{value:"Debugging",id:"debugging",children:[],level:3}],d={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basic-nodejs-project"},"Basic NodeJS Project"),(0,o.kt)("p",null,"This page documents how to set up a basic NodeJS project, the starting point for many examples in this documentation."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"NodeJS")," installed")),(0,o.kt)("h3",{id:"initialise-the-project"},"Initialise the project"),(0,o.kt)("p",null,"Create an empty folder and navigate inside.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"$ mkdir ts-compiler-example && cd ts-compiler-example"),"  "),(0,o.kt)("p",null,"Initialise a package.json file (defaults are fine).",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"$ npm init"),"  "),(0,o.kt)("h3",{id:"install-and-configure-dependencies"},"Install and configure dependencies"),(0,o.kt)("p",null,"Install a few dev dependencies.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"$ npm i --save-dev typescript @tsconfig/node14 @types/node nodemon ts-node"),"  "),(0,o.kt)("p",null,"The dependencies installed in this step are as follows:  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"typescript")," Use for writing strongly typed code and compiling it to Javascript"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"@tsconfig/node14")," A library that provides a default ",(0,o.kt)("inlineCode",{parentName:"li"},"tsconfig")," for working with Node v14.  "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"@types/node")," Typescript definitions for the NodeJS API"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"nodemon")," A package that watches for file changes and reloads our NodeJS server.  "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"ts-node")," Typescript execution support - used by Nodemon for running Typescript files.")),(0,o.kt)("p",null,"We need to configure Typescript to compile our code, so we will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file.",(0,o.kt)("br",{parentName:"p"}),"\n","Documentation for this file can be found ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig"},"here"),"."),(0,o.kt)("p",null,"Set up a basic folder structure where ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," will be our source files, and ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," is where Typescript will output the compiled Javascript files.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"$ mkdir src dist")),(0,o.kt)("p",null,"Create a file in the root of the project called ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),".  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'    {\n      "extends": "@tsconfig/node14/tsconfig.json",\n      "compilerOptions": {\n        "outDir": "dist",\n        "sourceMap": true\n      },\n      "include": ["src/**/*"],\n      "exclude": ["node_modules", "**/*.spec.ts"]\n    }\n')),(0,o.kt)("p",null,"Configure Nodemon to run the NodeJS server. Update ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," with the following ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," keys:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'    {\n        "type": "module",\n        ...\n        "scripts": {\n            "start": "nodemon src/app.ts"\n        }\n    }\n')),(0,o.kt)("h3",{id:"creating-an-entrypoint"},"Creating an entrypoint"),(0,o.kt)("p",null,"Paste the following code into ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app.ts"),".  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},"    import http from 'http';\n\n    const hostname = '127.0.0.1';\n    const port = 3000;\n\n    const server = http.createServer((req, res) => {\n    res.statusCode = 200;\n    res.setHeader('Content-Type', 'text/plain');\n    res.end('Hello World!');\n    });\n\n    server.listen(port, hostname, () => {\n    console.log(`Server running at http://${hostname}:${port}/`);\n    });\n")),(0,o.kt)("p",null,"Open up your browser to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/")," and verify everything is working!"),(0,o.kt)("h3",{id:"debugging"},"Debugging"),(0,o.kt)("p",null,"Use the following VSCode launch config to allow debugging of Typescript files directly without needing to compile."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".vscode/launch.json"',title:'".vscode/launch.json"'},'    {\n        // Use IntelliSense to learn about possible attributes.\n        // Hover to view descriptions of existing attributes.\n        // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387\n        "version": "0.2.0",\n        "configurations": [\n            {\n                "name": "Typescript App",\n                "type": "node",\n                "request": "launch",\n                "runtimeExecutable": "node",\n                "runtimeArgs": ["--nolazy", "-r", "ts-node/register/transpile-only"],\n                "args": ["src/app.ts"],\n                "cwd": "${workspaceRoot}",\n                "internalConsoleOptions": "openOnSessionStart",\n                "skipFiles": [\n                    "<node_internals>/**"\n                ]\n            }\n        ]\n    }\n')))}u.isMDXComponent=!0}}]);
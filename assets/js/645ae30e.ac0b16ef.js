"use strict";(self.webpackChunklearnings=self.webpackChunklearnings||[]).push([[2],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(h,o(o({ref:n},c),{},{components:t})):r.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1893:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:1},o="Typescript Parsing",s={unversionedId:"js-ts/ts-parsing",id:"js-ts/ts-parsing",title:"Typescript Parsing",description:"This page documents a sample project that picks up a Typescript file, parses it and outputs the AST.",source:"@site/solutions/js-ts/ts-parsing.md",sourceDirName:"js-ts",slug:"/js-ts/ts-parsing",permalink:"/solutions/js-ts/ts-parsing",draft:!1,editUrl:"https://github.com/jharrisonio/jharrisonio.github.io/tree/master/solutions/js-ts/ts-parsing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Typescript Compiler",permalink:"/solutions/js-ts/ts-compiler"},next:{title:"Typescript Debugging with VSCode",permalink:"/solutions/js-ts/ts-debugging"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Sample Git Repo",id:"sample-git-repo",level:3},{value:"Writing code to parse a Typescript file",id:"writing-code-to-parse-a-typescript-file",level:3},{value:"Running the app",id:"running-the-app",level:3}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"typescript-parsing"},"Typescript Parsing"),(0,i.kt)("p",null,"This page documents a sample project that picks up a Typescript file, parses it and outputs the ",(0,i.kt)("a",{parentName:"p",href:"/solutions/general/abstract-syntax-trees"},"AST"),"."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/solutions/js-ts/basic-nodejs-setup"},"Basic NodeJS Project")," created"),(0,i.kt)("li",{parentName:"ol"},"Move ",(0,i.kt)("inlineCode",{parentName:"li"},"typescript")," from a dev-dependency to a dependency"),(0,i.kt)("li",{parentName:"ol"},"Read about the ",(0,i.kt)("a",{parentName:"li",href:"/solutions/js-ts/ts-compiler"},"Typescript Compiler"))),(0,i.kt)("h3",{id:"sample-git-repo"},"Sample Git Repo"),(0,i.kt)("p",null,"The code on this page can be found in this repo: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jharrisonio/sample-ts-parsing"},"jharrisonio/sample-ts-parsing")),(0,i.kt)("h3",{id:"writing-code-to-parse-a-typescript-file"},"Writing code to parse a Typescript file"),(0,i.kt)("p",null,"Create a sample typescript file to parse at ",(0,i.kt)("inlineCode",{parentName:"p"},"src/sample-files/index.ts"),".  "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This code doesn't get run, so it doesn't matter if there are errors. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"myModule")," doesn't exist. This file will be read and parsed into an AST by our program.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { getProduct } from './myModule';\nlet a = 10;\nlet b = 4;\n\nlet product = getProduct();\n")),(0,i.kt)("p",null,"Create the following file at ",(0,i.kt)("inlineCode",{parentName:"p"},"src/ts-parser.ts"),".  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// src/ts-parser.ts\n\nimport * as ts from 'typescript';\nimport * as path from \"path\";\ntype TreeNode = {\n    name: string;\n    kind: string;\n    type?: string;\n    children: TreeNode[];\n}\n\nexport class Parser {\n    sourceFile: ts.SourceFile | undefined;\n    program: ts.Program;\n    typeChecker: ts.TypeChecker;\n    constructor(file: string) {\n        let filename = path.join(__dirname, file);\n        this.program = ts.createProgram(\n            [filename],\n            {}\n        );\n        this.sourceFile = this.program.getSourceFile(filename);\n        this.typeChecker = this.program.getTypeChecker();\n    }\n\n    getTree() {\n        let tree: TreeNode = {\n            name: 'root',\n            kind: ts.SyntaxKind.SourceFile,\n            children: []\n        };\n        if (this.sourceFile !== undefined) {\n            tree = this.getChildren(this.sourceFile);\n        }\n        return tree;\n    }\n\n    getChildren(node: ts.Node): TreeNode {\n        let tree: TreeNode = {\n            name: node.getText(),\n            kind: ts.SyntaxKind[node.kind],\n            children: []\n        };\n\n        // if (node.kind === ts.SyntaxKind.VariableDeclaration)  {\n        console.log(`Kind: ${ts.SyntaxKind[node.kind]}`)\n        if (node.kind === ts.SyntaxKind.VariableDeclaration) {\n            let type = this.typeChecker.getTypeAtLocation(node);\n            tree.type = this.typeChecker.typeToString(type);\n        }\n        // }\n\n        // Loop over all child nodes\n        node.forEachChild(child => {\n            tree.children.push(this.getChildren(child));\n        });\n        \n        return tree;\n    }\n}\n")),(0,i.kt)("p",null,"Update ",(0,i.kt)("inlineCode",{parentName:"p"},"src/app.ts")," with the following:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// src/app.ts\n\nimport http from 'http';\nimport { Parser } from './ts-parser';\n\nconst hostname = '127.0.0.1';\nconst port = 8080;\n\nconst server = http.createServer((req, res) => {\n    const parser = new Parser('./sample-files/index.ts');\n    res.statusCode = 200;\n    res.setHeader('Content-Type', 'application/json');\n    res.end(JSON.stringify(parser.getTree(), null, 2));\n});\n\nserver.listen(port, hostname, () => {\n    console.log(`Server running at http://${hostname}:${port}/`);\n});\n")),(0,i.kt)("h3",{id:"running-the-app"},"Running the app"),(0,i.kt)("p",null,"Open up a terminal and run:",(0,i.kt)("br",{parentName:"p"}),"\n","$ npm run start"),(0,i.kt)("p",null,"Load up the site in the browser: ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")),(0,i.kt)("p",null,"Observe the following tree structure:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "import { getProduct } from \'./myModule\';\\nlet a = 10;\\nlet b = 4;\\n\\nlet product = getProduct();",\n  "kind": "SourceFile",\n  "children": [\n    {\n      "name": "import { getProduct } from \'./myModule\';",\n      "kind": "ImportDeclaration",\n      "children": [\n        {\n          "name": "{ getProduct }",\n          "kind": "ImportClause",\n          "children": [\n            {\n              "name": "{ getProduct }",\n              "kind": "NamedImports",\n              "children": [\n                {\n                  "name": "getProduct",\n                  "kind": "ImportSpecifier",\n                  "children": [\n                    {\n                      "name": "getProduct",\n                      "kind": "Identifier",\n                      "children": []\n                    }\n                  ]\n                }\n              ]\n            }\n          ]\n        },\n        {\n          "name": "\'./myModule\'",\n          "kind": "StringLiteral",\n          "children": []\n        }\n      ]\n    },\n    {\n      "name": "let a = 10;",\n      "kind": "FirstStatement",\n      "children": [\n        {\n          "name": "let a = 10",\n          "kind": "VariableDeclarationList",\n          "children": [\n            {\n              "name": "a = 10",\n              "kind": "VariableDeclaration",\n              "children": [\n                {\n                  "name": "a",\n                  "kind": "Identifier",\n                  "children": []\n                },\n                {\n                  "name": "10",\n                  "kind": "FirstLiteralToken",\n                  "children": []\n                }\n              ],\n              "type": "number"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      "name": "let b = 4;",\n      "kind": "FirstStatement",\n      "children": [\n        {\n          "name": "let b = 4",\n          "kind": "VariableDeclarationList",\n          "children": [\n            {\n              "name": "b = 4",\n              "kind": "VariableDeclaration",\n              "children": [\n                {\n                  "name": "b",\n                  "kind": "Identifier",\n                  "children": []\n                },\n                {\n                  "name": "4",\n                  "kind": "FirstLiteralToken",\n                  "children": []\n                }\n              ],\n              "type": "number"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      "name": "let product = getProduct();",\n      "kind": "FirstStatement",\n      "children": [\n        {\n          "name": "let product = getProduct()",\n          "kind": "VariableDeclarationList",\n          "children": [\n            {\n              "name": "product = getProduct()",\n              "kind": "VariableDeclaration",\n              "children": [\n                {\n                  "name": "product",\n                  "kind": "Identifier",\n                  "children": []\n                },\n                {\n                  "name": "getProduct()",\n                  "kind": "CallExpression",\n                  "children": [\n                    {\n                      "name": "getProduct",\n                      "kind": "Identifier",\n                      "children": []\n                    }\n                  ]\n                }\n              ],\n              "type": "any"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      "name": "",\n      "kind": "EndOfFileToken",\n      "children": []\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);
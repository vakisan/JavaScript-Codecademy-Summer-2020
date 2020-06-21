/**

Updates to browsers are very important for two major reasons:

to provide sercuity updates to prevent malicous attacks while users use browsers.
the other reason is to update unsupported languages syntax.


the latter reason has been a major issue in the near past during 2015 when ES6 javascript was released by ECMA International.
this update added new features that many developers desired to improve their work however, many older browsers will not be able to support this
newer syntax of javascript. ES6 is now supported on many updated browsers but there will remain olders browser support hat is lacking.

some tools have ben important in determining whether ES6 syntax should be used for example different browsers lack different features which
which means that a database that can provide the information neeeded to check compatibility such as caniuses.com is super useful.

Babel is a javascript library which focusses on converting new syntax which may be unsupported and converts it into the older more supported syntax.

**/

var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax changed from const to var

var sauce = "Eggs and cheese"; // ES6 syntax let to var

// Template literals, like the one below, were introduced in ES6
var carbonara = 'You can make carbonara with ' + pasta + ',' + meat + ',' + 'and a sauce made with ' + sauce + '.'; // string literal removed and concatenation is used.

/* To make it easier to convert from ES6 to ES5 for compatibility issues it is much easier to use a transpiler.
these will convert code from a language to another language eg from ES6 to ES5;

to do this:

we need to pass ES6 code to a transpiler.

one way to achieve this is using Babel:
in temrinal we need to install babel on the pc:
using command

npm install babel-cli
npm install babel-preset-env
npm run build

we also need to set up node package manager (NPM)
developers use npm to access and manage node packages. these packages are directories that contain js code by other devs.

to set up babel

1. place js file with ES6 in a src folder.
2. run npm init - this will create a new package,json file in root directory. this will contain metadata such as author title... lists of node packages needed and key value pairs for command line scripts
3.  npm install babel-cli -D
    npm install babel-preset-env -D
4. touch .babelrc
5. add  {
            "presets": ["env"] // tells babel to transpile from ES6+
        }
6. inside package.json
    "scripts": {
        "test": "ls",
        "build": "babel src -d lib"
     },
7. npm run build

*/
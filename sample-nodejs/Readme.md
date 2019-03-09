## About
A sample application to show how to use EditControl from a nodejs application.

## Run
Open index.html in browser.

## Build
cd to root folder.  
run "npm install" to install everything.  
run "npm run build" to build the application.    
  
"npm build" uses webpack to bundle the application with all is dependencies and compress the bundle.
The dependencies are
* pepjs  - A polyfill to provide pointer support on old browser. Forced into the bundle by adding it as as an entry in webpack.config.js.
* babylonjs
* babylonjs-editcontrol


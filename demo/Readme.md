## About
A demo application written in Typescript to demonstrate various features of EditControl.

## Run
Open Demo.html in browser.

## Build
cd to root folder.  
run "npm install" to install everything.  
run "npm run build" to build the demo.    
  
"npm build" uses webpack to compile the typescript application, bundle the application with all is dependencies, and compress the bundle.
The dependencies are
* pepjs  - A polyfill to provide pointer support on old browser. Forced into the bundle by adding it as as an entry in webpack.config.js.
* babylonjs
* earcut - EditControl uses the babylon class "PolygonMeshBuilder" which needs earcut.
* babylonjs-editcontrol


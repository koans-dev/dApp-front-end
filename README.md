# Getting Started with Search Page App

 ## `npm install`
 Install node moodule in the development mode.\ 
 `npm intall`
 ## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Polyfill node core modules in Webpack 5 and React 18`
React-app-rewired is a package that makes it simple for developers to change the webpack configuration file and correct the polyfill node core module error.
1. Install react-app-rewired
`npm install --save-dev react-app-rewired`
2. Install missing dependencies
 Install these missing dependencies:

- crypto-browserify
- stream-browserify
- assert
- stream-http
- https-browserify
- os-browserify
- url

` 
npm install --save-dev crypto-browserify stream-browserify assert stream-http https-browserify os-browserify url buffer process
`

3. Override the create-react-app webpack config file

In the root folder of your project, create a new file called config-overrides.js, and add the following code to it:

```
const webpack = require('webpack'); 
module.exports = function override(config) { 
		const fallback = config.resolve.fallback || {}; 
		Object.assign(fallback, { 
    	"crypto": require.resolve("crypto-browserify"), 
      "stream": require.resolve("stream-browserify"), 
      "assert": require.resolve("assert"), 
      "http": require.resolve("stream-http"), 
      "https": require.resolve("https-browserify"), 
      "os": require.resolve("os-browserify"), 
      "url": require.resolve("url") 
      }) 
   config.resolve.fallback = fallback; 
   config.plugins = (config.plugins || []).concat([ 
   	new webpack.ProvidePlugin({ 
    	process: 'process/browser', 
      Buffer: ['buffer', 'Buffer'] 
    }) 
   ]) 
   return config; }
```
   

4. Override package.json to include the webpack configuration
Replace react-scripts with react-app-rewired scripts for the three following scripts fields to update the webpack configuration:
- start
- build
- test

```
"scripts": { 
	"start": "react-app-rewired start", 
  "build": "react-app-rewired build", 
  "test": "react-app-rewired test", 
  "eject": "react-scripts eject" 
 },
```
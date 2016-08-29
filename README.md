# IBBWebsite

### Quick Start

#### 1. Get the latest version

You can start by cloning the latest version on your
local machine by running:

```shell
$ git clone https://github.com/seathony/webpackStarter.git
$ cd webpackStarter
```

#### 2. Run `npm install`

This will install both run-time project dependencies and developer tools listed
in [package.json](../package.json) file.

#### 3. Run `npm start`

This command will build the app from the source files (`/src`) into the output
`/build` folder. As soon as the initial build completes, it will start the
Node.js server with 
[HMR](https://webpack.github.io/docs/hot-module-replacement) on top of it.

> [http://localhost:8080/](http://localhost:8080/) — Node.js server <br>

Now you can open your web app in a browser, on mobile devices and start
hacking. Whenever you modify any of the source files inside the `/app` folder,
the module bundler ([Webpack](http://webpack.github.io/)) will recompile the
app on the fly and refresh all the connected browsers.

### Tech

* [ESLint](http://eslint.org) to maintain a consistent code style
* [Material-UI](http://www.material-ui.com) A Set of React Components that Implement Google's Material Design
* [Flexbox-Grid](http://flexboxgrid.com) A grid system based on the flex display property
* [Radium](http://stack.formidable.com/radium) A set of tools to manage inline styles on React elements

# Mithril Starter Project

Project setup with:
* [Mithril 1.x](https://github.com/lhorie/mithril.js/tree/rewrite/docs)
* [Rollup](http://rollupjs.org) for optimized module bundles
* [Babel](http://babeljs.io) for transpiling es2015 to es5
* [LiveReload](https://github.com/livereload/livereload-js) to view code changes directly in the browser
* [Jest](https://facebook.github.io/jest/) to run tests and create component snapshots
* [ESLint](http://eslint.org) to find syntax errors and get a standardized coding style

A couple of styles are included using [Tachyon](http://tachyons.io/), but these can simply be replaced with your own CSS solution.



## Setup

Install dependencies
```
npm install
```



## Build and watch

Script commands defined in `package.json`:

* `build`: creates a minified bundle in `build/js/`
* `watch`: starts a local webserver; creates a bundle in `build/js/` that is being updated with each code change; calls LiveReload to refresh the browser after code changes are built

Call `npm run watch` and open a web page at [localhost:8080](http://localhost:8080/). The port number is configurable in `package.json`.

When making changes, the terminal will show lint errors, if any.



## Testing

[Jest](https://facebook.github.io/jest/) finds 'spec' files inside directories named `__test__` (see `app/page/__tests__/index.spec.js` for an example). During a test run, snapshots are created using helper function `matchSnapshot(component)`.

* `npm run test`: starts a test run (only useful to know if tests are passing)
* `npm run test:watch`: starts an interactive session with the option to evaluate and update existing snapshots

To run tests alongside the `watch` command, use a separate terminal window.



## Configuration files

* `rollup.config.js`: Rollup configuration
* `.babelrc`: Babel configuration
* `.eslintrc.json`: ESLint configuration



## Known issues

### Upstream issue with wrong import when using watch

[rollup-plugin-node-resolve/issues/66](https://github.com/rollup/rollup-plugin-node-resolve/issues/66)

When a wrong import is written, for instance:
```
import page from '../page';
```
instead of:
```
import page from './page';
```
`rollup-plugin-node-resolve` bails and stalls the watch.

Solution: use `npm run build` until you no longer see import errors. Then continue using `npm run watch`.



## MIT License

Copyright (c) 2016 Arthur Clemens <arthur@visiblearea.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

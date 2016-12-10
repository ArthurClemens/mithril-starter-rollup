# Mithril Starter Project with Rollup, Babel, LiveReload and ESLint

Project setup with:
* [Mithril 1.x](https://github.com/lhorie/mithril.js/tree/rewrite/docs)
* [Rollup](http://rollupjs.org)
* [Babel](http://babeljs.io)
* [LiveReload](https://github.com/livereload/livereload-js)
* [ESLint](http://eslint.org)

A couple of styles are included using [Tachyon](http://tachyons.io/), but these can simply be replaced with your own CSS solution.


## Setup

Install dependencies
```
npm install
```


## Build and watch

Script commands defined in `package.json`:

* `build`: creates a minified bundle in `build/js/`
* `watch`: starts a local webserver at port `8080`; creates a bundle in `build/js/` that is being updated with each code change; calls LiveReload to refresh the browser after code changes are built

`npm run watch` and open a web page at [localhost:8080](http://localhost:8080/) 

When making changes, watch the terminal for any lint errors.


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



import babel from "rollup-plugin-babel";
import eslint from "rollup-plugin-eslint";
import resolve from "rollup-plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";

const env = process.env; // eslint-disable-line no-undef
const isProduction = env.NODE_ENV === "production";
const isDevelopment = env.NODE_ENV === "development";
const entryFile = "./app/index.js";
const buildDir = "./build/";
const serverPort = env.PORT || 8080;

export default {
  entry: entryFile,
  dest: `${buildDir}/js/bundle.js`,
  format: "iife",
  sourceMap: true,
  plugins: [

    // Resolve libs in node_modules
    resolve({
      jsnext: true
    }),

    // Convert CommonJS modules to ES6, so they can be included in a Rollup bundle
    commonjs({
      include: "node_modules/**"
    }),

    // Linter
    eslint(),

    // Babel
    babel({
      exclude: "node_modules/**"
    }),

    // Compress bundle
    isProduction && uglify({
      mangle: true,
      compress: true
    }),

    // Local webserver
    isDevelopment && serve({
      contentBase: buildDir,
      port: serverPort
    }),

    // LiveReload
    isDevelopment && livereload({
      watch: buildDir
    })
  ]
};
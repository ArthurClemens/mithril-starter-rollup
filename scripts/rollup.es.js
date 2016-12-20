/*
Build an ES2015 module with syntax features that node supports
https://github.com/rollup/rollup/wiki/jsnext:main
*/
import { pkg, createConfig } from "./rollup.base.js";

const includeDepencies = true; // Use `false` if you are creating a library

const baseConfig = createConfig({ includeDepencies });
const esConfig = Object.assign({}, baseConfig, {
  dest: pkg["jsnext:main"],
  format: "es"
});

export default esConfig;


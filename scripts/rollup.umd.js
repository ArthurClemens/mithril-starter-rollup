/*
Build to an Universal Module Definition
*/
import { pkg, createConfig } from "./rollup.base.js";
import uglify from "rollup-plugin-uglify";

const includeDepencies = true; // Use `false` if you are creating a library, or if you are including external script in html

const baseConfig = createConfig({ includeDepencies });
const targetConfig = Object.assign({}, baseConfig, {
  dest: pkg.main,
  format: "umd",
  sourceMap: true
});

targetConfig.plugins.push(uglify());

export default targetConfig;


/*
Builds a UMD bundle
*/
import { pkg, createConfig } from "./rollup.base.js";
import uglify from "rollup-plugin-uglify";

const env = process.env; // eslint-disable-line no-undef
const includeDepencies = !!env.DEPS || false; // Use `false` if you are creating a library, or if you are including external script in html

const baseConfig = createConfig({ includeDepencies });
const umdConfig = Object.assign({}, baseConfig, {
  dest: pkg.main,
  format: "umd",
  sourceMap: true
});

umdConfig.plugins.push(uglify());

export default umdConfig;


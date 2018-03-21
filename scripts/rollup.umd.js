/*
Build to an Universal Module Definition
*/
import { pkg, createConfig } from "./rollup.base.js";
import uglify from "rollup-plugin-uglify";

const env = process.env; // eslint-disable-line no-undef
const includeDepencies = !!parseInt(env.DEPS, 10) || false; // Use `false` if you are creating a library, or if you are including external script in html
const createSourceMap = env.SOURCEMAP !== undefined
  ? !!parseInt(env.SOURCEMAP, 10)
  : true;

const baseConfig = createConfig({ includeDepencies });
const targetConfig = Object.assign({}, baseConfig, {
  output: Object.assign(
    {},
    baseConfig.output,
    {
      file: `${env.DEST || pkg.main}.js`,
      format: "umd",
      sourcemap: createSourceMap
    }
  )
});


targetConfig.plugins.push(uglify());

export default targetConfig;


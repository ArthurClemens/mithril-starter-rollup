/*
Build to an Universal Module Definition
*/
import { pkg, createConfig } from "./rollup.base.js";
import { terser } from "rollup-plugin-terser";

const env = process.env;
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

targetConfig.plugins.push(terser());

export default targetConfig;

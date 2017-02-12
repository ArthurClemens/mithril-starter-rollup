/*
Builds a UMD bundle that is updated with each file change
*/
import umdConfig from "./rollup.umd.js";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";

const env = process.env; // eslint-disable-line no-undef

const watchDir = env.WATCH_DIR;
if (!watchDir) {
  throw("Missing WATCH_DIR: no watch directory");
}

const serverPort = parseInt(env.PORT, 10);
if (!serverPort) {
  throw("Missing PORT: no http server port");
}

const targetConfig = Object.assign({}, umdConfig);

targetConfig.plugins.push(
  serve({
    contentBase: watchDir,
    port: serverPort
  })
);

targetConfig.plugins.push(
  livereload({
    watch: watchDir
  })
);

export default targetConfig;


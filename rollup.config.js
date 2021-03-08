/* eslint-disable import/no-anonymous-default-export */
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";
import copy from "rollup-plugin-copy";

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs", sourcemap: true },
    { file: pkg.module, format: "esm", sourcemap: true }
  ],
  plugins: [
    copy({
      targets: [{ src: "./LICENSE", dest: "dist" }]
    }),
    peerDepsExternal(),
    babel({
      exclude: "node_modules/**"
    }),
    del({ targets: ["dist/*"] }),
    typescript()
  ],
  external: [...Object.keys(pkg.peerDependencies || {})]
};

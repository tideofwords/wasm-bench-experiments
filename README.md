Experiments for benchmarking Starky and Plonky3 proof generation in-browser, using Web Assembly.

To run this yourself, you will need to:
- clone the [backend-exploration](www.github.com/0xPARC/backend-exploration) repo from 0xPARC
- clone this repo
- in this repo, go to Cargo.toml, look under `[dependencies]`, and make sure that `plonky3_exploration` and `starky-exploration` point to the correct location in your clone of the `backend-exploration` repo
- build the WASM as follows:
- here is some information about [Rust and WASM](https://rustwasm.github.io/book/); if you have never compiled Rust to WASM before, do the "Setup" steps in the tutorial
- at a command line, set ``` RUSTFLAGS=`--cfg getrandom_backend="wasm_js"` ``` and change directory into `www` in this folder
- run `wasm-pack build`
- run `npm install`
- run `npm run start`

Nikhil's compile process.
- clone the [backend-exploration](www.github.com/0xPARC/backend-exploration) repo from 0xPARC
- clone this repo
- in this repo, go to Cargo.toml, look under `[dependencies]`, and make sure that `plonky3_exploration` and `starky-exploration` point to the correct location in your clone of the `backend-exploration` repo
- build the WASM as follows:
- here is some information about [Rust and WASM](https://rustwasm.github.io/book/); if you have never compiled Rust to WASM before, do the "Setup" steps in the tutorial
- at a command line, set ``` RUSTFLAGS='--cfg getrandom_backend="wasm_js"' ```
- add `rust-toolchain.toml` file specifying to use nightly version of rust
- run `wasm-pack build` from the directory of this repo. This creates a `pkg` directory.
- run `npm init wasm-app www` from the directory of this repo. This creates a `www` directory.
- run `npm install` from `www` directory.
- Add the following code at the of `www/package.json` file:
```
{
  ...,
  "dependencies": {
    "wasm-benchmark-experiments": "file:../pkg"
  }
}
```
- Add the following code to the `www/index.js` file:
```
import * as wasm from "wasm-benchmark-experiments";

wasm.run_st(5);
```
- run `npm install` from `www` directory.
- run `npm install --save-dev webpack@^5 webpack-cli@^4 webpack-dev-server@^4` from `www` directory.
- Add the following code to the `www/webpack.config.js` file:
```
{
  ...,
experiments: {
    asyncWebAssembly: true,      // <-- enable async WASM imports
  },
}
```
- Create run_node.js file in `www` directory and add the following code to it:
```
// run_node.js
import { performance } from "perf_hooks";
import { run_st } from "../pkg/wasm_benchmark_experiments.js";

(async () => {
  try {
    // install the panic hook *first*
    // init_panic_hook();

    const logH = 15;
    const t0 = performance.now();
    const res = await run_st(logH);
    const t1 = performance.now();
    console.log(`run_st(${logH}) → ${res} in ${(t1-t0).toFixed(3)}ms`);
  } catch (err) {
    console.error("run_st failed:", err);
  }
})();
```
- run `node --experimental-wasm-modules --experimental-wasm-reftypes run_node.js` from `www` directory.
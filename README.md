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

Nikhil's main modifications.
- Created file `rust-toolchain.toml` specifying to use nightly version of rust
- Created file `package.json`
- Created file `webpack.config.js`
- Created file `www/index.html`
- Created file `www/index.js`
- Created file `www/env-shim.js`
- Add the following code at the of `www/package.json` file:
```
{
  ...,
  "dependencies": {
    "wasm-benchmark-experiments": "file:../pkg"
  }
}
```
- Add the following code to the `www/webpack.config.js` file:
```
{
  ...,
experiments: {
    asyncWebAssembly: true,      // <-- enable async WASM imports
  },
}
```
- run `npm init wasm-app www` from the directory of this repo. This creates a `www` directory.
- run `npm install` from `www` directory.

Nikhil's compile process.
- clone the [backend-exploration](www.github.com/0xPARC/backend-exploration) repo from 0xPARC
- clone this repo
- in this repo, go to Cargo.toml, look under `[dependencies]`, and make sure that `plonky3_exploration` and `starky-exploration` point to the correct location in your clone of the `backend-exploration` repo
- build the WASM as follows:
- here is some information about [Rust and WASM](https://rustwasm.github.io/book/); if you have never compiled Rust to WASM before, do the "Setup" steps in the tutorial
- at a command line, set ``` RUSTFLAGS='--cfg getrandom_backend="wasm_js"' ```
- run ` wasm-pack build --release --target bundler` from the directory of this repo. This creates a `pkg` directory.
- run `npm install` from `www` directory.
- run `npm uninstall webpack webpack-cli webpack-dev-server` from `www` directory.
- run `npm install --save-dev webpack@^5 webpack-cli@^4 webpack-dev-server@^4` from `www` directory.
- run `npm run start`

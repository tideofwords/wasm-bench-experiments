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
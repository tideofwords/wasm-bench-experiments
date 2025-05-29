mod utils;

use plonky3_exploration;
use starky_exploration;
use wasm_bindgen::prelude::*;

// #[wasm_bindgen(start)]
// pub fn init_panic_hook() {
//     console_error_panic_hook::set_once();
// }

#[wasm_bindgen(start)]
pub fn __wasm_init() {
    console_error_panic_hook::set_once();
}

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn run_p3(width: usize, log_height: usize) -> () {
    plonky3_exploration::bench::bench(width, log_height);
}

#[wasm_bindgen]
pub fn run_st(log_height: usize) -> Result<usize, JsValue> {
    starky_exploration::bench::bench(log_height)
        .map_err(|e| JsValue::from_str(&e.to_string()))
}

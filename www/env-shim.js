// www/env-shim.js

// The Wasm module expects to import its memory under “env”
export const memory = new WebAssembly.Memory({ initial: 1 });

// wasm-bindgen uses __wbindgen_now for performance.now() 
export function __wbindgen_now() {
  return performance.now();
}

export function now() {
  // you can use performance.now() for sub-ms precision, or Date.now()
  return performance.now();
}

// wasm-bindgen uses __wbindgen_throw for panics
export function __wbindgen_throw(ptr, len) {
  // You’ll need to decode the UTF-8 string at (ptr,len) in memory if you
  // want a real message; for now:
  throw new Error("wasm panic");
}
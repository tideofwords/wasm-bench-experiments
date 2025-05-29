// www/index.js
import init, { run_st, run_p3} from "../pkg/wasm_benchmark_experiments.js";

(async () => {


//   const outputEl = document.getElementById("output");
//   const results = [];

//   for (let logH = 10; logH <= 15; logH++) {
    const logH = 10;
    const t0 = performance.now();
    const cols = run_st(logH);
    const t1 = performance.now();

    const timeMs = (t1 - t0).toFixed(3);
    // results.push({ logH, cols, timeMs });


    const width = 1000;
    const t0_p3 = performance.now();
    run_p3(width, logH);
    const t1_p3 = performance.now();

    const timeMs_p3 = (t1_p3 - t0_p3).toFixed(3);
    // results.push({ logH, cols, timeMs });
    document.getElementById("output").textContent = 
    `starky prover on 2^${logH} rows and ${cols} columns took ${timeMs} ms\n
    Plonky3 prover on 2^${logH} rows and ${width} columns took ${timeMs_p3} ms`;
    console.log(
        `starky prover on 2^${logH} rows and ${cols} columns took ${timeMs} ms\n
        Plonky3 prover on 2^${logH} rows and ${width} columns took ${timeMs_p3} ms`
    );

    //   }

//   // render them onto the page
//   outputEl.textContent = results
//     .map(
//       ({ logH, cols, timeMs }) =>
//         `starky prover on 2^${logH} rows and ${cols} columns took ${timeMs} ms`
//     )
//     .join("\n");

})();

// // www/index.js
// import init, { run_st } from "../pkg/wasm_benchmark_experiments.js";

// (async () => {
//   await init();
//   const logH = 15;
//   const t0 = performance.now();
//   const result = run_st(logH);
//   const t1 = performance.now();
//   document.getElementById("output").textContent =
//     `run_st(${logH}) → ${result} (took ${(t1-t0).toFixed(3)} ms)`;
//   console.log("🏁 Done");
// })();

// import * as wasm from "wasm-benchmark-experiments";

// wasm.run_st(5);

// www/index.js
import init, { run_st, run_p3} from "../pkg/wasm_benchmark_experiments.js";

(async () => {

    const logH = 10;
    const t0 = performance.now();
    const cols = run_st(logH);
    const t1 = performance.now();

    const timeMs = (t1 - t0).toFixed(3);

    const width = 1000;
    const t0_p3 = performance.now();
    run_p3(width, logH);
    const t1_p3 = performance.now();

    const timeMs_p3 = (t1_p3 - t0_p3).toFixed(3);
    document.getElementById("output").textContent = 
    `starky prover on 2^${logH} rows and ${cols} columns took ${timeMs} ms\n
    Plonky3 prover on 2^${logH} rows and ${width} columns took ${timeMs_p3} ms`;
    console.log(
        `starky prover on 2^${logH} rows and ${cols} columns took ${timeMs} ms\n
        Plonky3 prover on 2^${logH} rows and ${width} columns took ${timeMs_p3} ms`
    );

})();


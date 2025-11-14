<script>
        (function () {
  const input = document.getElementById('numList');
  const errorEl = document.getElementById('error');
  const resultsEl = document.getElementById('results');
  const resMean = document.getElementById('resMean');
  const resVar = document.getElementById('resVar');
  const resStd = document.getElementById('resStd');
                
  const btnMean = document.getElementById('btnMean');
  const btnVar = document.getElementById('btnVariance');
  const btnStd = document.getElementById('btnStdDev');
  const btnAll = document.getElementById('btnAll');

  const numberRegex = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/;
  function parseNumbers(raw) {
    if (!raw || !raw.trim()) return { error: "Please enter at least one number." };
    const tokens = raw.trim().split(/\s+/);
    const nums = [];
    for (let t of tokens) {
      if (!numberRegex.test(t)) return { error: `Invalid token "${t}".` };
      const v = Number(t);
      if (!isFinite(v)) return { error: `Value "${t}" is not a finite number.` };
      nums.push(v);
    }
    if (nums.length === 0) return { error: "No valid numbers found." };
    return { nums };
  }

  function showError(msg) {
    errorEl.textContent = msg || "";
    if (msg) resultsEl.style.display = "none";
  }
  function showResults(mean, variance, std) {
    resMean.textContent = mean.toFixed(4);
    resVar.textContent = variance.toFixed(4);
    resStd.textContent = std.toFixed(4);
    resultsEl.style.display = "block";
    errorEl.textContent = "";
  }
  function computeMean(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }
  function computeVariance(arr, mean) {
    let s = 0;
    for (let v of arr) s += (v - mean) ** 2;
    return s / arr.length;
  }

  function computeStdDev(v) {
    return Math.sqrt(v);
  }

  function handleCompute(type) {
    const parsed = parseNumbers(input.value);
    if (parsed.error) {
      showError(parsed.error);
      return;
    }
    const nums = parsed.nums;
    const mean = computeMean(nums);
    const variance = computeVariance(nums, mean);
    const std = computeStdDev(variance);
    if (type === "mean") {
      resMean.textContent = mean.toFixed(4);
      resVar.textContent = "—";
      resStd.textContent = "—";
      resultsEl.style.display = "block";
      errorEl.textContent = "";
    } else if (type === "variance") {
      resMean.textContent = "—";
      resVar.textContent = variance.toFixed(4);
      resStd.textContent = "—";
      resultsEl.style.display = "block";
      errorEl.textContent = "";
    } else if (type === "std") {
      resMean.textContent = "—";
      resVar.textContent = "—";
      resStd.textContent = std.toFixed(4);
      resultsEl.style.display = "block";
      errorEl.textContent = "";
    } else {
      showResults(mean, variance, std);
    }
  }
  input.addEventListener("blur", () => {
    const r = parseNumbers(input.value);
    showError(r.error || "");
  });
  btnMean.addEventListener("click", () => handleCompute("mean"));
  btnVar.addEventListener("click", () => handleCompute("variance"));
  btnStd.addEventListener("click", () => handleCompute("std"));
  btnAll.addEventListener("click", () => handleCompute("all"));

  input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCompute("all");
    }
  });
})();
</script>

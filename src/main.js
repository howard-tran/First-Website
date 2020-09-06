//@ts-check

/**
 *
 * @param {number[]} a
 * @param {string} b
 * @param {string} c
 * @returns {number}
 */
function sum(a, b, c) {
  let t = 0.0;
  for (let i = 0; i < a.length; i++) {
    t += a[i];
  }
  return t + Number.parseFloat(b) + Number.parseFloat(c);
}

console.log(sum([12, 13], "13.56", "56.78"));

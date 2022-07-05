function median(values) {
  if (!values.length) {
    return values;
  }

  const copy = [...values];

  copy.sort((a, b) => a - b);

  const half = Math.floor(copy.length / 2);

  if (copy.length % 2) return copy[half];

  return (copy[half - 1] + copy[half]) / 2.0;
}

module.exports = function (arr) {
  return arr.sort((a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      return median(a) - median(b);
    }

    return a - b;
  });
};

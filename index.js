function sum(fromN, toN) {
  if (fromN === toN) return toN; // base case
  return fromN + sum(fromN + 1, toN);
}

module.exports = sum;

const mat = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1]
];

k = 3;

const kWeakestRows = function(mat, k) {
  const matRanks = new Array(mat.length);
  for (let i = 0; i < mat.length; i++) {
    matRanks[i] = {
      order: i,
      rank: mat[i].reduce((acc, e) => acc + e)
    };
  }

  console.log(matRanks);

  const byRank = (a, b) => a.rank - b.rank || a.order - b.order;

  return matRanks
    .sort(byRank)
    .slice(0, k)
    .map(e => e.order);
};

// kWeakestRows(mat, k);

const arr = [1, 2, 3, 4, 5];

let total = arr.reduce((acc, e) => acc + e);
console.log(total);

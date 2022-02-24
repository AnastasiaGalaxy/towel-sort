function isEven(n) {
  return n % 2 === 0
}

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  const arr = [];
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].sort((a, b) => i % 2 === 0 ? a - b : b - a)
  }

  for (let i = 0; i < matrix.length; i++) {
    matrix[i].forEach(elem => arr.push(elem))
  }
  
  return arr;
}

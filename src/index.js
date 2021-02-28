
module.exports = function towelSort (matrix) {

  if (matrix === undefined || matrix === []) {
    return [];
  }
  let arr = [];

  matrix.forEach((e, i) => {
    if (i % 2 === 0){
      arr = arr.concat(e);
    } else {
      arr = arr.concat(e.reverse());
    }
  });
  
  return arr;
}

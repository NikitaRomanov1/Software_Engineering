let array = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
console.log(array);
function transpose(array,arrLen) {
for (var i = 0; i < arrLen; i++) {
  for (var j = 0; j <i; j++) {
    var newArr = array[i][j];
    array[i][j] = array[j][i];
    array[j][i] =newArr;
  }
}
console.log(array);
}

transpose(array,array.length);

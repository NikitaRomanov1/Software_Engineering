let array = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
]
let arr = [];

console.log(array);
for (let i = 0; i < array.length; ++i)
        for (let j = 0; j < array.length; ++j) {
              array[i][j] = arr[j][i];
        }

console.log(array);
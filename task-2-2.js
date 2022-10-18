const sums = [
    [1, 5, 6],
    [7, 2, 4, 6],
    [7, 10, 1],
    [1, 3]
];

const arrToCompare = [];

for (let i = 0; i < sums.length; i++) {
    let arrSum = 0;

    for (let j = 0; j < sums[i].length; j++) {
        arrSum += sums[i][j];        
    }

    arrToCompare.push(arrSum);
}

let totalSum = 0;
for (let i = 0; i < arrToCompare.length; i++) {
    totalSum += arrToCompare[i];
}

const average = totalSum / (arrToCompare.length);

// alert(`The biggest sum of inner arrays is: ${Math.max.apply(null, arrToCompare)}`);
alert(`The biggest sum of inner arrays is: ${Math.max(...arrToCompare)}`);
// alert(`The lowest sum of inner arrays is: ${Math.min.apply(null, arrToCompare)}`);
alert(`The lowest sum of inner arrays is: ${Math.min(...arrToCompare)}`);
alert(`An average of inner arrays sums is: ${average.toFixed(2)}`);

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


const reducer = (previous, current) => previous + current; 
let totalBatteries = batteryBatches.reduce((reducer))
console.log(totalBatteries)


// const array1 = [1, 2, 3, 4];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;


// console.log(array1.reduce(reducer));

// console.log(array1.reduce(reducer, 5));


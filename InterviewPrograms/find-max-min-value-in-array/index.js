const array = [15,86,9,63,151,5];

let minValue = Math.min(...array);

let maxValue = Math.max(...array);

let minVal = array.reduce((prev,curr) => {
    return prev < curr ? prev : curr;
})

let maxVal = array.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
})

console.log("Math Min:" + minValue);
console.log("Math Max:" + maxValue);
console.log("Reduce Min:" + minVal);
console.log("Reduce Max:" + maxVal);
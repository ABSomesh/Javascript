const array = [15,86,9,63,151,255,5];

const sortedArray = array.sort((a,b) => b-a);

let secondLargestNumber = sortedArray[1];

console.log(secondLargestNumber);
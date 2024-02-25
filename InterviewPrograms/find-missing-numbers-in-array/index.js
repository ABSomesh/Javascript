const array = [1,2,3,5,7,10];

const largestNumber = array.sort((a,b) => b-a)[0];

const missingNumbers = [];

for(i=1; i <= largestNumber; i++) {
    if(array.indexOf(i) === -1) {
        missingNumbers.push(i);
    }
}

console.log(missingNumbers);
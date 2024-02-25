const array = [1,2,3,3,4,4,5,6,6,6];

let duplicateArray = array.filter((value, index) => {
    return array.indexOf(value) !== index;
});

console.log(duplicateArray);
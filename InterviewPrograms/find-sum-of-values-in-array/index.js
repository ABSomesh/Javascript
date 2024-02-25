const array = [1,2,3,3,4,4,5,6,6,6,10];

const totalSum = array.reduce((prev,curr) => {
    return prev+curr;
})

console.log(totalSum);
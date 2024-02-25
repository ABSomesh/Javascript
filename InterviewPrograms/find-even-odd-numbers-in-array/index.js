const array = [1,4,7,9,10,15,16,17,18,19,20];

let evenArray = array.filter((value) => {
    return value % 2 === 0;
});

let oddArray = array.filter((value) => {
    return value % 2 !== 0;
}, []);

console.log("Even Array:" + evenArray);
console.log("Odd Array:" + oddArray);
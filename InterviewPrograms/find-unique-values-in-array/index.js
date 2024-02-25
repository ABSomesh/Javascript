const array = [1,2,3,3,4,4,5,6,6,6];

const uniqueArray = [];

for(i=0; i < array.length; i++) {
    let count = 0;
    for(j=0; j < array.length; j++) {
        if(array[i] == array[j]) {
            count++
        }
    }
    if (count === 1) {
        uniqueArray.push(array[i])
    }
}

console.log(uniqueArray);
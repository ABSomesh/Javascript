let str = "Hi Programmer";

let vowels = ["a", "e", "i", "o", "u"];

let vowelCount = 0;

for(let strChar of str) {
    if(vowels.includes(strChar)) {
        vowelCount++;
    }
}

console.log(vowelCount);
let str = "Hi Programmer";

let vowels = ["a", "e", "i", "o", "u"];

let strArray = str.toLowerCase().split("");

let vowelArray = strArray.filter((strarr) => {
    return vowels.includes(strarr);
});

console.log(vowelArray);
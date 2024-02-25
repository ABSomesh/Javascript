let str = "Hi Programmer";

let vowels = ["a", "e", "i", "o", "u"];

let vowel = "false";

for(i=0; i < vowels.length; i++) {
    vowel = str.includes(vowels[i])
    if(vowel) {
        console.log("String contain Vowels");
        break
    }
}

if(!vowel) {
    console.log("String does not contain Vowels");
}
 
const charToLower = char => {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';

    const index = uppercaseLetters.indexOf(char);
    return index !== -1 ? lowercaseLetters[index] : char;
};

 
const wordToLower = word => {
    let result = '';
    for (let i = 0; i < word.length; i++) {
        result += charToLower(word[i]);
    }
    return result;
};

 
const arrayToLowerCase = array => array.map(wordToLower);

 
const inputArray = ["MA", "SA", "I", "SCH", "OOL"];

 
const outputArray = arrayToLowerCase(inputArray);
 
console.log(outputArray);
 
  
 

 
 
import {remove} from "lodash";

const data = [
    "A man, a plan, a canal, Panama",
    "Gold is where you find it",
    "If I had a hi-fi",
    "Fortune favors the prepared mind",
    "Rats live on no evil star",
    "There is no abstract living",
    "Some men interpret nine memos",
    "Gnorts, Mr Alien"
];

export const isPalindrome = (text: string): boolean => {
    const lowerCaseText = text.toLowerCase();
    const onlyLettersText = removeAllNonLetterCharacters(lowerCaseText);
    const reversedText = returnReversedString(onlyLettersText);

    return reversedText === onlyLettersText;
}

const returnReversedString = (string: string) => {
    let reversedString = "";
    for (let index = string.length-1; index>=0; index--) {
        reversedString += string[index];
    }
    return reversedString;
}

const removeAllNonLetterCharacters = (string: string) => {
    return string.replace(/[^a-zA-Z]/g, '');
}

export const solution = () => {
    let output = ""
    for(let str of data) {
        if (isPalindrome(str)) {
            output += `"${str}" is a palindrome\n`;
        } else {
            output += `"${str}" is not a palindrome\n`;
        }
    }
    return output;
};


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

export const solution = () => {
    let output = "";
    let flagForPalindrome = true;
    for(let str of data) {
        flagForPalindrome = isPalindrome(str);
        if (flagForPalindrome){
            output += `"${str}" might be a palindrome\n`;
        }
    }
    return output;
};

export const isPalindrome = (text: string): boolean => {
    text = text.toLowerCase();
    text.replaceAll(" ","");
    text.replaceAll(/[^a-zA-Z ]/g, "");
    let reverseText = "";
    let arrayText = text.split("");
    arrayText.reverse();
    reverseText = arrayText.toString();
    // eslint-disable-next-line eqeqeq
    if (reverseText == text){
        return true;
    }else {
        return false;
    }
};


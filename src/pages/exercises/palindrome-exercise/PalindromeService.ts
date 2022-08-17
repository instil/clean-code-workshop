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

export const palindromeChecker = () => {
    let output = ""
    for (let sentence of data) {

        const strippedLowerSentence = stripAllExceptAlphabet(sentence).toLowerCase();

        if ((reverseString(strippedLowerSentence)) === strippedLowerSentence) {
            output += `"${sentence}" is a palindrome.\n`;
        }
        else {
            output += `"${sentence}" is not a palindrome.\n`;
        }
    }
    return output;
};

function reverseString(sentence: string): string {
    return sentence.split("").reverse().join("");
}

function stripAllExceptAlphabet(sentence: string): string {
    return sentence.replace(/[^a-z]/gi, '');
}
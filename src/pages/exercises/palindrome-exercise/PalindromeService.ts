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
    let output = ""
    for(let str of data) {
        output += (str + ": " + (contructOutput(isPalindrome(str))));
        output += '\n'
    }
    return output;
};

function switchWordOrder(sentence: string): string {
    let reversedSentence = stripSpaces(sentence);
    return reversedSentence.split("").reverse().join("")
}

function isPalindrome(sentence: string): boolean {
    let reversedSentence = switchWordOrder(sentence);
    sentence = stripSpaces(sentence);
    return (sentence === reversedSentence ? true : false);
}

function stripSpaces(sentence: string): string{
    return sentence.replaceAll(/[\W_]/g, "").toLowerCase();
}

function contructOutput(isPalindrome: boolean): string {
    return (isPalindrome ? " is a palindrome" : " is not a palindrome")
}


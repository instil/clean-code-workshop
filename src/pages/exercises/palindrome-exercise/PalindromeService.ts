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

const REGEX_FOR_SPECIAL_CHARS = /[^a-zA-Z]/g;

export const solution = () => {
    let output = "";
    data.forEach(sentence => {
        output += `"${sentence}" ${isPalindrome(sentence) ? "is" : "is not"} a palindrome\n`;
    });
    return output;
};

function purifySentence(sentence: string) {
    return sentence
        .trim()
        .toLowerCase()
        .replace(REGEX_FOR_SPECIAL_CHARS, "");
}

export const isPalindrome = (sentence: string) => {
    const purifiedSentence = purifySentence(sentence);
    const reversedSentence = purifiedSentence.split("").reverse().join("");
    return purifiedSentence === reversedSentence;
};


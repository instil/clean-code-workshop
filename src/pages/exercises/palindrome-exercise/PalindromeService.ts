const sentences = [
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
    sentences.forEach(sentence => {
        output += appendPalindromeResult(sentence);
    });
    return output;
};

const appendPalindromeResult = (sentence: string) => {
    return `"${sentence}" ${isPalindrome(sentence) ? `is` : `is not`} a palindrome\n`;
}

const isPalindrome = (input: string) => {
    input = input.toLowerCase();
    input = removeNonAlphabeticCharacters(input);
    return input === input.split('').reverse().join('');
}

const removeNonAlphabeticCharacters = (input: string): string => {
    return input.replace(/[^a-z]/g, '');
}


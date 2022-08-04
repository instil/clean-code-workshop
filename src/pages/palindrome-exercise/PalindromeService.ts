const data = [
    "A man, a plan, a canal, Panama",
    "Gold is where you find it",
    "If I had a hi-fi",
    "Fortune favors the prepared mind",
    "Rats live on no evil star",
    "There is no abstract living",
    "Some men interpret nine memos",
    "Gnorts Mr Alien"
];

const isAPalindrome = (phrase: string): string => `${phrase}  - is a palindrome\n`;

const isNotAPalindrome = (phrase: string): string => `${phrase}  - is NOT a palindrome\n`;

const REGEX_TO_SELECT_SPECIAL_CHARACTERS = /[^\w\d]/g

export const solution = (): string => {
    let output = "";
    for (let str of data) {
        const phraseWithoutSpecialCharacters = str.replace(REGEX_TO_SELECT_SPECIAL_CHARACTERS, "").toLowerCase();
        const reversePhrase = phraseWithoutSpecialCharacters.split("").reverse().join("");

        reversePhrase === phraseWithoutSpecialCharacters
            ? output += isAPalindrome(str)
            : output += isNotAPalindrome(str);
    }
    return output;
};

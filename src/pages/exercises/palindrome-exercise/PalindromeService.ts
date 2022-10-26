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
    return false;
}

export const solution = () => {
    let output = ""
    for(let str of data) {
        let postFix = isPalindrome(str)
        ? "is a palindrome"
            : "is not a palindrome";
        output += `"${str}" might be a palindrome\n`;
    }
    return output;
};

export function isPalindrome2(str: string): boolean {
    let sanitisedInput = sanitiseInput(str)
    let reversedInput = reverse(sanitisedInput)
    return sanitisedInput === reversedInput;
}

const sanitiseInput = (str: string): string =>
    str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

const reverse = (str: string): string =>
    str.split('').reverse().join('');


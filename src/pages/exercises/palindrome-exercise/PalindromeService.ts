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
    for (let str of data) {
        output += isPalindrome(str);
    }
    return output;
}

function isPalindrome(str: string): string {
    let originalPhrase = prep(str);
    let reversedPhrase = reorder(originalPhrase);
    if (compare(originalPhrase, reversedPhrase)) {
        return `"${str}" is a palindrome\n`;
    }
        return`"${str}" is not a palindrome\n`;
}


export function prep(phrase: string): string {
    return phrase
            .replace(/\s/g, '')
            .replace(/[^a-zA-Z ]/g, '')
            .toLowerCase()
}

export function reorder(phrase: string): string {
    return phrase
        .split("")
        .reverse()
        .join("")
}

export function compare(originalPhrase: string, reversedPhrase: string): boolean {
        return originalPhrase === reversedPhrase;
}

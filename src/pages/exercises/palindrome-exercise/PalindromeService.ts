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
    return data.map(inputStatement => [inputStatement, isPalindrome(inputStatement)])
        .map(([inputStatement, isPalindrome]) => `"${inputStatement}" ${isPalindrome ? "is" : "is not"} a palindrome\n`);
};

function isPalindrome(inputStatement: string): boolean {
    return sanitise(inputStatement) === sanitise(inputStatement.split("").reverse().join(""));
}

function sanitise(inputStatement: string): string {
    return inputStatement.toLowerCase().replaceAll(/[\W_]/g, "");
}
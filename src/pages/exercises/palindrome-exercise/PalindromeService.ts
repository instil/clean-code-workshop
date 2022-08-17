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
};

function removeNonAlphanumericalCharacters(str: string): string {
    const regex = /[^A-Za-z0-9]/g;
    return str.replace(regex, "").toLowerCase();
}

function isPalindrome(str: string): string {
    const strippedString = removeNonAlphanumericalCharacters(str);
    const reverse = reverseString(strippedString);
    if (strippedString === reverse)
        return `${str} is a palindrome.\n`
    else
        return `${str} is not a palindrome.\n`
}

function reverseString(str: string): string {
    return str.split("").reverse().join("")
}


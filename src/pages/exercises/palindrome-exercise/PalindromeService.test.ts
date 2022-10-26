import {isPalindrome} from "./PalindromeService";
import {isPalindrome2} from "./PalindromeService";

it.each([
    "A man, a plan, a canal, Panama",
    "If I had a hi-fi",
    "Rats live on no evil star",
    "Some men interpret nine memos",
])('should expect %p to be a palindrome', (text: string) => {
    expect(isPalindrome2(text)).toBeTruthy()
});

it.each([
    "Gold is where you find it",
    "Fortune favors the prepared mind",
    "There is no abstract living",
    "Gnorts, Mr Alien",
])('should expect %p to not be a palindrome', (text: string) => {
    expect(isPalindrome2(text)).toBeFalsy()
});

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
const REGEX_NON_ALPHANUMERIC = /[\W_]/g;

export const solution = () => buildOutput(data);

const buildOutput =
	(sentences: string[]) =>
		sentences
			.map(sentence => buildOutputLine(sentence))
			.join('\n');

const buildOutputLine =
	(sentence: string) =>
		`"${sentence}" is${isPalindrome(sentence)? "" : " not"} a palindrome.`;

const isPalindrome =
	(sentence: string) => (
		(sentence: string) => sentence === reverse(sentence)
	)(clean(sentence));

const reverse =
	(original: string) =>
		original
			.split('')
			.reverse()
			.join('');

const clean =
	(original: string) =>
		original
			.toLowerCase()
			.replaceAll(REGEX_NON_ALPHANUMERIC, "");

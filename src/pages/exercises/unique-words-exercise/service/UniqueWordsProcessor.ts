import {sortBy} from "lodash";

const REGEX_TO_SELECT_SPECIAL_CHARACTERS_EXCEPT_SPACES = /[^a-zA-Z ]/g;

export function countWords(input: string): string[] {
    const words = input.replace(REGEX_TO_SELECT_SPECIAL_CHARACTERS_EXCEPT_SPACES, " ")
        .trim()
        .toLowerCase()
        .split(/\s+/);

    const answer = words.reduce((map, word) => map.set(word, map.get(word) + 1 || 1), new Map());
    return Array.from(answer).map(([word, counter]) => `${word} - ${counter}`);
}

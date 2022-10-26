import {uniqueWords} from "./UniqueWordsExercise";

it("Should get unique words", () => {
	expect(uniqueWords("hello hello there")).toStrictEqual({
		"hello": 2,
		"there": 1
	})
})
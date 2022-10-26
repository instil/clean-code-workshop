import {
	averageQuoteLength,
	data, joinListOfQuotes,
	listOfMovieTitles,
	listOfMovieTitlesAndRatingByYear,
	listOfMovieTitlesByRating, moviesFromDecade,
} from "./SingleResponsibilityExercise";

describe("should run all the tests", () => {
	it("Should get all the titles", () => {
		expect(listOfMovieTitles(data)).toStrictEqual("Conan Terminator Terminator 2 Commando Predator Total Recall ");
	})

	it("should get all the great movie titles", () => {
		expect(listOfMovieTitlesByRating(data, "GREAT")).toEqual("Conan Terminator Total Recall ");
	})

	it("should get all the movie titles and ratings in 1984", () => {
		expect(listOfMovieTitlesAndRatingByYear(data, 1984)).toEqual("Conan:GREAT Terminator:GREAT Commando:SUPERB ")
	})

	it("should get all the quotes", () => {
		expect(joinListOfQuotes(data)).toEqual(
			"Enough talk! " +
			"I'll be back. " +
			"Come with me if you want to live. " +
			"Hasta la vista, baby. " +
			"It's in your nature to destroy yourselves. " +
			"I have to remind you Sully, this is my weak arm! " +
			"I eat Green Berets for breakfast. And right now, I'm very hungry! " +
			"Don't disturb my friend, he's dead tired. " +
			"Come on Bennett, let's party! " +
			"Let off some steam, Bennett. " +
			"Get to the Chopper! " +
			"Stick around. " +
			"If it bleeds, we can kill it. " +
			"He's using the trees. " +
			"We move, five meter spread, no sound. " +
			"Get your ass to Mars. " +
			"Relax. You'll live longer. " +
			"If I am not me, then who the hell am I? " +
			"Look who's talking."
		)
	})

	it("should get the average quote length", () => {
		expect(averageQuoteLength(data)).toEqual("29.26");
	})

	it("should get all the movie titles from the 80s", () => {
		expect(moviesFromDecade(data, 1980)).toEqual("Conan Terminator Commando Predator ");
	})

	it("should get all the movie titles from the 80s", () => {
		expect(moviesFromDecade(data, 1990)).toEqual("Terminator 2 Total Recall ");
	})
})

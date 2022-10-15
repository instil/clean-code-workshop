import {Movie} from "./Movie";

export class MovieFactory {
	public static buildMovies() {
		return [
			MovieFactory.buildMovie(
				"Conan",
				"GREAT",
				new Date(1984, 6, 29),
				"Enough talk!"
			),
			MovieFactory.buildMovie(
				"Terminator",
				"GREAT",
				new Date(1984, 10, 26),
				"I'll be back"
			),
			MovieFactory.buildMovie(
				"Terminator 2",
				"BRILLIANT",
				new Date(1991, 7, 3),
				"Come with me if you want to live.",
				"Hasta la vista, baby.",
				"It's in your nature to destroy yourselves."
			),
			/* {
				title:"Commando",
				rating:"SUPERB",
				releaseDate:new Date(1984, 10, 4),
				quotes:["I have to remind you Sully, this is my weak arm!",
					"I eat Green Berets for breakfast. And right now, I'm very hungry!",
					"Don't disturb my friend, he's dead tired.",
					"Come on Bennett, let's party!",
					"Let off some steam, Bennett."]
			},
			{
				title:"Predator",
				rating:"LIFE_CHANGING",
				releaseDate: new Date(1987, 6, 12),
				quotes: ["Get to the Chopper!",
					"Stick around.",
					"If it bleeds, we can kill it.",
					"He's using the trees.",
					"We move, five meter spread, no sound."]
			},
			{
				title:"Total Recall",
				rating:"GREAT",
				releaseDate:new Date(1990, 6, 1),
				quotes:["Get your ass to Mars.",
					"Relax. You'll live longer.",
					"If I am not me, then who the hell am I?",
					"Look who's talking."]
			} */
		];
	}

	public static buildMovie = (title:string, rating:string, releaseDate:Date, ...quotes: string[]) => {
		return {
			title: title,
			rating: rating,
			releaseDate: releaseDate,
			quotes: quotes
		} as Movie;
	}
}

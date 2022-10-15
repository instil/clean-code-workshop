import * as _ from "lodash";


export class Movie {

    static movieData = [
        new Movie("Conan", "GREAT",
            new Date(1984, 6, 29),
            ["Enough talk!"]),
        new Movie("Terminator",
            "GREAT",
            new Date(1984, 10, 26),
            ["I'll be back."]),
        new Movie("Terminator 2",
            "BRILLIANT",
            new Date(1991, 7, 3),
            ["Come with me if you want to live.",
                "Hasta la vista, baby.",
                "It's in your nature to destroy yourselves."]),
        new Movie("Commando",
            "SUPERB",
            new Date(1984, 10, 4),
            ["I have to remind you Sully, this is my weak arm!",
                "I eat Green Berets for breakfast. And right now, I'm very hungry!",
                "Don't disturb my friend, he's dead tired.",
                "Come on Bennett, let's party!",
                "Let off some steam, Bennett."]),
        new Movie("Predator",
            "LIFE_CHANGING",
            new Date(1987, 6, 12),
            ["Get to the Chopper!",
                "Stick around.",
                "If it bleeds, we can kill it.",
                "He's using the trees.",
                "We move, five meter spread, no sound."]),
        new Movie("Total Recall",
            "GREAT",
            new Date(1990, 6, 1),
            ["Get your ass to Mars.",
                "Relax. You'll live longer.",
                "If I am not me, then who the hell am I?",
                "Look who's talking."])
    ];


    constructor(
        public readonly title: string,
        public readonly rating: string,
        public readonly releaseDate: Date,
        public readonly quotes: string[],
    ) {
    }


    static moviesTitle(): string {
        return  this.movieData
            .map(movie => movie.title)
            .join(", ")
    }


    static MovieQuotes (): string {
        return this.movieData
            .flatMap(movie => movie.quotes)
            .join(" ")
    };


    static Moviesin(year: number): string {
        return this.movieData
                .filter(movie => movie.releaseDate.getFullYear() === year)
                .map(movie => `Movie Title: ${movie.title} Rating: ${movie.rating}`)
                .join(",")
    }


    static MoviesinRange(start: number, end: number): string {
        return this.movieData
            .filter(movie => movie.releaseDate.getFullYear() >= start && movie.releaseDate.getFullYear() <= end)
            .map(movie => movie.title)
            .join(", ")
    }

    static MovieswithRating(given: string): string {
        return  this.movieData
            .filter(movie => movie.rating === given)
            .map(movie => movie.title)
            .join(", ")
    }

    static movieQuoteLength(): string {
       return _.meanBy(this.MovieQuotes()).toFixed()
    }

    static movieByRating(phrases: string[]): string {
        let output = " "
        phrases.forEach(phrase => {
            output += `Movies with the rating ${phrase}: \n`;
            output += this.MovieswithRating(phrase) + "\n";
            output += "\n";
        });
        return  output
    }

}
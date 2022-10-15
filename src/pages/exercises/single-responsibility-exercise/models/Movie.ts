type Rating = "GREAT" | "SUPERB" | "BRILLIANT" | "LIFE_CHANGING";

export class Movie {
    constructor(
        public readonly title: string,
        public readonly rating: Rating,
        public readonly releaseDate: Date,
        public readonly quotes: string[]
    ) {
    }
}
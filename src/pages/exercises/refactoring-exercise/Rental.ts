import {Movie} from "./Movie";

export class Rental {
    movie: Movie;
    daysRented: number;

    constructor(movie: Movie, daysRented: number) {
        this.movie = movie;
        this.daysRented = daysRented;
    }
}
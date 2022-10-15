import {Movie} from "./Movie";

export class Rental {
    constructor(public movie: Movie, public daysRented: number) {
    }

    getPrice() {
        return this.daysRented * this.movie.priceCode;
    }
}
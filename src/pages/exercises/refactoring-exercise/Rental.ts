import {Movie} from "./Movie";

export class Rental {
	movie: Movie;
	daysRented: number;

	constructor(movie: Movie, daysRented: number) {
		this.movie = movie;
		this.daysRented = daysRented;
	}

	public getCost = () => {
		let cost: number = 0;
		switch (this.movie.priceCode) {
			case 'REGULAR':
				cost += 2;
				if (this.daysRented > 2) {
					cost += (this.daysRented - 2) * 1.5;
				}
				break;
			case 'NEW_RELEASE':
				cost += this.daysRented * 3;
				break;
			case 'CHILDRENS':
				cost += 1.5;
			if (this.daysRented > 3) {
				cost += (this.daysRented - 3) * 1.5;
			}
			break;
		}
		return cost;
	}

	public getFrequentRenterPoints = () =>
		this.isDoublePoints()? 2 : 1;

	private isDoublePoints = () =>
		this.movie.priceCode === "NEW_RELEASE" && this.daysRented > 1;
}

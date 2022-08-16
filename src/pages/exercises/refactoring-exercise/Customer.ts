import {Rental} from "./Rental";
import {Price} from "./Price";

export class Customer {
    private rentals: Rental[] = [];

    constructor(public name: string) {
    }

    addRental(...rentals: Rental[]): void {
        rentals.forEach(rental => this.rentals.push(rental))
    }

    statement(): string {
        return `Rental Record for ${this.name}
                ${this.getRentedMovies()}
                Amount owed is $${this.getRentalsCost()}
                You earned ${this.getFrequentRentalPoints()} frequent renter points`
    }

    private getRentedMovies(): string {
        return this.rentals
            .reduce((rentalList, currentRental) => rentalList + `Days Rented: ${currentRental.daysRented}\t  Movie: ${currentRental.movie.title}\t Price: ${currentRental.movie.priceCode.valueOf()}\n`, "")
    }

    private getRentalsCost(): number {
        return this.rentals
            .map(rental => rental.getPrice())
            .reduce((total, rentalPrice) => total + rentalPrice);
    }

    private getFrequentRentalPoints(): number {
        return this.rentals
            .map(rental => rental.movie.priceCode === Price.New_Release && rental.daysRented > 1)
            .reduce((total, isDoublePoints) => total + (isDoublePoints ? 2 : 1), 0);
    }
}
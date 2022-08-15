import {Rental} from "./Rental";
import {Price} from "./Price";

export class Customer {
    private rentals: Rental[] = [];

    constructor(public name: string) {
    }

    addRental(...rentals: Rental[]) {
        rentals.forEach(rental => this.rentals.push(rental))
    }

    statement() {
        return `Rental Record for ${this.name}
                ${getRentedMovies(this.rentals)}
                Amount owed is $${getRentalsCost(this.rentals)}
                You earned ${getFrequentRentalPoints(this.rentals)} frequent renter points`
    }
}

function getRentalsCost(rentals: Rental[]) {
    return rentals
        .map(rental => rental.movie.priceCode * rental.daysRented)
        .reduce((previousValue, currentValue) => previousValue + currentValue);
}

function getFrequentRentalPoints(rentals: Rental[]) {
    return rentals
        .map(rental => rental.movie.priceCode === Price.New_Release && rental.daysRented > 1)
        .reduce((previousValue, currentValue) => previousValue + (currentValue ? 2 : 1), 0);
}

function getRentedMovies(rentals: Rental[]) {
    return rentals.reduce((previousValue, currentValue) => previousValue + `Days Rented: ${currentValue.daysRented}\t  Movie: ${currentValue.movie.title}\t Price: ${currentValue.movie.priceCode.valueOf()}\n`, "")
}
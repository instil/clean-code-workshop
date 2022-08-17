import {Rental} from "./Rental";

export class Customer {
    constructor(
        public name: string,
        public rentals: Rental[] = [],
        private frequentRenterPoints: number = 0,
        private totalBill: number = 0
    ) {
    }

    addRentals(rental: Rental | Rental[]) {
        this.rentals = this.rentals.concat(rental);
    }

    getCost(rental: Rental): number {
        let cost = 0;
        switch (rental.movie.priceCode) {
            case "REGULAR":
                cost += 2;
                if (rental.daysRented > 2) {
                    cost += (rental.daysRented - 2) * 1.5;
                }
                break;
            case "NEW_RELEASE":
                cost += rental.daysRented * 3;
                break;
            case "CHILDRENS":
                cost += 1.5;
                if (rental.daysRented > 3) {
                    cost += (rental.daysRented - 3) * 1.5;
                }
                break;
        }
        return cost;
    }

    updateRentalPoints(rental: Rental) {
        if ((rental.movie.priceCode === "NEW_RELEASE") && rental.daysRented > 1) {
            this.frequentRenterPoints += 2;
        } else {
            this.frequentRenterPoints += 1;
        }
    }

    addToStatement(rental: Rental, cost: number): string {
        return `\tMovie: ${rental.movie.title},
        \tDays Rented: ${rental.daysRented},
        \tCost: £${cost.toFixed(2)}\n`;
    }

    addFooter(): string {
        return `Total amount owed is £${this.totalBill.toFixed(2)}.\n
        You earned ${this.frequentRenterPoints} frequent renter points!`;
    }

    statement(): string {
        let statement = `\nRental Record for ${this.name}\n`;

        this.rentals.forEach(rental => {
            let cost = this.getCost(rental);
            statement += this.addToStatement(rental, cost);
            this.updateRentalPoints(rental);
            this.totalBill += cost;
        })

        statement += this.addFooter();
        return statement.toString();
    }
}
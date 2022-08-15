import {Rental} from "./Rental";

export class Customer {
    name: string;
    private rentals: Rental[];

    constructor(name: string) {
        this.name = name;
        this.rentals = [];
    }

    addRental(rental: Rental) {
        this.rentals.push(rental);
    }

    statement() {
        var {frequentRenterPoints, result, totalAmount} = this.iterateRentals(frequentRenterPoints, totalAmount);
        result += `Amount owed is ${totalAmount}\nYou earned${frequentRenterPoints} frequent renter points\n`;
        return result.toString();
    }

    private iterateRentals(frequentRenterPoints: number, totalAmount: number) {
        let result = `\nRental Record for ${this.name} \n`
        this.rentals.forEach(rental => {
            let thisAmount = this.rentalType(rental, 0);
            frequentRenterPoints = this.decideRental(rental, frequentRenterPoints);
            result += `\t${rental.daysRented}\t${rental.movie.title}\t${thisAmount}\n`;
            totalAmount += thisAmount;
        })
        return {frequentRenterPoints, result, totalAmount};
    }

    private decideRental(rental: Rental, frequentRenterPoints: number) {
        if (this.rentalCondition(rental)) {
            frequentRenterPoints += 2;
        } else {
            frequentRenterPoints += 1;
        }
        return frequentRenterPoints;
    }

    private rentalCondition(rental: Rental) {
        return (rental.movie.priceCode === 'NEW_RELEASE') && rental.daysRented > 1;
    }

    private rentalType(rental: Rental, thisAmount: number) {
        switch (rental.movie.priceCode) {
            case 'REGULAR':
                thisAmount += 2;
                if (rental.daysRented > 2) {
                    thisAmount += (rental.daysRented - 2) * 1.5;
                }
                break;
            case 'NEW_RELEASE':
                thisAmount += rental.daysRented * 3;
                break;
            case 'CHILDRENS':
                thisAmount += 1.5;
                if (rental.daysRented > 3) {
                    thisAmount += (rental.daysRented - 3) * 1.5;
                }
                break;
        }
        return thisAmount;
    }
}
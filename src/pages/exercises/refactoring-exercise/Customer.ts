import {Rental} from "./Rental";

export class Customer {
    name: any;
    private rentals: any[];

    constructor(name: any) {
        this.name = name;
        this.rentals = [];
    }

    addRental(rental: Rental) {
        this.rentals.push(rental);
    }

    statement() {
        let totalAmount = 0;
        let frequentRenterPoints = 0;
        let result = "";

        const header = `\nRental Record for ${this.name}\n`;

        const statementData = this.getStatementData(frequentRenterPoints, result, totalAmount);
        frequentRenterPoints = statementData.frequentRenterPoints;
        result = statementData.result;
        totalAmount = statementData.totalAmount;

        const footer = `Amount owed is ${totalAmount}\nYou earned ${frequentRenterPoints} frequent renter points\n`;

        return result.toString();
    }

    private getStatementData(frequentRenterPoints: number, result: string, totalAmount: number) {
        this.rentals.forEach(rental => {
            let thisAmount = this.determineCost(rental);
            frequentRenterPoints = this.determinePoints(rental, frequentRenterPoints);
            result = this.rentalFigures(result, rental, thisAmount);
            totalAmount += thisAmount;
        });
        return {frequentRenterPoints, result, totalAmount};
    }

    private rentalFigures(result: string, rental: any, thisAmount: number) {
        result += "\t";
        result += rental.daysRented;
        result += "\t";
        result += rental.movie.title;
        result += "\t";
        result += thisAmount;
        result += "\n";
        return result;
    }

    private determinePoints(rental: any, frequentRenterPoints: number) {
        if ((rental.movie.priceCode === "NEW_RELEASE") && rental.daysRented > 1) {
            frequentRenterPoints += 2;
        } else {
            frequentRenterPoints += 1;
        }
        return frequentRenterPoints;
    }

    private determineCost(rental: any) {
        let thisAmount = 0;
        switch (rental.movie.priceCode) {
            case "REGULAR":
                thisAmount += 2;
                if (rental.daysRented > 2) {
                    thisAmount += (rental.daysRented - 2) * 1.5;
                }
                break;
            case "NEW_RELEASE":
                thisAmount += rental.daysRented * 3;
                break;
            case "CHILDRENS":
                thisAmount += 1.5;
                if (rental.daysRented > 3) {
                    thisAmount += (rental.daysRented - 3) * 1.5;
                }
                break;
        }
        return thisAmount;
    }
}
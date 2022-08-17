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
        let result = '';
        result = this.getHeader(result);

        const __ret = this.getBody(frequentRenterPoints, result, totalAmount);
        frequentRenterPoints = __ret.frequentRenterPoints;
        result = __ret.result;
        totalAmount = __ret.totalAmount;
        // add footer lines

        result = this.getFooter(result, totalAmount, frequentRenterPoints);
        return result.toString();
    }

    private getHeader(result: string) {
        result += '\nRental Record for ' + this.name + '\n';
        return result;
    }

    private getFooter(result: string, totalAmount: number, frequentRenterPoints: number) {
        result += 'Amount owed is ' + totalAmount + "\n" + "You earned" + frequentRenterPoints + ' frequent renter points\n';
        return result;
    }

    private getBody(frequentRenterPoints: number, result: string, totalAmount: number) {

        this.rentals.forEach(rental => {
            let thisAmount = this.determineCost(rental);
            frequentRenterPoints = this.determinePoints(rental, frequentRenterPoints);
            result = this.showFigures(result, rental, thisAmount);
            totalAmount += thisAmount;
        })
        return {frequentRenterPoints, result, totalAmount};
    }

    private showFigures(result: string, rental: Rental, thisAmount: number) {
        result += '\t' + rental.getDaysRented();
        result += '\t';
        result += rental.getMovie().title;
        result += '\t';
        result += thisAmount;
        result += '\n';
        return result;
    }

    private determineCost(rental: Rental) {
        let thisAmount = 0;
        switch (rental.getMovie().priceCode) {
            case 'REGULAR':
                thisAmount += 2;
                if (rental.getDaysRented() > 2) {
                    thisAmount += (rental.getDaysRented() - 2) * 1.5;
                }
                break;
            case 'NEW_RELEASE':
                thisAmount += rental.getDaysRented() * 3;
                break;
            case 'CHILDRENS':
                thisAmount += 1.5;
                if (rental.getDaysRented() > 3) {
                    thisAmount += (rental.getDaysRented() - 3) * 1.5;
                }
                break;
        }
        return thisAmount;
    }

    private determinePoints(rental: Rental, frequentRenterPoints: number) {
        if ((rental.getMovie().priceCode === 'NEW_RELEASE') && rental.getDaysRented() > 1) {
            frequentRenterPoints += 2;
        } else {
            frequentRenterPoints += 1;
        }
        return frequentRenterPoints;
    }

}
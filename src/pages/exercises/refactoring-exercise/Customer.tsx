import {Rental} from "./Rental";

export class Customer {
    name: any;
    private readonly rentals: Rental[];

    constructor(name: any) {
        this.name = name;
        this.rentals = [];
    }

    addRental(rental: Rental) {
        this.rentals.push(rental);
    }

    public statement() {
        let totalAmount = 0;
        let frequentRenterPoints = 0;
        let result = '';
        const __ret = this.addHeaderLines(result, frequentRenterPoints, totalAmount);
        result = __ret.result;
        frequentRenterPoints = __ret.frequentRenterPoints;
        totalAmount = __ret.totalAmount;
        result = this.addFooterLines(result, totalAmount, frequentRenterPoints);
        return result.toString();
    }

    private addFooterLines(result: string, totalAmount: number, frequentRenterPoints: number) {
        result += 'Amount owed is ';
        result += totalAmount;
        result += '\n';
        result += 'You earned ';
        result += frequentRenterPoints;
        result += ' frequent renter points\n';
        return result;
    }

    private addHeaderLines(result: string, frequentRenterPoints: number, totalAmount: number) {
        result += '\nRental Record for ';
        result += this.name;
        result += '\n';
        const __ret = this.determineRentalInformation(frequentRenterPoints, result, totalAmount);
        frequentRenterPoints = __ret.frequentRenterPoints;
        result = __ret.result;
        totalAmount = __ret.totalAmount;
        return {result, frequentRenterPoints, totalAmount};
    }

    private determineRentalInformation(frequentRenterPoints: number, result: string, totalAmount: number) {
        for (let rental of this.rentals) {
            let thisAmount = this.determineCost(rental);
            frequentRenterPoints = this.determinePoints(rental, frequentRenterPoints);
            result = this.showFiguresForRental(result, rental, thisAmount);
            totalAmount += thisAmount;
        }
        return {frequentRenterPoints, result, totalAmount};
    }

    private determinePoints(rental: Rental, frequentRenterPoints: number) {
        if (this.isNewReleaseRentedMoreThanOneDay(rental)) {
            frequentRenterPoints += 2;
        } else {
            frequentRenterPoints += 1;
        }
        return frequentRenterPoints;
    }

    private isNewReleaseRentedMoreThanOneDay(rental: Rental) {
        return (rental.movie.priceCode === 'NEW_RELEASE') && rental.daysRented > 1;
    }

    private showFiguresForRental(result: string, rental: Rental, thisAmount: number) {
        // show figures for this rental
        result += '\t';
        result += rental.daysRented;
        result += '\t';
        result += rental.movie.title;
        result += '\t';
        result += thisAmount;
        result += '\n';
        return result;
    }

    private determineCost(rental: Rental) {
        let thisAmount = 0;
        thisAmount = this.determinePriceCode(rental, thisAmount);
        return thisAmount;
    }

    private determinePriceCode(rental: Rental, thisAmount: number) {
        switch (rental.movie.priceCode) {
            case 'REGULAR':
                thisAmount += 2;
                if (rental.daysRented > 2) {
                    thisAmount = this.calculateAmountByDays(thisAmount, rental, 2);
                }
                break;
            case 'NEW_RELEASE':
                thisAmount += rental.daysRented * 3;
                break;
            case 'CHILDRENS':
                thisAmount += 1.5;
                if (rental.daysRented > 3) {
                    thisAmount = this.calculateAmountByDays(thisAmount, rental, 3);
                }
                break;
        }
        return thisAmount;
    }

    private calculateAmountByDays(thisAmount: number, rental: Rental, days: number) {
        thisAmount += (rental.daysRented - days) * 1.5;
        return thisAmount;
    }
}
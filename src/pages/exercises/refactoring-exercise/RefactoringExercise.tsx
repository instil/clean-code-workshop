import {FC} from "react";
import Navbar from "../../../structure/navbar/Navbar";
import TypingCarot from "../../../structure/typing-carot/TypingCarot";
import "./RefactoringExercise.scss";

const RefactoringExercise: FC = () => {
    let output = "";
    class Movie {
        private priceCode: any;
        private title: any;

        constructor(title: any, priceCode: any) {
            this.title = title;
            this.priceCode = priceCode;
        }
    }

    class Rental {
        private movie: any;
        private daysRented: any;

        constructor(movie: any, daysRented: any) {
            this.movie = movie;
            this.daysRented = daysRented;
        }
    }

    class Customer {
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
            // add header lines
            result += '\nRental Record for ';
            result += this.name;
            result += '\n';
            for (let x = 0; x < this.rentals.length; x++) {
                let rental = this.rentals[x];
                // determine cost
                let thisAmount = 0;
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
                // determine points
                if ((rental.movie.priceCode === 'NEW_RELEASE') && rental.daysRented > 1) {
                    frequentRenterPoints += 2;
                } else {
                    frequentRenterPoints += 1;
                }
                // show figures for this rental
                result += '\t';
                result += rental.daysRented;
                result += '\t';
                result += rental.movie.title;
                result += '\t';
                result += thisAmount;
                result += '\n';
                // add cost of this rental to total cost
                totalAmount += thisAmount;
            }
            // add footer lines
            result += 'Amount owed is ';
            result += totalAmount;
            result += '\n';
            result += 'You earned ';
            result += frequentRenterPoints;
            result += ' frequent renter points\n';
            return result.toString();
        }
    }

    let peterPan = new Movie('Peter Pan', 'CHILDRENS');
    let theHulk = new Movie('The Hulk', 'REGULAR');
    let starWars = new Movie('Star Wars', 'REGULAR');
    let toyStory = new Movie('Toy Story', 'CHILDRENS');
    let drive = new Movie('Drive', 'NEW_RELEASE');

    let r1 = new Rental(peterPan, 2);
    let r2 = new Rental(theHulk, 1);
    let r3 = new Rental(starWars, 3);
    let r4 = new Rental(toyStory, 2);
    let r5 = new Rental(drive, 10);

    let customer = new Customer('Kieran Magee');
    customer.addRental(r1);
    customer.addRental(r2);
    customer.addRental(r3);
    customer.addRental(r4);
    customer.addRental(r5);

    output = customer.statement();

    return (
        <>
            <Navbar pageTitle="Refactoring Exercise"/>
            <div className="refactoring-exercise">
                <div className="refactoring-exercise__task">
                    <h3 className="refactoring-exercise__title">Task:</h3>
                    <p className="refactoring-exercise__description">
                        XtraVision2.0 has requested you to assist them with their new system which will print out statements for a customer.
                        <br/>It was wrote by an intern, taught by Matthew Wilson.
                        <br/>The code for printing customer statements is pure <span className="moms-spaghetti" onClick={() => window.open("https://www.youtube.com/watch?v=SW-BU6keEUw&ab_channel=JayGreen%27sstuff")}>spaghetti</span>.
                        <br/>Refactor the code in a clear and efficient way.
                    </p>

                </div>
                <h3 className="refactoring-exercise__sub-title">Customer Statement:</h3>
                <p className="refactoring-exercise__results">{output}</p>
                <TypingCarot/>
            </div>
        </>
    );
};

export default RefactoringExercise;

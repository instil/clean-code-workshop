import {FC} from "react";
import Navbar from "../../../../structure/navbar/Navbar";
import TypingCaret from "../../../../structure/typing-caret/TypingCaret";
import "./style/RefactoringExercise.scss";
import {Movie, PriceCode} from "../models/Movie";
import {Rental} from "../models/Rental";
import {Customer} from "../models/Customer";

function createMovie(title: string, priceCode: PriceCode): Movie {
    return {title, priceCode} as Movie;
}

function createRental(movie: Movie, daysRented: number): Rental {
    return {movie, daysRented} as Rental;
}

const RefactoringExercise: FC = () => {
    const peterPan = createMovie('Peter Pan', 'CHILDRENS');
    const theHulk = createMovie('The Hulk', 'REGULAR');
    const starWars = createMovie('Star Wars', 'REGULAR');
    const toyStory = createMovie('Toy Story', 'CHILDRENS');
    const drive = createMovie('Drive', 'NEW_RELEASE');

    const r1 = createRental(peterPan, 2);
    const r2 = createRental(theHulk, 1);
    const r3 = createRental(starWars, 3);
    const r4 = createRental(toyStory, 2);
    const r5 = createRental(drive, 10);

    const customer = new Customer('Kieran Magee');
    customer.addRentals([r1, r2, r3, r4, r5]);

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
                <p className="refactoring-exercise__results">{customer.statement()}</p>
                <TypingCaret/>
            </div>
        </>
    );
};

export default RefactoringExercise;

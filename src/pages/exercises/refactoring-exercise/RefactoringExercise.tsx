import {Component, FC} from "react";
import Navbar from "../../../structure/navbar/Navbar";
import TypingCaret from "../../../structure/typing-caret/TypingCaret";
import "./RefactoringExercise.scss";
import {Rental} from "./Rental";
import {Movie} from "./Movie";
import {Customer} from "./Customer";

class RefactoringExercise extends Component {
    render() {


        let peterPan = new Movie("Peter Pan", "CHILDRENS");
        let theHulk = new Movie("The Hulk", "REGULAR");
        let starWars = new Movie("Star Wars", "REGULAR");
        let toyStory = new Movie("Toy Story", "CHILDRENS");
        let drive = new Movie("Drive", "NEW_RELEASE");

        let r1 = new Rental(peterPan, 2);
        let r2 = new Rental(theHulk, 1);
        let r3 = new Rental(starWars, 3);
        let r4 = new Rental(toyStory, 2);
        let r5 = new Rental(drive, 10);

        let customer = new Customer("Kieran Magee");
        customer.addRental(r1);
        customer.addRental(r2);
        customer.addRental(r3);
        customer.addRental(r4);
        customer.addRental(r5);

        const output = customer.statement();

        return (
            <>
                <Navbar pageTitle="Refactoring Exercise"/>
                <div className="refactoring-exercise">
                    <div className="refactoring-exercise__task">
                        <h3 className="refactoring-exercise__title">Task:</h3>
                        <p className="refactoring-exercise__description">
                            XtraVision2.0 has requested you to assist them with their new system which will print out
                            statements for a customer.
                            <br/>It was wrote by an intern, taught by Matthew Wilson.
                            <br/>The code for printing customer statements is pure <span className="moms-spaghetti"
                                                                                         onClick={() => window.open("https://www.youtube.com/watch?v=SW-BU6keEUw&ab_channel=JayGreen%27sstuff")}>spaghetti</span>.
                            <br/>Refactor the code in a clear and efficient way.
                        </p>

                    </div>
                    <h3 className="refactoring-exercise__sub-title">Customer Statement:</h3>
                    <p className="refactoring-exercise__results">{output}</p>
                    <TypingCaret/>
                </div>
            </>
        );
    }
}

export default RefactoringExercise;

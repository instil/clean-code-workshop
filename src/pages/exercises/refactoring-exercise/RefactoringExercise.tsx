import {FC} from "react";
import Navbar from "../../../structure/navbar/Navbar";
import TypingCaret from "../../../structure/typing-caret/TypingCaret";
import "./RefactoringExercise.scss";
import {Rental} from "./Rental";
import {Movie} from "./Movie";
import {Customer} from "./Customer";
import {Price} from "./Price";

const RefactoringExercise: FC = () => {
    let customer = new Customer('Kieran Magee');
    customer.addRental(
        new Rental(new Movie('Peter Pan', Price.Childrens), 2),
        new Rental(new Movie('The Hulk', Price.Regular), 1),
        new Rental(new Movie('Star Wars', Price.Regular), 3),
        new Rental(new Movie('Toy Story', Price.Childrens), 2),
        new Rental(new Movie('Drive', Price.New_Release), 10)
    );
    let statement = customer.statement();

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
                <p className="refactoring-exercise__results">{statement}</p>
                <TypingCaret/>
            </div>
        </>
    );
};

export default RefactoringExercise;

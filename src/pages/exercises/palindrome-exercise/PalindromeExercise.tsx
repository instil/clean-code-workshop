import {FC} from "react";
import Navbar from "../../../structure/navbar/Navbar";
import TypingCaret from "../../../structure/typing-caret/TypingCaret";
import "./PalindromeExercise.scss";
import {solution} from "./PalindromeService";
import PalindromeIcon from "./PalindromeIcon";

const PalindromeExercise: FC = () => {
    return (
        <>
            <Navbar pageTitle="Palindrome Exercise"/>
            <div className="palindrome-exercise">
                <div className="palindrome-exercise__task">
                    <h3 className="palindrome-exercise__task__title">Task:</h3>
                    <p className="palindrome-exercise__task__description">
                        A huge nerd (Rory Armstrong) wants you to create a program that will detect whether phrases are a palindrome or not.
                        Fix up the service and implement a working solution.
                        <br/>Why can't Rory do it himself? He's too busy in the gym getting swole. #lazy #butNotLazy</p>
                    <PalindromeIcon/>
                </div>
                <h3 className="palindrome-exercise__sub-title">Your Answers:</h3>
                <pre className="palindrome-exercise__results">{solution()}</pre>
                <TypingCaret/>
            </div>
        </>
    );
};

export default PalindromeExercise;

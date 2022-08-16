import {FC} from "react";
import Navbar from "../../../structure/navbar/Navbar";
import "./SingleResponsibilityExercise.scss";
import TypingCaret from "../../../structure/typing-caret/TypingCaret";
import {buildData} from "./Data";

const commando = require("../../../assets/commando.png");
const conan = require("../../../assets/conan-the-barbarian.png");
const predator = require("../../../assets/predator.png");
const terminator1 = require("../../../assets/terminator1.png");
const terminator2 = require("../../../assets/terminator2.png");
const totalRecall = require("../../../assets/total-recall.png");

const SingleResponsibilityExercise: FC = () => {

    let [q6, q7, q8] = ["", "", ""];

    const data = buildData();

    function listAllTitles() {
        return data.map(movie => `${movie.title} `);
    }

    function listGreatTitles() {
        return data
            .filter(movie => movie.rating === "GREAT")
            .map(movie => `${movie.title} `);
    }

    function listMoviesFromYear(year: number) {
        return data
            .filter(movie => movie.releaseDate.getFullYear() === year)
            .map(movie => `${movie.title} - ${movie.rating} `);
    }

    function listAllQuotes() {
        return data
            .map(movie => `${movie.quotes}`)
            .join(" ");
    }

    function averageQuoteLength() {
        return "";
    }

    return (
        <>
            <Navbar pageTitle="Single Responsibility Exercise"/>
            <div className="single-responsibility-exercise">
                <div className="single-responsibility-exercise__task">
                    <h3 className="single-responsibility-exercise__title">Task:</h3>
                    <p className="single-responsibility-exercise__description">A crazed Arnold Schwarzenegger fan
                        (not Kieran Magee/Garth Gilmour) has asked you to list all
                        of the top Arnie movies and their details. Add the missing implementation to the code and
                        implement it in a clean way.</p>

                    <div className="single-responsibility-exercise__movie-posters">
                        <img src={conan}/>
                        <img src={terminator1}/>
                        <img src={commando}/>
                        <img src={predator}/>
                        <img src={totalRecall}/>
                        <img src={terminator2}/>
                    </div>

                </div>
                <h3 className="single-responsibility-exercise__sub-title">Your Answers:</h3>
                <ol className="single-responsibility-exercise__results">
                    <li>All the titles: <span>{listAllTitles()}</span></li>
                    <li>All the great movie titles: <span>{listGreatTitles()}</span></li>
                    <li>Title and rating of movies from 1984: <span>{listMoviesFromYear(1984)}</span></li>
                    <li>All the quotes: <span>{listAllQuotes()}</span></li>
                    {/*for finding the average quote utilise the meanBy function from lodash*/}
                    <li>Average quote length: <span>{averageQuoteLength()}</span></li>
                    <li>Movies from the 1980s: <span>{q6}</span></li>
                    <li>Movies from the 1990s: <span>{q7}</span></li>
                    {/*for grouping movies by rating utilise the groupBy function from lodash*/}
                    <li>Movies grouped by rating: <pre>{q8}</pre></li>
                </ol>
                <TypingCaret/>
            </div>
        </>
    );
};

export default SingleResponsibilityExercise;

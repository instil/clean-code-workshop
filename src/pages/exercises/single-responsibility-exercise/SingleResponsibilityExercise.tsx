import {FC} from "react";
import Navbar from "../../../structure/navbar/Navbar";
import "./SingleResponsibilityExercise.scss";
import TypingCaret from "../../../structure/typing-caret/TypingCaret";
import {Movie} from "./Movie";
const commando = require("../../../assets/commando.png");
const conan = require("../../../assets/conan-the-barbarian.png");
const predator = require("../../../assets/predator.png");
const terminator1 = require("../../../assets/terminator1.png");
const terminator2 = require("../../../assets/terminator2.png");
const totalRecall = require("../../../assets/total-recall.png");
import * as _ from "lodash";
import {buildData} from "./Data";

function isMovieInDecade(movie: Movie, decade: number): boolean {
    return movie.releaseDate.getFullYear() >= decade && movie.releaseDate.getFullYear() < decade + 10;
}

function toTitle(movie: Movie) {
    return movie.title;
}

const SingleResponsibilityExercise: FC = () => {
    let [q1, q2, q3, q4, q5, q6, q7, q8] = ["", "", "", "", "", "", "", ""];
    const movies = buildData();

    q1 = movies.map(it => it.title).join(" ");

    q2 = movies
        .filter(m => m.rating === "GREAT")
        .map(it => it.title)
        .join(" ");

    q3 = movies
        .filter(m => m.releaseDate.getFullYear() === 1984)
        .map(m => `${m.title} - ${m.rating}`)
        .join(" ");

    const allQuotes = movies.flatMap(m => m.quotes);
    q4 = allQuotes.join(" ");

    q5 = _.meanBy(allQuotes, quote => quote.length).toFixed(2);

    q6 = getMoviesByDecade(1980);

    q7 = getMoviesByDecade(1990);

    function getMoviesByDecade(year: number): string {
        return movies
            .filter(movie => isMovieInDecade(movie, year))
            .map(toTitle)
            .join(", ");
    }

    const moviesByRating = _.groupBy(movies, m => m.rating);
    q8 = Object.entries(moviesByRating)
        .map(([rating, movies]) => `${rating}:\n\t${movies.map(toTitle).join("\n\t")}`)
        .join('\n');

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
                    <li>All the titles: <span>{q1}</span></li>
                    <li>All the great movie titles: <span>{q2}</span></li>
                    <li>Title and rating of movies from 1984: <span>{q3}</span></li>
                    <li>All the quotes: <span>{q4}</span></li>
                    <li>Average quote length: <span>{q5}</span></li>
                    <li>Movies from the 1980s: <span>{q6}</span></li>
                    <li>Movies from the 1990s: <span>{q7}</span></li>
                    <li>Movies grouped by rating: <pre>{q8}</pre></li>
                </ol>
                <TypingCaret/>
            </div>
        </>
    );
};

export default SingleResponsibilityExercise;

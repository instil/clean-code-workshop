import {FC} from "react";
import Navbar from "../../../../structure/navbar/Navbar";
import "./SingleResponsibilityExercise.scss";
import TypingCaret from "../../../../structure/typing-caret/TypingCaret";
import {MovieListGenerator} from "../store/MovieListGenerator";
import {Movie} from "../models/Movie";
import _ from "lodash";

const commando = require("../../../../assets/commando.png");
const conan = require("../../../../assets/conan-the-barbarian.png");
const predator = require("../../../../assets/predator.png");
const terminator1 = require("../../../../assets/terminator1.png");
const terminator2 = require("../../../../assets/terminator2.png");
const totalRecall = require("../../../../assets/total-recall.png");

function fromYear(movie: Movie, year: number) {
    return movie.releaseDate.getFullYear() === year;
}

function fromDecade(year: number, decade: number) {
    return year > decade - 1 && year < decade + 10;
}

const SingleResponsibilityExercise: FC = () => {
    const movieListGenerator = new MovieListGenerator();
    const movies = movieListGenerator.generateMovies();

    const q1 = movies
        .map(movie => movie.title)
        .join(", ");

    const q2 = movies
        .filter(movie => movie.rating === "GREAT")
        .map(movie => movie.title)
        .join(", ");

    const q3 = movies
        .filter(movie => fromYear(movie, 1984))
        .map(movie => `${movie.title}: ${movie.rating}`)
        .join(", ");

    const allQuotes = movies
        .flatMap(movie => movie.quotes);

    const q4 = allQuotes
        .map(q => `"${q}"`)
        .join(", ");

    const q5 = _.meanBy(allQuotes, (q) => q.length)
        .toFixed(2)
        .toString();

    const q6 = movies
        .filter(movie => fromDecade(movie.releaseDate.getFullYear(), 1980))
        .map(movie => `${movie.title}: ${movie.releaseDate.getFullYear()}`)
        .join("; ");

    const q7 = movies
        .filter(movie => fromDecade(movie.releaseDate.getFullYear(), 1990))
        .map(movie => `${movie.title}: ${movie.releaseDate.getFullYear()}`)
        .join("; ");

    const q8 = _(movies)
        .groupBy(movie => movie.rating)
        .map((movies, rating) => `${rating}: ${movies.map(movie => movie.title)}\n`)
        .join(" ");

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
                    {/*for finding the average quote utilise the meanBy function from lodash*/}
                    <li>Average quote length: <span>{q5}</span></li>
                    <li>Movies from the 1980s: <span>{q6}</span></li>
                    <li>Movies from the 1990s: <span>{q7}</span></li>
                    {/*for grouping movies by rating utilise the groupBy function from lodash*/}
                    <li>Movies grouped by rating: <pre>{q8}</pre></li>
                </ol>
                <TypingCaret/>
            </div>
        </>
    )
};

export default SingleResponsibilityExercise;

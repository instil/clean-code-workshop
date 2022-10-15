import {FC} from "react";
import Navbar from "../../../structure/navbar/Navbar";
import "./SingleResponsibilityExercise.scss";
import TypingCaret from "../../../structure/typing-caret/TypingCaret";
import {buildMovies} from "./Data";
import {groupBy, meanBy} from "lodash";
import {Movie} from "./Movie";

const commando = require("../../../assets/commando.png");
const conan = require("../../../assets/conan-the-barbarian.png");
const predator = require("../../../assets/predator.png");
const terminator1 = require("../../../assets/terminator1.png");
const terminator2 = require("../../../assets/terminator2.png");
const totalRecall = require("../../../assets/total-recall.png");

const SingleResponsibilityExercise: FC = () => {
    const movies = buildMovies();

    function toPrintStatement(input: string[]) {
        return input.join(" ");
    }

    function getAllMovieTitles(): string[] {
        return movies.map(movie => movie.title);
    }

    function getAllGreatMovieNames(): string[] {
        return movies
            .filter(movie => movie.rating === "GREAT")
            .map(movie => movie.title);
    }

    function getTitleAndRatingOfMoviesFrom1984(): string[] {
        return movies
            .filter(movie => movie.releaseDate.getFullYear() === 1984)
            .map(movie => `${movie.title}\t${movie.rating}`);
    }

    function getAllQuotes(): string[] {
        return movies.flatMap(movie => `"${movie.quotes}"\t`);
    }

    function getAverageQuoteLength() : string {
        return meanBy(movies.flatMap(movie => movie.quotes), movie => movie.length).toFixed(2);
    }

    function getMoviesFromDecade(decade: number): string[] {
        return movies
            .filter(movie => movie.releaseDate.getFullYear().toString().split("")[2] === decade.toString().split("")[2])
            .map(movie => movie.title);
    }

    function getMoviesGroupedByRating(): string {
        return Object.entries(groupBy(movies, movie => movie.rating))
            .map(([rating, ms]) => `${rating}: ${ms.map(movie => movie.title).join(",\t")}`)
            .join("\n");
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
                    <li>All the titles: <span>{toPrintStatement(getAllMovieTitles())}</span></li>
                    <li>All the great movie titles: <span>{toPrintStatement(getAllGreatMovieNames())}</span></li>
                    <li>Title and rating of movies from 1984: <span>{toPrintStatement(getTitleAndRatingOfMoviesFrom1984())}</span></li>
                    <li>All the quotes: <span>{toPrintStatement(getAllQuotes())}</span></li>
                    {/*for finding the average quote utilise the meanBy function from lodash*/}
                    <li>Average quote length: <span>{getAverageQuoteLength()}</span></li>
                    <li>Movies from the 1980s: <span>{toPrintStatement(getMoviesFromDecade(1980))}</span></li>
                    <li>Movies from the 1990s: <span>{toPrintStatement(getMoviesFromDecade(1990))}</span></li>
                    {/*for grouping movies by rating utilise the groupBy function from lodash*/}
                    <li>Movies grouped by rating: <pre>{getMoviesGroupedByRating()}</pre></li>
                </ol>
                <TypingCaret/>
            </div>
        </>
    );
};

export default SingleResponsibilityExercise;

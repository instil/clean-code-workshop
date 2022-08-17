import {FC} from "react";
import Navbar from "../../../structure/navbar/Navbar";
import "./SingleResponsibilityExercise.scss";
import TypingCaret from "../../../structure/typing-caret/TypingCaret";
//import {Movie} from "./Movie"
import * as _ from "lodash";

const commando = require("../../../assets/commando.png");
const conan = require("../../../assets/conan-the-barbarian.png");
const predator = require("../../../assets/predator.png");
const terminator1 = require("../../../assets/terminator1.png");
const terminator2 = require("../../../assets/terminator2.png");
const totalRecall = require("../../../assets/total-recall.png");

const SingleResponsibilityExercise: FC = () => {


    let [q1, q2, q3, q4, q5, q6, q7, q8] = ["", "", "", "", "", "", "", ""];

    //
    // const movies = buildData();
    // // let listOfMovieTitles = "";
    // // for (let i = 0; i < data.length; i++) {
    // //     listOfMovieTitles += data[i].title + " ";
    // // }
    // // q1 = listOfMovieTitles;
    //
    // q1 = movies.map(it => it.title).join(" ");
    // let listOfGreatMovies = "";
    // for(let i =0; i< data.length; i++){
    //     if(data[i].rating == "GREAT"){
    //         listOfGreatMovies += data[i].title + " ";
    //     }
    // }
    // q2 =listOfGreatMovies;
    // let listOf1984Movies = "";
    // for(let i =0; i< data.length; i++){
    //     if(data[i].releaseDate.getFullYear() == 1984){
    //         listOf1984Movies += data[i].title + " ";
    //     }
    // }
    // q3 = listOf1984Movies;
    //
    // let listOfAllQuotes = "";
    // for(let i =0; i< data.length; i++){
    //     for(let j =0; j< data[i].quotes.length; j++){
    //         listOfAllQuotes += data[i].quotes[j] + " ";
    // }}
    // q4 = listOfAllQuotes;


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
    );
};

export default SingleResponsibilityExercise;

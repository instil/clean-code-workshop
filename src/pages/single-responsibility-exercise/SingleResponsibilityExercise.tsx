import {FC} from "react";
import Navbar from "../../structure/navbar/Navbar";
import "./SingleResponsibilityExercise.scss";
import TypingCarot from "../../structure/typing-carot/TypingCarot";

const commando = require("../../assets/commando.png");
const conan = require("../../assets/conan-the-barbarian.png");
const predator = require("../../assets/predator.png");
const terminator1 = require("../../assets/terminator1.png");
const terminator2 = require("../../assets/terminator2.png");
const totalRecall = require("../../assets/total-recall.png");

const SingleResponsibilityExercise: FC = () => {
    class Movie {
        constructor(
            public readonly title: string,
            public readonly rating: string,
            public readonly releaseDate: Date,
            public readonly quotes: string[]
        ) {
        }
    }

    let [q1, q2, q3, q4, q5, q6, q7, q8] = ['', '', '', '', '', '', '', ''];

    function buildData() {
        const movies = [
            new Movie("Conan", "GREAT",
                new Date(1984, 6, 29),
                ["Enough talk!"]),
            new Movie("Terminator",
                "GREAT",
                new Date(1984, 10, 26),
                ["I'll be back."]),
            new Movie("Terminator 2",
                "BRILLIANT",
                new Date(1991, 7, 3),
                ["Come with me if you want to live.",
                    "Hasta la vista, baby.",
                    "It's in your nature to destroy yourselves."]),
            new Movie("Commando",
                "SUPERB",
                new Date(1984, 10, 4),
                ["I have to remind you Sully, this is my weak arm!",
                    "I eat Green Berets for breakfast. And right now, I'm very hungry!",
                    "Don't disturb my friend, he's dead tired.",
                    "Come on Bennett, let's party!",
                    "Let off some steam, Bennett."]),
            new Movie("Predator",
                "LIFE_CHANGING",
                new Date(1987, 6, 12),
                ["Get to the Chopper!",
                    "Stick around.",
                    "If it bleeds, we can kill it.",
                    "He's using the trees.",
                    "We move, five meter spread, no sound."]),
            new Movie("Total Recall",
                "GREAT",
                new Date(1990, 6, 1),
                ["Get your ass to Mars.",
                    "Relax. You'll live longer.",
                    "If I am not me, then who the hell am I?",
                    "Look who's talking."])
        ];
        return movies;
    }

    const data = buildData();
    let listOfMovieTitles = "";
    for (let i = 0; i < data.length; i++) {
        listOfMovieTitles += data[i].title + " ";
    }
    q1 = listOfMovieTitles;
    return (
        <>
            <Navbar pageTitle="Single Responsibility Exercise"/>
            <div className="single-responsibility-exercise">
                {/*add carousel to display images*/}
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
                <TypingCarot/>
            </div>
        </>
    )
};

export default SingleResponsibilityExercise;

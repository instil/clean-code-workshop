import {FC, useState} from "react";
import {dickens} from "./Dickens";
import Navbar from "../../../structure/navbar/Navbar";
import TypingCarot from "../../../structure/typing-carot/TypingCarot";
import {countWords} from "./service/UniqueWordsProcessor";
import "./UniqueWordsExercise.scss";

const UniqueWordsExercise: FC = () => {
    const [input, setInput] = useState(dickens);
    const [output, setOutput] = useState([""]);

    function execute(): void {
        const wordCounts = countWords(input);
        setOutput(wordCounts);
    }

    return (
        <>
            <Navbar pageTitle="Unique Words Exercise"/>
            <div className="unique-words-exercise">
                <div className="unique-words-exercise__task">
                    <h3 className="unique-words-exercise__title">Task:</h3>
                    <p className="unique-words-exercise__description">Count how many unique words there are:</p>
                    <p className="unique-words-exercise__quotes">{}</p>
                    <textarea data-testid="input-text"
                              cols={150}
                              rows={20}
                              value={input}
                              onChange={e => setInput(e.target.value)}/>
                </div>
                <button className="process-button" onClick={execute}>Process</button>
                <h3 className="unique-words-exercise__sub-title">Output:</h3>
                <p className="unique-words-exercise__results">
                    <p>{output.map(it => {
                        if (!it) return <TypingCarot/>
                        else return <p key={it}>{it}</p>
                    })}</p>
                </p>
            </div>
        </>
    );
}

export default UniqueWordsExercise;

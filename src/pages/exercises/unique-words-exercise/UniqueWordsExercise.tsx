import {FC, useState} from "react";
import {dickens} from "./Dickens";
import Navbar from "../../../structure/navbar/Navbar";
import TypingCaret from "../../../structure/typing-caret/TypingCaret";
import "./UniqueWordsExercise.scss";

export function uniqueWords(text: string): Map<string, number> {
    let wordMap = new Map<string, number>();

    let wordArray = text.split(" ");
    for (const word of wordArray) {
        if (wordMap.has(word)) {
            const wordCount = wordMap.get(word);
            wordMap.set(word, wordCount!+1);
        } else {
            wordMap.set(word, 1);
        }
    }

    return wordMap;
}



const UniqueWordsExercise: FC = () => {
    const [input, setInput] = useState(dickens);
    const [output, setOutput] = useState([""]);

    function execute() {
        let uniqueWordsMap = uniqueWords(input);
        let outputString = "";
        for (let key in uniqueWordsMap.keys()) {
            outputString += `${key}: ${uniqueWordsMap.get(key)}`
            console.log(key + ": " + uniqueWordsMap.get(key));
        }

        // Examples
        // "The the the a a" would produce
        // `
        // the = 3
        // a = 2
        // `
        // Not the case-insensitive result
        //
        // "When in Rome, do as the Romans do."
        // `
        // do = 2
        // when = 1
        // in = 1
        // rome = 1
        // as = 1
        // the = 1
        // `
        // Note, sorted by occurrence

        setOutput([])
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
                        if (!it) return <TypingCaret/>
                        else return <p key={it}>{it}</p>
                    })}</p>
                </p>
            </div>
        </>
    );
}

export default UniqueWordsExercise;

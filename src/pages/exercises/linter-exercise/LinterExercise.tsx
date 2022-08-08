import {FC} from "react";
import Navbar from "../../../structure/navbar/Navbar";
import TypingCaret from "../../../structure/typing-caret/TypingCaret";
import "./LinterExercise.scss";

const LinterExercise: FC = () => {
    return (
        <>
            <Navbar pageTitle="Linter Exercise"/>
            <div className="linter-exercise">
                <div className="linter-exercise__task">
                    <h3 className="linter-exercise__task__title">Task:</h3>
                    <p className="linter-exercise__task__description">
                        As discussed in the slides, the linter is a great tool for developers as it helps keep code clean and consistent. <br/>
                        Your task is to set up the linter.

                        <br/>
                        <br/>
                        <br/>
                        Steps:
                        <ol>
                            <li>Import the linter package
                                <ul>Add the following packages to the `package.json` file:</ul>
                                <ul>"eslint": "^8.1.0"</ul>
                                <ul>"eslint-plugin-import": "^2.25.4"</ul>
                            </li>

                            <li>Create an .eslintrc.json file in the root of the project (this will have been done for you)
                            </li>
                            <li>Adjust the rules to display and error when:
                                <ul>There are missing semi colons</ul>
                                <ul>There is console output (console.log)</ul>
                                <ul>There are single quotes in import statements</ul>
                                <ul>There is more than 1 space on a line</ul>
                            </li>
                            <li>Add a linting command to package.json
                                <ul>"lint": "eslint . --ext .ts, --ext .tsx"</ul>
                            </li>
                            <li>In the IntelliJ terminal, run `yarn lint` & resolve any errors</li>
                        </ol>
                    </p>
                </div>
                <TypingCaret/>
            </div>
        </>
    );
}

export default LinterExercise;

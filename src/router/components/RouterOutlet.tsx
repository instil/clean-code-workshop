import {FC} from "react";
import {Route, Switch} from "react-router-dom";
import SingleResponsibilityExercise from "../../pages/exercises/single-responsibility-exercise/SingleResponsibilityExercise";
import Menu from "../../pages/menu/Menu";
import {
    PALINDROME_EXERCISE,
    SINGLE_RESPONSIBILITY_EXERCISE,
    GILDED_ROSE_EXERCISE,
    UNIQUE_WORDS_EXERCISE,
    REFACTORING_EXERCISE, LINTER_EXERCISE
} from "../models/Routes";
import NotFound from "../../pages/not-found/NotFound";
import PalindromeExercise from "../../pages/exercises/palindrome-exercise/PalindromeExercise";
import GildedRoseExercise from "../../pages/exercises/gilded-rose-exercise/GildedRoseExercise";
import UniqueWordsExercise from "../../pages/exercises/unique-words-exercise/UniqueWordsExercise";
import RefactoringExercise from "../../pages/exercises/refactoring-exercise/RefactoringExercise";
import LinterExercise from "../../pages/exercises/linter-exercise/LinterExercise";

const RouterOutlet: FC = () => {
    return (
        <Switch>
            <Route exact path={"/"} component={Menu}/>
            <Route exact path={PALINDROME_EXERCISE} component={PalindromeExercise}/>
            <Route exact path={SINGLE_RESPONSIBILITY_EXERCISE} component={SingleResponsibilityExercise}/>
            <Route exact path={GILDED_ROSE_EXERCISE} component={GildedRoseExercise}/>
            <Route exact path={UNIQUE_WORDS_EXERCISE} component={UniqueWordsExercise}/>
            <Route exact path={REFACTORING_EXERCISE} component={RefactoringExercise}/>
            <Route exact path={LINTER_EXERCISE} component={LinterExercise}/>
            <Route component={NotFound}/>
        </Switch>
    );

};

export default RouterOutlet;

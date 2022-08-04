import {FC} from "react";
import {Route, Switch} from "react-router-dom";
import SingleResponsibilityExercise from "../../pages/single-responsibility-exercise/SingleResponsibilityExercise";
import CalculatorExercise from "../../pages/calculator-exercise/CalculatorExercise";
import Menu from "../../pages/menu/Menu";
import {CALCULATOR_EXERCISE, PALINDROME_EXERCISE, SINGLE_RESPONSIBILITY_EXERCISE} from "../models/Routes";
import NotFound from "../../pages/not-found/NotFound";
import PalindromeExercise from "../../pages/palindrome-exercise/PalindromeExercise";

const RouterOutlet: FC = () => {
    return (
        <Switch>
            <Route exact path={"/"} component={Menu}/>
            <Route exact path={PALINDROME_EXERCISE} component={PalindromeExercise}/>
            <Route exact path={CALCULATOR_EXERCISE} component={CalculatorExercise}/>
            <Route exact path={SINGLE_RESPONSIBILITY_EXERCISE} component={SingleResponsibilityExercise}/>
            <Route component={NotFound}/>
        </Switch>
    );

};

export default RouterOutlet;

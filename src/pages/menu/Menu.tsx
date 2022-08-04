import {FC} from "react";
import {useHistory} from "react-router-dom";
import {CALCULATOR_EXERCISE, PALINDROME_EXERCISE, SINGLE_RESPONSIBILITY_EXERCISE} from "../../router/models/Routes";
import "./Menu.scss";
import InstilLogo from "../../structure/ascii-art/InstilLogo";
import GoogleSearchPrompt from "../../structure/google-search-prompt/GoogleSearchPrompt";

const Menu: FC = () => {
    const history = useHistory();
    const goToUrl = (url: string): void => {
        history.push(url)
    }

    return (
        <div className="menu">
            <h1 className="menu__title">Exercise Menu</h1>
            <ol className="menu__exercises">
                <li onClick={() => goToUrl(CALCULATOR_EXERCISE)}>Calculator Exercise</li>
                <li onClick={() => goToUrl(PALINDROME_EXERCISE)}>Palindrome Exercise</li>
                <li onClick={() => goToUrl(SINGLE_RESPONSIBILITY_EXERCISE)}>Single Responsibility Exercise</li>
                <li>Gilded Rose</li>
                <li>Dependency Injection</li>
            </ol>
            {/*<TypingCarot/>*/}
            <GoogleSearchPrompt/>
            <InstilLogo/>
        </div>
    )
}

export default Menu;

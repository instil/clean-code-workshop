import {FC} from "react";
import {useHistory} from "react-router-dom";
import {
    CALCULATOR_EXERCISE,
    GILDED_ROSE_EXERCISE,
    PALINDROME_EXERCISE,
    SINGLE_RESPONSIBILITY_EXERCISE,
    REFACTORING_EXERCISE,
    UNIQUE_WORDS_EXERCISE
} from "../../router/models/Routes";
import "./Menu.scss";
import InstilLogo from "../../structure/ascii-art/InstilLogo";
import GoogleSearchPrompt from "../../structure/google-search-prompt/GoogleSearchPrompt";
import TypingCarot from "../../structure/typing-carot/TypingCarot";
import Footer from "../../structure/footer/Footer";

const Menu: FC = () => {
    const history = useHistory();
    const goToUrl = (url: string): void => {
        history.push(url)
    }

    return (
        <div className="menu">
            <h1 className="menu__title">Exercise Menu</h1>
            <ol className="menu__exercises">
                {/*<li onClick={() => goToUrl(CALCULATOR_EXERCISE)}>Calculator Exercise</li>*/}
                <li onClick={() => goToUrl(REFACTORING_EXERCISE)}>Refactoring Exercise</li>
                <li onClick={() => goToUrl(SINGLE_RESPONSIBILITY_EXERCISE)}>Single Responsibility Exercise</li>
                <li onClick={() => goToUrl(PALINDROME_EXERCISE)}>Palindrome Exercise</li>
                <li onClick={() => goToUrl(UNIQUE_WORDS_EXERCISE)}>Unique Words Exercise</li>
                <li onClick={() => goToUrl(GILDED_ROSE_EXERCISE)}>Gilded Rose Exercise</li>
                <li>Dependency Injection Exercise</li>
            </ol>
            {/*<TypingCarot/>*/}
            <GoogleSearchPrompt/>
            <InstilLogo/>
            <Footer/>
        </div>
    )
}

export default Menu;

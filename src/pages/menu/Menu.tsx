import {FC} from "react";
import {useHistory} from "react-router-dom";
import {CALCULATOR_EXERCISE, SINGLE_RESPONSIBILITY_EXERCISE} from "../../router/models/Routes";
import "./Menu.scss";

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
                <li onClick={() => goToUrl(SINGLE_RESPONSIBILITY_EXERCISE)}>Single Responsibility Exercise</li>
                <li>Some exercise</li>
            </ol>
            <div className="typing-carot"/>
        </div>
    )
}

export default Menu;

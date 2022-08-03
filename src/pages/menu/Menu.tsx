import {FC} from "react";
import {useHistory} from "react-router-dom";
import {CALCULATOR_EXERCISE, SINGLE_RESPONSIBILITY_EXERCISE} from "../../router/models/Routes";

const Menu: FC = () => {
    const history = useHistory();

    const goToUrl = (url: string): void => {history.push(url);}

    return (
        <>
            <ol>
                <li onClick={() => goToUrl(CALCULATOR_EXERCISE)}>Calculator Exercise</li>
                <li onClick={() => goToUrl(SINGLE_RESPONSIBILITY_EXERCISE)}>Single Responsibility Exercise</li>
            </ol>
        </>
    )
}

export default Menu;

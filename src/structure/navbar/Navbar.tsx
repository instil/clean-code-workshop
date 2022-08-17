import {FC} from "react";
import "./Navbar.scss";
import {useHistory} from "react-router-dom";

interface Props {
    pageTitle: string
}

const Navbar: FC<Props> = ({pageTitle}) => {
    const history = useHistory();
    const goToUrl = (url: string): void => {
        history.push(url);
    };

    return (
        <div className="navbar">
            <h1 className="navbar__page-title">{pageTitle}</h1>
            <h1 className="navbar__back-to-menu" onClick={() => goToUrl("/")}>Back to menu</h1>
        </div>
    );
};

export default Navbar;

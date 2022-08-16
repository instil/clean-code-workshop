import {FC} from "react";
import "./NotFound.scss";
import {useHistory} from "react-router-dom";
const image = require("../../assets/didnt-say-the-magic-word.gif");
const sound = require("./didnt-say-the-magic-word.mp3");

const NotFound: FC = () => {
    const history = useHistory();
    const goToUrl = (url: string): void => {
        history.push(url);
    };

    return (
        <div className="not-found">
            <div className="not-found__body">
                <img src={image} alt={"dennis-nedry"}/>
                <h1 className="not-found__body__message">Page Not Found!</h1>
                <h1 className="not-found__body__message">Ah, ah, ah - You didn't say the magic word!</h1>
                {/* mp3 file has to be fetched from this folder only - permissions error occurs when accessing from assets folder*/}
                <audio controls={true} autoPlay={true} loop={true}>
                    <source type="audio/mp3" src={sound}/>
                </audio>

                <h1 className="not-found__back-to-menu" onClick={() => goToUrl("/")}>
                    Back to menu
                </h1>
            </div>
        </div>
    );
};

export default NotFound;

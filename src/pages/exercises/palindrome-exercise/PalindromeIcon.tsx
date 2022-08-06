import {FC} from "react";
import "./PalindromeIcon.scss";

const PalindromeIcon: FC = () => {
    return (
        <pre className="palindrome-icon">
            <p>      ____  ___   _____________________    ____ </p>
            <p>     / __ \/   | / ____/ ____/ ____/   |  / __ \</p>
            <p>    / /_/ / /| |/ /   / __/ / /   / /| | / /_/ /</p>
            <p>   / _, _/ ___ / /___/ /___/ /___/ ___ |/ _, _/ </p>
            <p>  /_/ |_/_/  |_\____/_____/\____/_/  |_/_/ |_|  </p>
        </pre>
    );
}

export default PalindromeIcon;

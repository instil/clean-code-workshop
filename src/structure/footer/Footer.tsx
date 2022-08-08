import {FC} from "react";
import "./Footer.scss";

const Footer: FC = () => {
    return <div className="footer">
        <p>By <span className="linkedIn" onClick={() =>  window.open("https://www.linkedin.com/in/kieranmagee93/")}>Kieran Magee</span> - © 2022 Instil Software</p>
    </div>;
}

export default Footer;

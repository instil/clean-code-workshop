/* eslint-disable react/jsx-no-comment-textnodes */
import {FC} from "react";
import "./Rose.scss";

const Rose: FC = () => {
    return (
        <pre className="rose">
            <code>{`
          __
     _   / /|
    |\\\\  \\/_/
    \\_\\| / __              
       \\/_/__\\           .-=='/~\\
____,__/__,_____,______)/   /{~}}}
-,------,----,-----,---,\\'-' {{~}}
                         '-==.\\}/
            `}</code>
        </pre>

    );
};

export default Rose;

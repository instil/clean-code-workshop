import {FC, useState} from "react";
import "./GoogleSearchPrompt.scss";

const GoogleSearchPrompt: FC = () => {
    const [getInput, setInput] = useState("");
    const onChange = (e: React.FormEvent<HTMLInputElement>): void => setInput(e.currentTarget.value);

    return (
        <form className="text-input"
              action="http://www.google.com/search"
              method="get"
              target={"_blank"}>
            <input className="text-input"
                   type="text"
                   name="q"
                   value={getInput}
                   onChange={onChange}
                   autoFocus={true}/>
        </form>
    );
};

export default GoogleSearchPrompt;

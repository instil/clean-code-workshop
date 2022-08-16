import React, {FC} from "react";
import RouterOutlet from "./router/components/RouterOutlet";
import {BrowserRouter as Router} from "react-router-dom";

const App: FC = () => (
    <Router>
        <RouterOutlet/>
    </Router>
);

export default App;

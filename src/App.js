import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Main from "./Pages/Main";
import Sub from './Pages/Sub';

const App = () => {
    return (
        <Router>
            <div style={{textAlign: 'center'}}>
                <Switch>
                    <Route path="/sub">
                        <Sub />
                    </Route>
                    <Route path="/">
                        <Main onChange={() => window.location.href = "/sub"}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
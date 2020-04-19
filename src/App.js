import React from 'react';
import Home from "./components/Home";
import Give from "./components/give";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
    Scroll,
} from 'react-router-dom';
import LogIn from "./components/Logging/LogIn";
import SignUp from "./components/Logging/SignUp";
import LogOut from "./components/Logging/LogOut";

function App() {
    return (
        <HashRouter>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path={"/zaloguj"}>
                <LogIn/>
            </Route>
            <Route path={"/rejestracja"}>
                <SignUp/>
            </Route>
            <Route path={"/wyloguj"}>
                <LogOut/>
            </Route>
            <Route path={"/oddaj"}>
                <Give/>
            </Route>
        </HashRouter>
    )
}

export default App;

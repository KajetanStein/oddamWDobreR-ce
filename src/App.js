import React from 'react';
import Home from "./components/Home";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
    Scroll,
} from 'react-router-dom';
import LogIn from "./components/Logging/LogIn";

function App() {
  return (
      <HashRouter>
        <Route exact path="/">
          <Home/>
          {/*<LogIn/>*/}
        </Route>
          {/*<Route path="/login">*/}
          {/*    <LogIn/>*/}
          {/*</Route>*/}
</HashRouter>
)}

export default App;

import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import movie from "../Screens/movie"
import Tv from "../Screens/Tv"
import Search from "../Screens/Search"
import Header from "./Header";

const Routing = () => (
    <Router>

        <>
            <Header />
            <Switch>
            <Route path={"/"} exact component={movie} />
            <Route path={"/tv"} exact component={Tv} />
            <Route path={"/search"} exact component={Search} />
            <Redirect from={"*"} to={"/"} />

            </Switch>
        </>
    </Router>
);

export default Routing;

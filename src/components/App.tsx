import * as React from "react";
import { hot } from "react-hot-loader";
import Profile from "./profile/Profile";
import "../sass/reset.scss";
import "../sass/base.scss";
import "./App.scss";

class App extends React.Component {
    public render(): React.ReactNode {
        return <>
            <Profile/>
        </>;
    }
}

export default hot(module)(App);
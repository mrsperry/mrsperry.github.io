import * as React from "react";
import { hot } from "react-hot-loader";
import { HashRouter, Route, Switch } from "react-router-dom";
import Profile from "./profile/Profile";
import Portfolio from "./portfolio/Portfolio";
import Games from "./games/Games";
import Visuals from "./visuals/Visuals";
import "../sass/reset.scss";
import "../sass/base.scss";
import "./App.scss";

class App extends React.PureComponent {
    public static updateHash(hash: string): any {
        window.location.hash = "#" + hash;
    }

    // Only update the view when the hash changes
    public componentDidMount(): void {
        window.addEventListener("hashchange", () => this.forceUpdate(), false);
    }

    public render(): React.ReactNode {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/portfolio">
                        <Portfolio/>
                    </Route>
                    <Route path="/games">
                        <Games/>
                    </Route>
                    <Route path="/visuals">
                        <Visuals/>
                    </Route>
                    <Route path="/">
                        <Profile/>
                    </Route>
                </Switch>
            </HashRouter>
        );
    }
}

export default hot(module)(App);
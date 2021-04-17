import * as React from "react";
import { hot } from "react-hot-loader";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navigation from "./common/Navigation";
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
        // Get the window hash and determine the view to display
        const hash: string = window.location.hash;
        const view: string = hash.substring(hash.indexOf("#") + 1).toLowerCase();

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

        /*switch (view) {
            case "":
            case "profile":
                return <Profile/>;
            case "portfolio":
                return <>
                    <Navigation view={view}/>
                    <Portfolio/>
                </>;
            case "games":
                return <>
                    <Navigation view={view}/>
                    <Games/>
                </>;
            case "visuals":
                return <>
                    <Navigation view={view}/>
                    <Visuals/>
                </>;
            default:
                // Reset the hash if it is invalid
                window.location.hash = "";
                return null;
        }*/
    }
}

export default hot(module)(App);
import * as React from "react";
import { hot } from "react-hot-loader";
import Navigation from "./common/Navigation";
import Profile from "./profile/Profile";
import Games from "./games/Games";
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

        switch (view) {
            case "":
            case "profile":
                return <Profile/>;
            case "games":
                return <>
                    <Navigation view={view}/>
                    <Games/>
                </>;
            default:
                // Reset the hash if it is invalid
                window.location.hash = "";
                return null;
        }
    }
}

export default hot(module)(App);
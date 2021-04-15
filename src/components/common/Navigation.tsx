import * as React from "react";
import "./Navigation.scss";

interface INavigation {
    view: string;
}

export default class Navigation extends React.PureComponent<INavigation> {
    public render(): React.ReactNode {
        // List of all navigation items
        const items: string[] = ["Home", "Portfolio", "Games", "Visuals"];

        const jsx: React.ReactElement[] = [];
        for (let index = 0; index < items.length; index++) {
            const item = items[index];
            const id = item.toLowerCase();

            // Check if the current item is the page that is displayed
            let link: React.ReactElement;
            if (this.props.view === id) {
                link = <a className="active">{item}</a>;
            } else {
                link = <a href={"#" + id}>{item}</a>
            }

            jsx.push(<li key={index}>{link}</li>);
        }

        return (
            <nav className="navigation">
                <ul>{jsx}</ul>
            </nav>
        );
    }
}
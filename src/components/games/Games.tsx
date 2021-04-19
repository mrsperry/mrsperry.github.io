import * as React from "react";
import ProjectDisplay from "../common/ProjectDisplay";
import GameData from "../../assets/data/games.json";
import Navigation from "../common/Navigation";
import { fadeInElements } from "../utils";
import "./Games.scss";

export default class Games extends React.PureComponent {
    public componentDidMount(): void {
        fadeInElements(document.getElementsByClassName("project"), 100);
    }

    public render(): React.ReactNode {
        return <>
            <Navigation view="games"/>
            <section className="games">
                <ProjectDisplay
                    title="Browser Games"
                    data={GameData}
                    assetFolder="games"/>
            </section>
        </>;
    }
}
import * as React from "react";
import ProjectDisplay from "../common/ProjectDisplay";
import GameData from "../../assets/data/games.json";

export default class Games extends React.PureComponent {
    public render(): React.ReactNode {
        return (
            <section className="games">
                <ProjectDisplay
                    title="Browser Games"
                    data={GameData}
                    assetFolder="games"/>
            </section>
        );
    }
}
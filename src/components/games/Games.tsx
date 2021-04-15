import * as React from "react";
import ProjectDisplay from "../common/ProjectDisplay";
import "./Games.scss";

export default class Games extends React.PureComponent {
    public render(): React.ReactNode {
        return (
            <section className="games">
                <h1>Browser Games</h1>
                <ProjectDisplay
                    name="Overseer"
                    description="An incremental virus scanner experience"
                    url="../overseer"
                    folder="games"/>
                <ProjectDisplay
                    name="Fishing Enterprises"
                    description="An idle/incremental fishing business management simulator"
                    url="../fishing-enterprises"
                    folder="games"/>
                <ProjectDisplay
                    name="Asteroids"
                    description="A remake of the classic Atari game"
                    url="../asteroids"
                    folder="games"/>
            </section>
        );
    }
}
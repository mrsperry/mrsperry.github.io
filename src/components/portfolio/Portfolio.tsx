import * as React from "react";
import ProjectDisplay from "../common/ProjectDisplay";
import "./Portfolio.scss";

export default class Portfolio extends React.Component {
    public render(): React.ReactNode {
        return (
            <section className="portfolio">
                <h1>Personal Projects</h1>
                <ProjectDisplay
                    name="CyntraSafe"
                    description="A modern cybersecurity business site"
                    url="../projects/cyntrasafe"
                    folder="portfolio"/>
            </section>
        );
    }
}
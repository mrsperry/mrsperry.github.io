import * as React from "react";
import "./ProjectDisplay.scss";

interface IProject {
    name: string;
    description: string;
    url: string;
    folder: string;
}

export default class ProjectDisplay extends React.PureComponent<IProject> {
    public render(): React.ReactNode {
        const name: string = this.props.name.toLowerCase().replace(" ", "-");
        const file: string = this.props.folder + "/" + name + ".jpg";
        const image = require("../../assets/images/" + file);

        return (
            <a href={this.props.url} className="project-display image-link">
                <figure title={this.props.name}>
                    <img src={image}/>
                    <figcaption>
                        <span className="title">{this.props.name}</span>
                        <span className="description">{this.props.description}</span>
                    </figcaption>
                </figure>
            </a>
        );
    }
}
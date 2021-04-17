import * as React from "react";
import "./ProjectDisplay.scss";

interface IProject {
    title?: string;
    data: {
        name: string;
        description?: string;
    }[];
    assetFolder: string;
    urlPrefix?: string;
}

export default class ProjectDisplay extends React.PureComponent<IProject> {
    public render(): React.ReactNode {
        const figures: React.ReactElement[] = [];

        for (let index: number = 0; index < this.props.data.length; index++) {
            // Extract variables from data
            const { name, description } = this.props.data[index];
            const id: string = name.toLowerCase().split(" ").join("-");

            // Get the path to the image this figure represents
            const path = this.props.assetFolder + "/" + id + ".jpg";
            const image: string = require("../../assets/images/" + path);

            // Create the project url
            const urlPrefix: string = this.props.urlPrefix ?? "";
            const url: string = "https://mrsperry.github.io/" + urlPrefix + "/" + id;

            // Create the display
            figures.push((
                <a key={index} href={url} className="project">
                    <figure title={name}>
                        <img src={image}/>
                        <figcaption>
                            <span className="title">{name}</span>
                            {description ? <span className="description">{description}</span> : ""}
                        </figcaption>
                    </figure>
                </a>
            ));
        }

        return (
            <section className="project-display">
                {this.props.title ? <h1>{this.props.title}</h1> : ""}
                {figures}
            </section>
        );
    }
}
import * as React from "react";
import "./ProjectDisplay.scss";

interface IProject {
    title: string;
    data: {
        name: string;
        description: string;
        url: string;
    }[];
    assetFolder: string;
}

export default class ProjectDisplay extends React.PureComponent<IProject> {
    public render(): React.ReactNode {
        const figures: React.ReactElement[] = [];

        for (let index: number = 0; index < this.props.data.length; index++) {
            // Extract variables from data
            const { name, description, url } = this.props.data[index];
            const id = name.toLowerCase().replace(" ", "-");

            // Get the path to the image this figure represents
            const path = this.props.assetFolder + "/" + id + ".jpg";
            const image = require("../../assets/images/" + path);

            // Create the display
            figures.push((
                <a key={index} href={url} className="project-display">
                    <figure title={name}>
                        <img src={image}/>
                        <figcaption>
                            <span className="title">{name}</span>
                            <span className="description">{description}</span>
                        </figcaption>
                    </figure>
                </a>
            ));
        }

        return (
            <section className="project-display">
                <h1>{this.props.title}</h1>
                {figures}
            </section>
        );
    }
}
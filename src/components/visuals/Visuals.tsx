import * as React from "react";
import ProjectDisplay from "../common/ProjectDisplay";
import VisualData from "../../assets/data/visuals.json";
import Navigation from "../common/Navigation";
import { fadeInElements } from "../utils";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Visuals.scss";

export default class Visuals extends React.PureComponent {
    public componentDidMount(): void {
        fadeInElements(document.getElementsByClassName("carousel-root"), 100);
        fadeInElements(document.getElementsByClassName("project"), 100);
    }

    public render(): React.ReactNode {
        // Carousel settings
        const settings: {} = {
            autoPlay: true,
            interval: 5000,
            infiniteLoop: true,
            showIndicators: false,
            showStatus: false,
            showThumbs: false,
            transitionTime: 1000
        };

        // Get the carousel and project data
        const carouselData: string[] = VisualData.carousel;
        const projectData: { name: string, alt: string }[] = VisualData.projects;

        return <>
            <Navigation view="visuals"/>
            <section className="visuals">
                <Carousel {...settings}>
                    {carouselData.map((name: string, index: number) => {
                        // Get the static carousel image
                        const src: string = require("../../assets/images/visuals/carousel/carousel-" + (index + 1) + ".jpg");

                        // Locate the alt text associated with the image
                        let alt: string = "";
                        for (const project of projectData) {
                            if (project.name === name) {
                                alt = project.alt;
                                break;
                            }
                        }

                        const id: string = name.toLowerCase().split(" ").join("-");
                        return (
                            <a key={index} tabIndex={-1} title={name} href={"https://mrsperry.github.io/visuals/projects/" + id}>
                                <img src={src} alt={alt}/>
                                <p className="legend">{name}</p>
                            </a>
                        );
                    })}
                </Carousel>
                <ProjectDisplay
                    data={projectData}
                    assetFolder="visuals"
                    urlPrefix="visuals/projects"/>
            </section>
        </>;
    }
}
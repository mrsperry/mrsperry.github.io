import * as React from "react";
import ProjectDisplay from "../common/ProjectDisplay";
import VisualData from "../../assets/data/visuals.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Visuals.scss";

export default class Visuals extends React.PureComponent {
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

        return (
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

                        return (
                            <div key={index}>
                                <img src={src} alt={alt}/>
                                <p className="legend">{name}</p>
                            </div>
                        );
                    })}
                </Carousel>
                <ProjectDisplay
                    data={projectData}
                    assetFolder="visuals"
                    urlPrefix="visuals/projects"/>
            </section>
        );
    }
}
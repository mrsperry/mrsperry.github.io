import * as React from "react";
import { Link } from "react-router-dom";
import { fadeInElements } from "../utils";
import Headshot from "../../assets/images/profile/headshot.jpg";
import Resume from "../../assets/resume.pdf";
import "./Profile.scss";

export default class Profile extends React.Component {
    public componentDidMount(): void {
        fadeInElements(document.getElementsByClassName("profile").item(0).children, 750);
    }

    public render(): React.ReactNode {
        return (
            <section className="profile">
                <img alt="My head shot picture" src={Headshot}/>
                <h1>Hi, I'm Joshua Sperry</h1>
                <h2>I'm a front-end web developer and software developer</h2>
                <Link to="/portfolio" className="portfolio-link">View my portfolio</Link>
                <footer>
                    <a target="_blank" href={Resume}>Resume</a>
                    <a title="mrjoshuasperry@gmail.com" href="mailto:mrjoshuasperry@gmail.com">Email</a>
                    <a rel="noopener" target="_blank" href="https://github.com/mrsperry">Github</a>
                </footer>
            </section>
        );
    }
}
import * as React from "react";
import { Link } from "react-router-dom";
import Headshot from "../../assets/images/profile/headshot.jpg";
import Resume from "../../assets/resume.pdf";
import "./Profile.scss";

export default class Profile extends React.Component {
    public render(): React.ReactNode {
        return (
            <section className="profile">
                <div>
                    <img alt="My head shot picture" src={Headshot}/>
                    <h1>Hi, I'm Joshua Sperry</h1>
                    <h2>I'm a front-end web developer and software developer</h2>
                    <Link to="/portfolio" className="portfolio-link">View my portfolio</Link>
                </div>
                <footer>
                    <a target="_blank" href={Resume}>Resume</a>
                    <a title="mrjoshuasperry@gmail.com" href="mailto:mrjoshuasperry@gmail.com">Email</a>
                    <a rel="noopener" target="_blank" href="https://github.com/mrsperry">Github</a>
                </footer>
            </section>
        );
    }
}
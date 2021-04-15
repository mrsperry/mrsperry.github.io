import * as React from "react";
import "./Profile.scss";
import Headshot from "../../assets/images/profile/headshot.jpg";

export default class Profile extends React.Component {
    public render(): React.ReactNode {
        return (
            <section className="profile">
                <div>
                    <img alt="My head shot picture" src={Headshot}/>
                    <h1>Hi, I'm Joshua Sperry</h1>
                    <h2>I'm a front-end web developer and software developer</h2>
                    <button>View my portfolio</button>
                </div>
                <footer>
                    <a target="_blank" href="../../assets/resume.pdf">Resume</a>
                    <a title="mrjoshuasperry@gmail.com" href="mailto:mrjoshuasperry@gmail.com">Email</a>
                    <a rel="noopener" target="_blank" href="https://github.com/mrsperry">Github</a>
                </footer>
            </section>
        );
    }
}
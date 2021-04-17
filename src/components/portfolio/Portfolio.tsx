import * as React from "react";
import ProjectDisplay from "../common/ProjectDisplay";
import PortfolioData from "../../assets/data/projects.json";
import Navigation from "../common/Navigation";

export default class Portfolio extends React.Component {
    public render(): React.ReactNode {
        return <>
            <Navigation view="portfolio"/>
            <section className="portfolio">
                <ProjectDisplay
                    title="Personal Projects"
                    data={PortfolioData}
                    assetFolder="portfolio"
                    urlPrefix="portfolio/projects"/>
            </section>
        </>;
    }
}
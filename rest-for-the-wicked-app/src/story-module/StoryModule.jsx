import React from "react";
import "./story-mod.css";
import { RequestBar } from './request-bar/RequestBar';


export class StoryModule extends React.Component {

    render() {
        return (
            <section className="story-container">
                <h3 className="poi-name">/poi_name</h3>
                <p className="poi-description">This is a description of the POI. Draggable map and inventory tiles will be nested within this paragraph text.</p>
                <RequestBar/>
            </section>
        );
    }
}
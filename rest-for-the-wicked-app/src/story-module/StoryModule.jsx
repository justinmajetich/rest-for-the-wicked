import React from "react";
import "./story-mod.css";
import { RequestBar } from './request-bar/RequestBar';


export class StoryModule extends React.Component {

    render() {
        return (
            <section className="story-container">
                <p className="objective">objective: finish basic layout</p>
                <h3 className="poi-name">/poi_name</h3>
                <p className="poi-description">As the simulation materializes within your visual cortex, you find yourself on a lawn, rising before you is a monolith of polished, white concrete, intersected by three bands of obsidian black windows. There's a breeze you can almost feel, lapping at your hair. But still there's the familiar tingling, like a limb that's fallen asleep. At the foot of the building is a singular entrance, leading to the [[  /lobby  ]]</p>
                <RequestBar/>
            </section>
        );
    }
}
import React from "react";
import "./method-mod.css";
import { TileList } from "../TileList";

export class MethodModule extends React.Component {
    render() {
        return (
            <section className="method-container">
                <div className="title-bar">
                    <h4>methods</h4>
                </div>
                <TileList/>
            </section>
        );
    }
}
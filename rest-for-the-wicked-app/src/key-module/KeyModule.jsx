import React from "react";
import "./key-mod.css";
import { TileList } from "../TileList";

export class KeyModule extends React.Component {
    render() {
        return (
            <section className="key-container">
                <div className="title-bar">
                    <h4>keys</h4>
                </div>
                <TileList/>
            </section>
        );
    }
}
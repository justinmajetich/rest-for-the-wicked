import React from "react";
import "./inventory-mod.css";
import {TileList} from "../TileList";

export class InventoryModule extends React.Component {
    render() {
        return (
            <section className="inventory-container">
                <div className="title-bar">
                    <h4>inventory</h4>
                </div>
                <TileList/>
            </section>
        );
    }
}
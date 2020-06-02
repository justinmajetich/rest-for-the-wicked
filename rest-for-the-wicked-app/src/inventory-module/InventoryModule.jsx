import React from "react";
import "./inventory-mod.css";

export class InventoryModule extends React.Component {
    render() {
        return (
            <section className="inventory-container">
                <div className="title-bar">
                    <h2>Inventory</h2>
                </div>
                <div className="tile-list">
                    { /* map Tile element to every item in list */ }
                </div>
            </section>
        );
    }
}
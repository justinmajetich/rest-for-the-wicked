import React from "react";
import "./path-mod.css";

export class PathModule extends React.Component {
    render() {
        return (
            <section className="path-container">
                <div className="title-bar">
                    <h4>paths</h4>
                </div>
                <PathMap/>
            </section>
        );
    }
}

class PathMap extends React.Component {
    render() {
        return (
            <div className={"path-map"}>
                <p id={"lobby-map-node"}>/lobby</p>
                <p id={"research-wing-map-node"}>/research_wing</p>
                <p id={"labs-map-node"}>/labs</p>
                <p id={"vault-map-node"}>/vault</p>
                <p id={"logs-map-node"}>/logs</p>
                <p id={"front-desk-map-node"}>/front_desk</p>
                <p id={"admin-wing-map-node"}>/admin_wing</p>
                <p id={"records-map-node"}>/records</p>
                <p id={"computer-map-node"}>/computer</p>
                <p id={"offices-map-node"}>/offices</p>
                <p id={"blacklist-map-node"}>/blacklist</p>
                <p id={"dr-delete-map-node"}>/dr_delete</p>
                <p id={"lt-glass-map-node"}>/lt_glass</p>
            </div>
        );
    }
}
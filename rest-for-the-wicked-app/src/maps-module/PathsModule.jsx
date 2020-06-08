import React from "react"
import "./paths-mod.css"
import PathMap from './PathMap'

export class PathsModule extends React.Component {
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
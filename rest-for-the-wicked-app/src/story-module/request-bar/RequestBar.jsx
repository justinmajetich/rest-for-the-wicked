import React from "react";
import "./request-mod.css";

export class RequestBar extends React.Component {

    render() {
        return (
            <section className="request-container">
                <div className="tile-zone">
                    <TileReceiver/>
                    <TileReceiver/>
                </div>
                <RequestButton/>
            </section>
        )
    }
}

class RequestButton extends React.Component {
    render() {
        return (
          <button className="request-button">
              <h3>Make Request</h3>
          </button>
        );
    }
}

class TileReceiver extends React.Component {
    render() {
        return (
          <span className="tile-receiver"/>
        );
    }
}
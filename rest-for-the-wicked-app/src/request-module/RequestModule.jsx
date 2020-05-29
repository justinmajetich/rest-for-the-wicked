import React from "react";

export class RequestModule extends React.Component {

    render() {
        return (
            <section className="request-container">
                <RequestButton></RequestButton>
                <TileReceiver></TileReceiver>
            </section>
        )
    }
}

class RequestButton extends React.Component {
    render() {
        return (
          <button>
              <h2>Request</h2>
          </button>
        );
    }
}

class TileReceiver extends React.Component {
    render() {
        return (
          <div className="tile-receiver"></div>
        );
    }
}
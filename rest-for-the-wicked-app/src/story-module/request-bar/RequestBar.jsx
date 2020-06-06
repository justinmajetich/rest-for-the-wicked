import React from "react";
import "./request-mod.css";
import { Droppable } from "react-beautiful-dnd";

export class RequestBar extends React.Component {

    render() {
        return (
            <section className="request-container">
                <div className="tile-receiver-zone">
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
            <Droppable droppableId={"tile-receiver"} type={"method"}>
                {(provided, snapshot) => (
                    <span
                        className="tile-receiver"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <h3>TileReceiver</h3>
                        {provided.placeholder}
                    </span>
                )}
            </Droppable>
        );
    }
}
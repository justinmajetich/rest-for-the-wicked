import React from "react";
import "./tile.css";
import { Draggable } from "react-beautiful-dnd";

export class Tile extends React.Component {
    render() {
        console.log(this.props)
        return (
            <Draggable draggableId={this.props.name} index={this.props.index}>
                {(provided, snapshot) => (
                    <div
                        className={this.props.type + "-tile"}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <h3>{this.props.name}</h3>
                    </div>
                )}
            </Draggable>
        );
    }
}
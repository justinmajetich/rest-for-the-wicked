import React from "react";
import "./tile.css";
import { Draggable } from "react-beautiful-dnd";

export class Tile extends React.Component {
    render() {
        return (
            <Draggable draggableId="tile" index={0}>
                {(provided, snapshot) => (
                    <div
                        className="tile"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <h3>Tile</h3>
                    </div>
                )}
            </Draggable>
        );
    }
}
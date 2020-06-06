import React from "react";
import { Droppable } from "react-beautiful-dnd";
import {Tile} from "./Tile";

export class TileList extends React.Component {
    render() {
        return (
            <Droppable droppableId="method-list" type="method">
                {(provided, snapshot) => (
                    <div
                        className="tile-list"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        { /* map Tile element to every item in list */ }
                        <Tile/>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        );
    }
}
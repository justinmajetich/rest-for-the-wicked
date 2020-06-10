import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import './tile-list.css'
import {Tile} from './Tile'

export class TileList extends React.Component {
    render() {
        return (
            <Droppable droppableId={this.props.module + "_list"} type={this.props.module.slice(0, -1)}>
                {(provided, snapshot) => (
                    <div
                        className="tile-list"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {this.props.content.map((tile, index) => <Tile
                            key={tile.name}
                            name={tile.name}
                            type={this.props.module}
                            index={index}
                        />)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        );
    }
}
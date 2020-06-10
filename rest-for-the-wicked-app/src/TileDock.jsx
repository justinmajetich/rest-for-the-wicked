import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import './tile-dock.css'
import {Tile} from './Tile'

export class TileDock extends React.Component {
    render() {
        console.log(this.props)
        return (
            <Droppable droppableId={this.props.name} type={this.props.type}>
                {(provided, snapshot) => (
                    <div
                        className={this.props.type + "-dock"}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <Tile
                            type={this.props.type}
                            name={this.props.content.name}
                            index={0}
                        />
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        );
    }
}
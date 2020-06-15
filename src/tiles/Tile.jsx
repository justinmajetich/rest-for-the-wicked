import React from 'react'
import './tile.css'
import { Draggable } from 'react-beautiful-dnd'
import { getSVGComponent } from '../assets/svgs'

export class Tile extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.name} index={this.props.index}>
                {(provided, snapshot) => (
                    <div
                        className={this.props.type + "-tile"}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        {getSVGComponent(this.props.type, this.props.name)}
                    </div>
                )}
            </Draggable>
        );
    }
}
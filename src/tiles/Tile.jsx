import React from 'react'
import './tile.css'
import { Draggable } from 'react-beautiful-dnd'

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
                        <h3>
                            {this.props.type === "path" ? '/' : ''}
                            {this.props.type === "key" ? '{' : ''}
                            {this.props.name}
                            {this.props.type === "key" ? '}' : ''}
                        </h3>
                    </div>
                )}
            </Draggable>
        );
    }
}
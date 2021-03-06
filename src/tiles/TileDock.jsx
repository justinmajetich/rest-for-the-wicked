import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import './tile-dock.css'
import {Tile} from './Tile'

export class TileDock extends React.Component {
    render() {
        return (
            <Droppable
                droppableId={this.props.name}
                type={this.props.type}
                isDropDisabled={this.props.content ? true : false}
            >
                {(provided, snapshot) => (
                    <div
                        className={this.props.type + "-dock"}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {this.props.content ?
                            <Tile
                                type={this.props.type}
                                name={this.props.content.name}
                                index={0}
                            /> : null
                        }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        );
    }
}
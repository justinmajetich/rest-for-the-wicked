import React from 'react'
import './tile.css'
import { Draggable } from 'react-beautiful-dnd'
import { getSVGComponent } from "../assets/tile-svgs"


export class Tile extends React.Component {
    render() {
        return (
            <Draggable 
                draggableId={this.props.name}
                isDragDisabled={this.props.isDragDisabled}
                index={this.props.index}
            >
                {(provided, snapshot) => (
                    <div
                        className={this.props.type + "-tile"}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        style={getStyle(provided.draggableProps.style, snapshot)}
                    >
                        {getSVGComponent(this.props.type + "-tile")}
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

function getStyle(style, snapshot) {
    
    if (!snapshot.isDropAnimating) {
      return style;
    }
    
    const {curve} = snapshot.dropAnimation;

    return {
      ...style,
      // Drastically shortened drop from default
      transition: `all ${curve} .001s`,
    };
  }
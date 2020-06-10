import React from "react"
import "./request-mod.css"
import { Droppable } from "react-beautiful-dnd"
import { connect } from "react-redux"
import { Tile } from "../Tile"

export class RequestBar extends React.Component {

    render() {
        return (
            <section className="request-container">
                <div className="tile-receiver-zone"> {
                    Object.entries(this.props.receivers).map(receiver => {
                        // if ((receiver[0] === "key_receiver" && !pathNeedsKey) ||
                        //     (receiver[0] === "item_receiver" && !pathUsesItem)) {
                        //     // If hidden receivers are docked, return contents to lists
                        //     if (receiver[1].content) {
                        //         this.props.dispatch(addToList({
                        //             content: receiver[1].content,
                        //             list: (receiver[0].replace("_receiver", "s_list"))
                        //         }));
                        //         this.props.dispatch(removeFromReceiver({
                        //             content: receiver[1].content,
                        //             receiver: receiver[0]
                        //         }));
                        //     }
                        // }
                        if (!receiver[1].is_visible) {
                            return null;
                        } else {
                            return (<TileReceiver
                                key={receiver[0]}
                                name={receiver[1].title}
                                content={receiver[1].content}
                            />);
                        }
                    })
                }
                </div>
                <RequestButton/>
            </section>
        )
    }
}

class TileReceiver extends React.Component {

    render() {
        return (
            <Droppable
                droppableId={this.props.name + "_receiver"}
                type={this.props.name}
                isDropDisabled={this.props.content ? true : false}
            >
                {(provided, snapshot) => (
                    <span
                        className={this.props.name + "-receiver"}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {this.props.content ? <Tile
                            key={this.props.content.name}
                            name={this.props.content.name}
                            type={this.props.name + "s"}
                            index={0}
                        /> : <h3>{this.props.name}</h3>}
                        {provided.placeholder}
                    </span>
                )}
            </Droppable>
        );
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

const mapStateToProps = state => {
    return ({
        receivers: state.droppables.receivers,
    });
};

export default connect(
    mapStateToProps
)(RequestBar);
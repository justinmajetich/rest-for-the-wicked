import React from "react"
import "./request-mod.css"
import { Droppable } from "react-beautiful-dnd"
import { connect } from "react-redux"
import { Tile } from "../tiles/Tile"
import { makeRequest } from "../networking"

export class RequestBar extends React.Component {

    render() {
        return (
            <section className="request-container">
                <div className="tile-receiver-zone"> {
                    Object.entries(this.props.receivers).map(receiver => {
                        if (receiver[1].is_visible) {
                            return (<TileReceiver
                                key={receiver[0]}
                                name={receiver[1].title}
                                content={receiver[1].content}
                            />);
                        } else {
                            return null;
                        }
                    })
                }
                </div>
                <RequestButton receivers={this.props.receivers} />
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
                        {this.props.content ?
                            <Tile
                                name={this.props.content.name}
                                type={this.props.name}
                                index={0}
                            /> :
                            <h3>{this.props.name}</h3>
                        }
                        {provided.placeholder}
                    </span>
                )}
            </Droppable>
        );
    }
}

function RequestButton (props) {

    function onClick(event) {
        event.preventDefault();
        console.log('NOW WE\'RE COOKING WITH GAS');
        const r = props.receivers;

        // Create object from current request sequence
        makeRequest({
            method: r.method_receiver.content,
            path: r.path_receiver.content,
            key: r.key_receiver.content,
            item: r.item_receiver.content
        });
    }

    return (
        <button
        className={"request-button"}
        onClick={onClick}
        >
            <h3>Make Request</h3>
        </button>
    );

}

const mapStateToProps = state => {
    return ({
        receivers: state.droppables.receivers,
    });
};

export default connect(
    mapStateToProps
)(RequestBar);
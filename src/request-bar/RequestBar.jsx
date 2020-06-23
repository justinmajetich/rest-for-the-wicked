import React from "react"
import "./request-mod.css"
import { Droppable } from "react-beautiful-dnd"
import { connect } from "react-redux"
import { Tile } from "../tiles/Tile"
import { makeRequest } from "../networking"
import { getSVGComponent } from "../assets/tile-svgs"
import { buttonClick } from "../redux/actions"

export class RequestBar extends React.Component {

    render() {
        return (
            <section className="request-container">
                <div className="tile-receiver-zone"> {
                    Object.entries(this.props.receivers).map((receiver, index) => {
                        if (receiver[1].is_visible) {
                            return (<TileReceiver
                                key={receiver[0]}
                                name={receiver[1].title}
                                content={receiver[1].content}
                                receivers={this.props.receivers}
                                isDropDisabled={isDropDisabled(receiver[1].title, this.props.receivers)}
                            />);
                        } else {
                            return null;
                        }
                    })
                }
                </div>
                <RequestButton
                    receivers={this.props.receivers}
                    isClicked={this.props.isClicked}
                    isEnabled={this.props.isEnabled}
                    dispatch={this.props.dispatch}
                />
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
                isDropDisabled={this.props.isDropDisabled}
            >
                {(provided, snapshot) => (
                    <span
                        className={this.props.name + "-receiver"}
                        ref={provided.innerRef}
                        style={{
                            opacity: (this.props.isDropDisabled && !this.props.content) ? '50%' : '100%',
                            
                        }}
                        {...provided.droppableProps}
                    >
                        {/* Get the apporiate receiver SVG */
                        getSVGComponent(this.props.name + "-receiver")}

                        {/* Get the apporiate outline SVG */
                        getSVGComponent(this.props.name + "-outline", !this.props.isDropDisabled)}

                        <h3 className={"receiver-text"}>{this.props.name}</h3>

                        {this.props.content ?
                            <Tile
                                name={this.props.content.name}
                                type={this.props.name}
                                index={0}
                                isDragDisabled={
                                    this.props.name === "method" ? 
                                    (this.props.receivers.path_receiver.content ? true : false) : false
                                }
                            /> : null}

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
        props.dispatch(buttonClick());

        if (props.isEnabled) {
            const r = props.receivers;
            // Create object from current request sequence
            makeRequest({
                method: r.method_receiver.content,
                path: r.path_receiver.content,
                key: r.key_receiver.content,
                item: r.item_receiver.content
            });
        }
    }

    return (
        <button
            className={props.isClicked ? "request-button-clicked" : "request-button"}
            onClick={onClick}
        >
            <h1>MAKE REQUEST</h1>
        </button>
    );
}

function isDropDisabled(currentReceiver = "", receivers = {}) {
    currentReceiver += "_receiver";
    switch (currentReceiver) {
        case "method_receiver": {
            return (receivers.method_receiver.content ? true : false);
        }
        case "path_receiver": { 
            if (receivers["method_receiver"].content) {
                return (receivers[currentReceiver].content ? true : false);
            }
            return (true);
        }
        case "key_receiver": {
            if (receivers["path_receiver"].content) {
                return (receivers[currentReceiver].content ? true : false);
            }
            return (true);
        }
        case "item_receiver": {
            if (receivers["path_receiver"].content) {
                return (receivers[currentReceiver].content ? true : false);
            }
            return (true);
        }
        default: { 
            return (false);
        }
    }
}

const mapStateToProps = state => {
    return ({
        receivers: state.droppables.receivers,
        isClicked: state.button.request_button_clicked,
        isEnabled: state.button.request_button_enabled
    });
};

export default connect(
    mapStateToProps
)(RequestBar);
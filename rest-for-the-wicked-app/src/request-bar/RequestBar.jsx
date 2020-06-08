import React from "react";
import "./request-mod.css";
import { Droppable } from "react-beautiful-dnd";
import {connect} from "react-redux";

export class RequestBar extends React.Component {

    render() {
        return (
            <section className="request-container">
                <div className="tile-receiver-zone">
                    {this.props.receivers.map(receiver => {
                        const key = Object.keys(receiver);
                        const title = receiver[key[0]].title

                        return (<TileReceiver key={title + "-receiver"} title={title} />);
                        })
                    }
                </div>
                <RequestButton/>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return ({
        receivers: state.request_bar
    });
};

export default connect(
    mapStateToProps
)(RequestBar);

class TileReceiver extends React.Component {

    render() {
        return (
            <Droppable
                droppableId={this.props.title + "-receiver"}
                type={this.props.title}
            >
                {(provided, snapshot) => (
                    <span
                        className={this.props.title + "-receiver"}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <h3>{this.props.title}</h3>
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
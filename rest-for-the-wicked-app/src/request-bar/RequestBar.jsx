import React from "react";
import "./request-mod.css";
import { Droppable } from "react-beautiful-dnd";
import {connect} from "react-redux";
import {Tile} from "../Tile";

export class RequestBar extends React.Component {

    render() {
        return (
            <section className="request-container">
                <div className="tile-receiver-zone"> {
                    Object.entries(this.props.receivers).map(receiver => {
                        return (<TileReceiver
                            key={receiver[0]}
                            title={receiver[1].title}
                            content={receiver[1].content}
                        />);
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
                droppableId={this.props.title + "_receiver"}
                type={this.props.title}
                isDropDisabled={this.props.content ? true : false}
            >
                {(provided, snapshot) => (
                    <span
                        className={this.props.title + "-receiver"}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {this.props.content ? <Tile
                            key={this.props.content}
                            name={this.props.content}
                            type={this.props.title + "s"}
                            index={0}
                        /> : <h3>{this.props.title}</h3>}
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
import React from "react";
import "./keys-mod.css";
import {TileList} from "../TileList";
import {connect} from "react-redux";

export class KeysModule extends React.Component {
    render() {
        return (
            <section className="key-container">
                <div className="title-bar">
                    <h4>{this.props.keys.title}</h4>
                </div>
                <TileList
                    module={this.props.keys.title}
                    content={this.props.keys.content}
                />
            </section>
        );
    }
}

const mapStateToProps = state => {
    return ({
        keys: state.droppables.lists.key_list
    });
};

export default connect(
    mapStateToProps
)(KeysModule);
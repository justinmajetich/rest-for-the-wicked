import React from "react";
import "./keys-mod.css";
import {TileDock} from "../tiles/TileDock";
import {connect} from "react-redux";

export class KeysModule extends React.Component {
    render() {
        return (
            <section className="key-container">
                <div className="title-bar">
                    <h4>{this.props.keys.title}</h4>
                </div>
                <div className={"key-harbor"}>
                    {Object.entries(this.props.keys.docks).map((dock, index) => {
                        if (dock[1].is_visible) {
                            return (
                                <TileDock
                                    key={index}
                                    name={dock[0]}
                                    type={this.props.keys.title.slice(0, -1)}
                                    content={dock[1].content}
                                />
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
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
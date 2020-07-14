import React from "react";
import "./keys-mod.css";
import {TileDock} from "tiles/TileDock";
import {connect} from "react-redux";

export class KeysModule extends React.Component {
    render() {
        return (
            <section className={"key-container"}>
                <div className="title-bar">
                    <h4>{this.props.keys.title}</h4>
                </div>
                <div className={"key-harbor"}>
                    {Object.keys(this.props.keys.docks).length > 0 ?
                        Object.entries(this.props.keys.docks).map((dock, index) => {
                            return (
                                <TileDock
                                    key={index}
                                    name={dock[0]}
                                    type={this.props.keys.title.slice(0, -1)}
                                    content={dock[1]}
                                />
                            );
                        })
                        :
                        <p>You have no keys.</p>
                    }
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return ({
        keys: state.droppables.lists.key_list,
        isTransitioning: state.stage.stage_transitioning
    });
};

export default connect(
    mapStateToProps
)(KeysModule);
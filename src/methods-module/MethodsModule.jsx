import React from "react";
import "./methods-mod.css";
import { TileDock } from "../tiles/TileDock";
import {connect} from "react-redux";

class MethodsModule extends React.Component {
    render() {
        return (
            <section className="method-container">
                <div className="title-bar">
                    <h4>{this.props.methods.title}</h4>
                </div>
                <div className={"method-harbor"}>
                    {Object.entries(this.props.methods.docks).map((dock, index) => {
                        return (
                            <TileDock
                                key={index}
                                name={dock[0]}
                                type={this.props.methods.title.slice(0, -1)}
                                content={dock[1]}
                            />
                        );
                    })}
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return ({
        methods: state.droppables.lists.method_list
    });
};

export default connect(
    mapStateToProps
)(MethodsModule);
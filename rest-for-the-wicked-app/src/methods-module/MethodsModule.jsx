import React from "react";
import "./methods-mod.css";
import { TileList } from "../TileList";
import {connect} from "react-redux";

class MethodsModule extends React.Component {
    render() {
        return (
            <section className="method-container">
                <div className="title-bar">
                    <h4>{this.props.methods.title}</h4>
                </div>
                <TileList
                    module={this.props.methods.title}
                    content={this.props.methods.content}
                />
            </section>
        );
    }
}

const mapStateToProps = state => {
    return ({
        methods: state.lists.methods
    });
};

export default connect(
    mapStateToProps
)(MethodsModule);
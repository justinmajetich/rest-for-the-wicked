import React from "react";
import {connect} from "react-redux";

class PathMap extends React.Component {
    render() {
        return (
            <div className={"path-map"}>
                <p id={"lobby-map-node"}>/{this.props.map_nodes.lobby}</p>
                <p id={"research-wing-map-node"}>/{this.props.map_nodes.research_wing}</p>
                <p id={"labs-map-node"}>/{this.props.map_nodes.labs}</p>
                <p id={"vault-map-node"}>/{this.props.map_nodes.vault}</p>
                <p id={"logs-map-node"}>/{this.props.map_nodes.logs}</p>
                <p id={"front-desk-map-node"}>/{this.props.map_nodes.front_desk}</p>
                <p id={"admin-wing-map-node"}>/{this.props.map_nodes.admin_wing}</p>
                <p id={"records-map-node"}>/{this.props.map_nodes.records}</p>
                <p id={"computer-map-node"}>/{this.props.map_nodes.computer}</p>
                <p id={"offices-map-node"}>/{this.props.map_nodes.offices}</p>
                <p id={"blacklist-map-node"}>/{this.props.map_nodes.blacklist}</p>
                <p id={"dr-delete-map-node"}>/{this.props.map_nodes.dr_delete}</p>
                <p id={"lt-glass-map-node"}>/{this.props.map_nodes.lt_glass}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        map_nodes: state.map_nodes
    });
};

export default connect(
    mapStateToProps
)(PathMap);
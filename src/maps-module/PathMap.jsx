import React from "react";
import {connect} from "react-redux";
import {ReactComponent as BranchUpSVG} from '../assets/map-svgs/branch-up.svg'
import {ReactComponent as BranchDownSVG} from '../assets/map-svgs/branch-down.svg'
import {ReactComponent as BranchStraightSVG} from '../assets/map-svgs/branch-straight.svg'


class PathMap extends React.Component {
    render() {
        return (
            <div className={"path-map"}>
                <p id={"lobby-map-node"}>/{this.props.map_nodes.lobby}</p>
                <BranchUpSVG id={"lobby-branch-up"}/>
                <BranchStraightSVG id={"lobby-branch-straight"}/>
                <BranchDownSVG id={"lobby-branch-down"}/>

                <p id={"research-wing-map-node"}>/{this.props.map_nodes.research_wing}</p>
                <BranchUpSVG id={"research-wing-branch-up"}/>

                <p id={"weapon-lab-map-node"}>/{this.props.map_nodes.weapon_lab}</p>
                <BranchStraightSVG id={"weapon-lab-branch-straight"}/>
                <BranchDownSVG id={"weapon-lab-branch-down"}/>

                <p id={"vault-map-node"}>/{this.props.map_nodes.vault}</p>
                <p id={"logs-map-node"}>/{this.props.map_nodes.logs}</p>
                <p id={"desk-map-node"}>/{this.props.map_nodes.desk}</p>
                <p id={"admin-wing-map-node"}>/{this.props.map_nodes.admin_wing}</p>
                <BranchUpSVG id={"admin-wing-branch-up"}/>
                <BranchStraightSVG id={"admin-wing-branch-straight"}/>
                <BranchDownSVG id={"admin-wing-branch-down"}/>

                <p id={"records-map-node"}>/{this.props.map_nodes.records}</p>
                <BranchStraightSVG id={"blacklist-branch-straight"}/>

                <p id={"computer-map-node"}>/{this.props.map_nodes.computer}</p>
                <p id={"offices-map-node"}>/{this.props.map_nodes.offices}</p>
                <BranchStraightSVG id={"lt-glass-branch-straight"}/>
                <BranchDownSVG id={"dr-delete-branch-down"}/>

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
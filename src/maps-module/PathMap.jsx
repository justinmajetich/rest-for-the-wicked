import React from "react";
import {connect} from "react-redux";
import {ReactComponent as BranchUpSVG} from '../assets/map-svgs/branch-up.svg'
import {ReactComponent as BranchDownSVG} from '../assets/map-svgs/branch-down.svg'
import {ReactComponent as BranchStraightSVG} from '../assets/map-svgs/branch-straight.svg'


class PathMap extends React.Component {
    render() {
        return (
            <div className={"path-map"}>
                {Object.entries(this.props.map_nodes).map((node, index)=> {
                    if (node[0] !== "current_node") {
                        const formatted = node[0].replace(/_/g, '-');
                        console.log(node);
                        console.log(formatted);
                        return (<p
                            id={formatted + "-map-node"}
                            key={index}
                            className={node[0] === this.props.map_nodes.current_node ? "current-path" : ""}
                        >
                            {"/"}{this.props.map_nodes[node[0]]}
                        </p>);
                    }
                    return (null);
                })}
                <BranchUpSVG id={"lobby-branch-up"}/>
                <BranchStraightSVG id={"lobby-branch-straight"}/>
                <BranchDownSVG id={"lobby-branch-down"}/>

                <BranchUpSVG id={"research-wing-branch-up"}/>

                <BranchStraightSVG id={"weapon-lab-branch-straight"}/>
                <BranchDownSVG id={"weapon-lab-branch-down"}/>

                <BranchUpSVG id={"admin-wing-branch-up"}/>
                <BranchStraightSVG id={"admin-wing-branch-straight"}/>
                <BranchDownSVG id={"admin-wing-branch-down"}/>

                <BranchStraightSVG id={"blacklist-branch-straight"}/>

                <BranchStraightSVG id={"lt-glass-branch-straight"}/>
                <BranchDownSVG id={"dr-delete-branch-down"}/>
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
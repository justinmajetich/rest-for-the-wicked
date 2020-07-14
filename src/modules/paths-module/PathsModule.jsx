import React from "react"
import "./paths-mod.css"
import {connect} from "react-redux";
import {ReactComponent as BranchUpSVG} from 'assets/map-svgs/branch-up.svg'
import {ReactComponent as BranchDownSVG} from 'assets/map-svgs/branch-down.svg'
import {ReactComponent as BranchStraightSVG} from 'assets/map-svgs/branch-straight.svg'


class PathMap extends React.Component {
    render() {
        return (
            <div className={"path-map"}>
                {Object.entries(this.props.paths).map((node, index)=> {
                    if (node[0] !== "current_path" && node[0] !== "api_headquarters") {
                        const formatted = node[0].replace(/_/g, '-');
                        return (<p
                            id={formatted + "-map-node"}
                            key={index}
                            className={node[0] === this.props.paths.current_path ? "current-path" : ""}
                        >
                            {"/"}{this.props.paths[node[0]].name}
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

class PathsModule extends React.Component {
    render() {
        return (
            <section className={"path-container"}>
                <div className="title-bar">
                    <h4>paths</h4>
                </div>
                <PathMap paths={this.props.paths}/>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return ({
        paths: state.paths,
        isTransitioning: state.stage.stage_transitioning
    });
};

export default connect(
    mapStateToProps
)(PathsModule);
import React from "react"
import { connect } from "react-redux"
import { buttonClick, updateStage } from "redux/actions"
import './outro-mod.css'

class Outro extends React.Component {

    onClick = (event) => {
        event.preventDefault();
        this.props.dispatch(buttonClick());
        if (!this.props.isTransitioning) {
            this.props.dispatch(updateStage());
        }
    }

    render() {
        return (
            <div className={this.props.isTransitioning ? "outro-transitioning" : "outro"}>
                <div className={"title-wrapper"}><h1>GAME OVER</h1></div>
                <div className={"outro-image"}></div>
                <p className={"outro-text"}>With the blacklist destroyed, your rights are restored and the benefits of citizenry reinstated. You can have your life back... though by now, that life feels less familiar than the one you've forged in the shadows.</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        isTransitioning: state.stage.stage_transitioning,
    });
};

export default connect(
    mapStateToProps
)(Outro);
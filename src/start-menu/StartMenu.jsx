import React from "react"
import { connect } from "react-redux"
import { buttonClick, updateStage } from "../redux/actions"
import './start-menu.css'

class StartMenu extends React.Component {

    onClick = (event) => {
        event.preventDefault();
        this.props.dispatch(buttonClick());
        this.props.dispatch(updateStage());
    }

    render() {
        return (
            <div className={this.props.isTransitioning ? "start-menu-transitioning" : "start-menu"}>
                <h1>REST for the Wicked</h1>
                <p>A dystopian text adventure into REST APIs</p>
                <button
                    id={this.props.isClicked ? 'start-button-clicked' : 'start-button'}
                    onClick={this.onClick}
                >
                    <p>Start Game</p>
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        isTransitioning: state.stage.stage_transitioning,
        isClicked: state.button.button_clicked,
        isEnabled: state.button.button_enabled
    });
};

export default connect(
    mapStateToProps
)(StartMenu);
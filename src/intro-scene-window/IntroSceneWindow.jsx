import React from "react"
import './intro-scene-window.css'
import { connect } from "react-redux"
import { backButtonClick, nextButtonClick, updateScene, updateStage } from "../redux/actions"

class IntroSceneWindow extends React.Component {

    onNextClick = (event) => {
        event.preventDefault();
        this.props.dispatch(nextButtonClick());

        // If last scene, transition to main stage
        if (this.props.current_scene === 2) {
            this.props.dispatch(updateStage());
        } else {
            this.props.dispatch(updateScene("next"));
        }
    }

    onBackClick = (event) => {
        event.preventDefault();
        this.props.dispatch(backButtonClick());
        this.props.dispatch(updateScene("back"));
    }

    render() {
        return (
            <article id={"scene-" + this.props.current_scene} className={"scene-window"}>
                <div className={this.props.isTransitioning ? "scene-image-transitioning" : "scene-image"}></div>
                <div className={this.props.isTransitioning ? "scene-text-transitioning" : "scene-text"}>
                    <p>{this.props.scene_text[this.props.current_scene]}</p>
                </div>
                <div className={"nav-button-wrapper"}>
                    {this.props.current_scene > 0 ?
                        <button
                            onClick={this.onBackClick}
                            className={this.props.isBackClicked ? 'back-button-clicked' : 'back-button'}
                        >Back</button>
                    : null}
                    <button
                        onClick={this.onNextClick}
                        className={this.props.isNextClicked ? 'next-button-clicked' : 'next-button'}
                    >Next</button>
                </div>
            </article>
        );
    }
}

const mapStateToProps = state => {
    return ({
        isTransitioning: state.intro.scene_transitioning,
        current_scene: state.intro.current_scene,
        scene_text: state.intro.scene_text,
        isNextClicked: state.button.next_button_clicked,
        isBackClicked: state.button.back_button_clicked,
    });
};

export default connect(
    mapStateToProps
)(IntroSceneWindow);
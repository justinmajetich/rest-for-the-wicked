import React from "react"
import './intro-scene-window.css'
import { connect } from "react-redux"
import { backButtonClick, nextButtonClick, updateScene, updateStage, backButtonHide, hideNavButtons, backButtonShow } from "../redux/actions"

class IntroSceneWindow extends React.Component {

    onNextClick = (event) => {
        event.preventDefault();
        this.props.dispatch(nextButtonClick());

        // If last scene, transition to main stage
        if (this.props.current_scene === 2) {
            this.props.dispatch(hideNavButtons())
            this.props.dispatch(updateStage());
        } else {
            if (!this.props.isTransitioning) {
                this.props.dispatch(updateScene("next"));
                
                // Show back button if moving from scene 0
                // Timeout added to allow scene to change before showing button
                if (this.props.current_scene === 0) {
                    setTimeout(() => {
                        this.props.dispatch(backButtonShow())
                    }, 1100);
                }
            }
        }
    }

    onBackClick = (event) => {
        event.preventDefault();
        this.props.dispatch(backButtonClick());

        if (!this.props.isTransitioning) {
            this.props.dispatch(updateScene("back"));
            // hide back button if moving to scene 0
            if (this.props.current_scene === 1) {
                setTimeout(() => {
                    this.props.dispatch(backButtonHide())
                }, 250);            }
        }
    }

    render() {
        return (
            <article id={"scene-" + this.props.current_scene} className={"scene-window"}>
                <div className={this.props.isTransitioning ? "scene-image-transitioning" : "scene-image"}></div>
                <div className={this.props.isTransitioning ? "scene-text-transitioning" : "scene-text"}>
                    <p>{this.props.scene_text[this.props.current_scene]}</p>
                </div>
                <div className={"nav-button-wrapper"}>
                    <button
                        onClick={this.onBackClick}
                        id={this.props.isBackClicked ? "back-button-clicked" : "back-button"}
                        className={this.props.backButtonShown ? "show" : "hide"}
                    >Back</button>
                    <button
                        onClick={this.onNextClick}
                        id={this.props.isNextClicked ? "next-button-clicked" : "next-button"}
                        className={this.props.nextButtonShown ? "show" : "hide"}
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
        nextButtonShown: state.button.next_button_shown,
        backButtonShown: state.button.back_button_shown
    });
};

export default connect(
    mapStateToProps
)(IntroSceneWindow);
import React from "react"
import './intro-scene-window.css'
import { connect } from "react-redux"
import { backButtonClick, nextButtonClick, nextScene, backScene } from "../redux/actions"

class IntroSceneWindow extends React.Component {

    onNextClick = (event) => {
        event.preventDefault();
        this.props.dispatch(nextButtonClick());
        this.props.dispatch(nextScene());
    }

    onBackClick = (event) => {
        event.preventDefault();
        this.props.dispatch(backButtonClick());
        this.props.dispatch(backScene());
    }

    render() {
        return (
            <article id={"scene-" + this.props.current_scene} className={"scene-window"}>
                <div className={"scene-image"}></div>
                <div className={"scene-text"}>
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
        current_scene: state.intro.current_scene,
        scene_text: state.intro.scene_text,
        isNextClicked: state.button.next_button_clicked,
        isBackClicked: state.button.back_button_clicked,
    });
};

export default connect(
    mapStateToProps
)(IntroSceneWindow);
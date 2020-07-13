import React from "react"
import "./story-mod.css"
import { connect } from 'react-redux'
import RequestBar from 'request-bar/RequestBar'
import { TileDock } from 'tiles/TileDock'

class StoryModule extends React.Component {
    render() {
        return (
            <section className={this.props.isTransitioning ? "story-container-transitioning" : "story-container"}>
                <div className={"story-header-box"}>
                    <div
                        className={"story-header"}
                        style={{ 
                            transform: this.props.transition_is_active ? 'translateX(940px)' : 'translateX(0px)'
                        }}
                    >
                        <h3 className="poi-name">/{this.props.poi.name}</h3>
                        <p className="objective">objective:<br />{this.props.objective}</p>
                    </div>
                </div>
                <Description
                    /* Determines which description should be used */
                    text={this.props.paths[this.props.poi.name].is_alt ?
                        this.props.poi.description.alt_text.split(" ") :
                        this.props.poi.description.text.split(" ")
                    }
                    docks={this.props.poi.description.docks}
                    is_visible={this.props.poi.description.is_visible}
                />
                <ParentPOI
                    parent={this.props.poi.parent}
                    docks={this.props.poi.description.docks}
                    is_visible={this.props.poi.description.is_visible}
                />
                <RequestBar/>
                <div className="request-feedback"><p>{this.props.request_feedback}</p></div>
            </section>
        );
    }
}

export class Description extends React.Component {
    render() {
        return (
            <div
                className={"description-container"}
                style={{
                    opacity: this.props.is_visible ? '100%' : '0%'
                }}
            >
                {this.props.text.map((word, index) => {
                    if (word[0] === '[') {
                        const name = /\w+/.exec(word)[0];
                        return (<TileDock
                            key={index}
                            name={name}
                            type={"path"}
                            content={this.props.docks[name].content}
                        />);
                    } else if (word[0] === '<') {
                        console.log(word)
                        return (<span
                            className={"word-item"}
                            key={index}
                        >{word.slice(1)}</span>);
                    } else {
                        return (<span
                            className={"word"}
                            key={index}
                        >{word}</span>);
                    }
                })}
            </div>
        );
    }
}

function ParentPOI (props) {
    if (props.parent) {
        return (
            <div
                className={"parent-poi-container"}
                style={{
                    opacity: props.is_visible ? '100%' : '0%'
                }}
            >
                <span className={"word"}>Return to </span>
                <TileDock
                    key={0}
                    name={props.parent.name}
                    type={"path"}
                    content={props.docks[props.parent.name].content}
                /> 
                <span className={"word"}>.</span>
            </div>
        );
    } else {
        return (null);
    }
}

const mapStateToProps = state => {
    return ({
        poi: state.poi,
        request_feedback: state.invalid_request_message,
        transition_is_active: state.transition_is_active,
        objective: state.objective,
        paths: state.paths,
        isTransitioning: state.stage.stage_transitioning
    });
};

export default connect(
    mapStateToProps
)(StoryModule);
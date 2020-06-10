import React from "react"
import "./story-mod.css"
import { connect } from 'react-redux'
// import { updateObjective, updatePOI } from "../redux/actions"
import RequestBar from '../request-bar/RequestBar'
import {Tile} from "../Tile";
import {Droppable} from "react-beautiful-dnd";

class StoryModule extends React.Component {

    // componentDidMount() {
    //     this.props.dispatch(updatePOI({name: "lobby", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut [[[[[lobby]]]]] et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", linked_poi: ["research_wing", "admin_wing", "front_desk"], linked_items: []}))
    //     this.props.dispatch(updateObjective({objective: "new_objective"}))
    // }

    render() {
        return (
            <section className="story-container">
                <p className="objective">objective: {this.props.objective}</p>
                <h3 className="poi-name">/{this.props.poi.name}</h3>
                <Description
                    text={this.props.poi.description.text.split(" ")}
                    embeds={this.props.poi.description.embeds}
                />
                <RequestBar/>
            </section>
        );
    }
}

export class Description extends React.Component {
    render() {
        return (
            <div className={"description-container"}>
                {this.props.text.map((word, index) => {
                    if (word[0] === '[') {
                        const name = /\w+/.exec(word)[0];
                        return (<TileEmbed
                            name={name}
                            type={"path"}
                            embeds={this.props.embeds}
                            key={index}
                        />);
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

export class TileEmbed extends React.Component {
    render() {
        return (
            <Droppable
                droppableId={this.props.name + "_embed"}
                type={this.props.type}
            >
                {(provided, snapshot) => (
                    <span
                        className={"embed"}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {this.props.embeds[this.props.name + "_embed"].docked ?
                            <Tile
                                key={0}
                                name={this.props.name}
                                type={this.props.type + "s"}
                                index={0}
                            /> : <h3>/{this.props.name}</h3>
                        }
                        {provided.placeholder}
                    </span>
        )}
            </Droppable>
        );
    }
}

const mapStateToProps = state => {
    return ({
        poi: state.poi,
        objective: state.objective
    });
};

export default connect(
    mapStateToProps
)(StoryModule);
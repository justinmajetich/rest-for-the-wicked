import React from "react"
import "./story-mod.css"
import { connect } from 'react-redux'
import RequestBar from '../request-bar/RequestBar'
import { TileDock } from '../tiles/TileDock'

class StoryModule extends React.Component {
    render() {
        return (
            <section className="story-container">
                <div className={"story-header-box"}>
                    <div className={"story-header"}>
                        <h3 className="poi-name">/{this.props.poi.name}</h3>
                        <p className="objective">objective:<br />{this.props.objective}</p>
                    </div>
                </div>
                <Description
                    text={this.props.poi.description.text.split(" ")}
                    docks={this.props.poi.description.docks}
                />
                <ParentPOI
                    parent={this.props.poi.parent}
                    docks={this.props.poi.description.docks}
                />
                <RequestBar/>
                <div className="request-feedback"><p>{this.props.request_feedback}</p></div>
            </section>
        );
    }
}

export class Description extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className={"description-container"}>
                {this.props.text.map((word, index) => {
                    if (word[0] === '[') {
                        const name = /\w+/.exec(word)[0];
                        console.log(name)
                        return (<TileDock
                            key={index}
                            name={name}
                            type={"path"}
                            content={this.props.docks[name].content}
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

function ParentPOI (props) {
    
    console.log(props)

    if (props.parent) {
        return (
            <div
                className={"parent-poi-container"}
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
        objective: state.objective
    });
};

export default connect(
    mapStateToProps
)(StoryModule);

//export class TileEmbed extends React.Component {
//     render() {
//         return (
//             <Droppable
//                 droppableId={this.props.name + "_dock"}
//                 type={this.props.type}
//             >
//                 {(provided, snapshot) => (
//                     <span
//                         className={"dock"}
//                         ref={provided.innerRef}
//                         {...provided.droppableProps}
//                     >
//                         {this.props.docks[this.props.name].docked ?
//                             <Tile
//                                 key={0}
//                                 name={this.props.name}
//                                 type={this.props.type + "s"}
//                                 index={0}
//                             /> : <h3>/{this.props.name}</h3>
//                         }
//                         {provided.placeholder}
//                     </span>
//         )}
//             </Droppable>
//         );
//     }
// }
import React from "react"
import "./story-mod.css"
import { connect } from 'react-redux'
import RequestBar from '../request-bar/RequestBar'
import { TileDock } from '../tiles/TileDock'

class StoryModule extends React.Component {
    render() {
        return (
            <section className="story-container">
                <p className="objective">objective: {this.props.objective}</p>
                <h3 className="poi-name">/{this.props.poi.name}</h3>
                <Description
                    text={this.props.poi.description.text.split(" ")}
                    docks={this.props.poi.description.docks}
                />
                <RequestBar/>
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

const mapStateToProps = state => {
    return ({
        poi: state.poi,
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
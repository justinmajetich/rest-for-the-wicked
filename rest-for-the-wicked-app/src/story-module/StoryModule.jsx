import React from "react"
import "./story-mod.css"
import { connect } from 'react-redux'
import { updateObjective, updatePOI } from "../redux/actions"
import RequestBar from '../request-bar/RequestBar'

class StoryModule extends React.Component {

    componentDidMount() {
        this.props.dispatch(updatePOI({name: "lobby", description: "new_description", linked_poi: ["research_wing", "admin_wing", "front_desk"], linked_items: []}))
        this.props.dispatch(updateObjective({objective: "new_objective"}))
    }

    render() {
        return (
            <section className="story-container">
                <p className="objective">{this.props.objective}</p>
                <h3 className="poi-name">/{this.props.poi.name}</h3>
                <p className="poi-description">{this.props.poi.description}</p>
                <RequestBar/>
            </section>
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
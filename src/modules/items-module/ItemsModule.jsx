import React from "react";
import "./items-mod.css";
import {connect} from "react-redux";
import {TileDock} from "../../tiles/TileDock";

export class ItemsModule extends React.Component {
    render() {
        return (
            <section className={this.props.isTransitioning ? "item-container-outro" : "item-container"}>
                <div className="title-bar">
                    <h4>{this.props.items.title}</h4>
                </div>
                <div className={"item-harbor"}>
                    {Object.entries(this.props.items.docks).map((dock, index) => {
                        return (
                            <TileDock
                                key={index}
                                name={dock[0]}
                                type={this.props.items.title.slice(0, -1)}
                                content={dock[1]}
                            />
                        );
                    })}
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return ({
        items: state.droppables.lists.item_list,
        isTransitioning: state.stage.stage_transitioning
    });
};

export default connect(
    mapStateToProps
)(ItemsModule);
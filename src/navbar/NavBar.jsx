import React from 'react'
import {connect} from "react-redux";
import './nav-bar.css'

function NavBar(props) {
    return (
        <section className={"nav-bar"}>
            <span className={"left-nav-wrapper"}>
                <a id={"home-link"} href={'/'}><span>Home Page</span></a>
                <p className={props.currentStage >= 2 ? "show" : "hide"}>REST for the wicked</p>
            </span>
            <span className={"right-nav-wrapper"}>
                <a id={"about-link"} href={'/about'}>/about</a>
                <a id={"github-link"} href={"https://github.com/justinmajetich/rest-for-the-wicked"}><span>GitHub Page</span></a>
            </span>
        </section>
    );
}

const mapStateToProps = state => {
    return ({
        currentStage: state.stage.current
    });
};

export default connect(
    mapStateToProps
)(NavBar);
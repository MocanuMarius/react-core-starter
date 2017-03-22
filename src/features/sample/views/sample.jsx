import React from 'react';
import {render} from 'react-dom';
import {Route, Redirect} from "react-router";
import {RestrictedRoute} from "../../../main/script/stateResolver.jsx"

console.log("restr", RestrictedRoute)
class SampleView extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>
                    Hello !!!
                </h1>
                {/* <Redirect to="/login" /> */}
                <RestrictedRoute enabled={false}/>

                <button onClick={this.props.history.goBack.bind(this)}>
                    B3ACK ?!!</button>

            </div>
        );
    }
}

module.exports = {
    route: {
        path: "/sampleview",
        component: SampleView,
        needsLogin: true
    }
}

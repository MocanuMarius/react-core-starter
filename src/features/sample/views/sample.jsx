import React from 'react';
import {render} from 'react-dom';
import {Route, Redirect} from "react-router";

class SampleView extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1> Hello !!! </h1>
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
		needsLogin: true,
    }
}

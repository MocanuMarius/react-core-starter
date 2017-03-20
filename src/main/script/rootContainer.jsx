import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute} from 'react-router'

import stateResolver from "./stateResolver.jsx"
import LoginView from "../../features/login/views/login.jsx"

import browserHistory from './history.jsx'

export default class App extends React.Component {
	constructor(props){ super(props) }

	render() {
		return (
			<Router history={ browserHistory }>
				<Route path="/" component={ stateResolver }/>
				<Route path="/login" component={ LoginView } />
				<Route path="/sampleview" component={ SampleView } />
			</Router>
		)
    }
}

module.exports = App

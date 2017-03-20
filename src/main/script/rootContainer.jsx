import React from 'react'
import { Router, Route, IndexRoute} from 'react-router'
import {render} from 'react-dom'

import stateResolver from "./stateResolver.jsx"
import LoginView from "../../features/login/views/login.jsx"
import SampleView from "../../features/sample/views/sample.jsx"


import browserHistory from './history.jsx'

export default class App extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<Router history={ browserHistory }>
				<div>
					<Route path="/" component={ stateResolver }/>
					<Route path="/login" component={ LoginView } />
					<Route path="/sampleview" component={ SampleView } />
				</div>
			</Router>
		);
    }
}

module.exports = App

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute} from 'react-router'

import LoginView from "../../features/login/views/login.jsx"
import SampleView from "../../features/sample/views/sample.jsx"

import browserHistory from './history.jsx'


class StateResolver extends React.Component {
	constructor(){ super()
		console.log("props are', this.props", this.props)
	}

	render(){
		return(
			<Router history={ browserHistory }>
				<Route path="/login" component={ LoginView } />
				<Route path="/sampleview" component={ SampleView } />
			</Router>
		)
	}

}

export default StateResolver

import React from 'react';
import { Router, Route, IndexRoute} from 'react-router'
import {render} from 'react-dom'

import LoginView from "../../features/login/views/login.jsx"
import SampleView from "../../features/sample/views/sample.jsx"

import browserHistory from './internal/history.jsx'

class StateResolver extends React.Component {

	constructor(){
		super()
		browserHistory.push("/login");
	}

	render(){return null;}

}

export default StateResolver

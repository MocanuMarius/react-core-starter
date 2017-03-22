import React from 'react';
import { Router, Route, IndexRoute , Redirect } from 'react-router'
import {render} from 'react-dom'

import LoginView from "../../features/login/views/login.jsx"
import SampleView from "../../features/sample/views/sample.jsx"

import browserHistory from './internal/history.jsx'

const defaultRoute = "/login"

const resolveInitialState = () => {	browserHistory.push(defaultRoute); }

export class RestrictedRoute extends React.Component {
	render() {
		if (this.props.enabled) {
			return (<Redirect to={defaultRoute} />)
		} else return (<h1> No need </h1>)
	}
}


export class StateResolver extends React.Component {
	constructor() {
		super()
		//# TODO
		// Possibly push an interrmediary state until AUTH is figuring out
		resolveInitialState()
	}
	render() { return null}
}

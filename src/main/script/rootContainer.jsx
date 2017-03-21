import React from 'react'
import { Router, Route, IndexRoute , Redirect } from 'react-router'
import {render} from 'react-dom'

import stateResolver from "./stateResolver.jsx"
import LoginView from "../../features/login/views/login.jsx"
import SampleView from "../../features/sample/views/sample.jsx"
import routeInterceptor from "../route-interceptor.js"

let routes = require("../route-loader.js").default

console.log("Routes are", routes)

import browserHistory from './internal/history.jsx'

export default class App extends React.Component {
	constructor(props){
		super(props)
	}
	getInfo(a){
		console.log(a)
	}
	render() {
		return (
			<Router history={ browserHistory } onuupdate={this.getInfo.bind(this)}>
				<div>
				<Route path="/" component={ stateResolver }/>
				{ routes.map((item) =>
					<Route
							key={ item.path }
							path={ item.path }
							component={ item.component }
							/>
					// item.needsLogin ? (<Redirect to="/login" state={ failedToAct: true }/>) :null
				 )}
				</div>
			</Router>
		);
    }
}

module.exports = App



// <div>
// 	<Route path="/" component={ stateResolver }/>
// 	<Route path="/login" component={ LoginView } />
// 	<Route path="/sampleview" component={ SampleView } />
// </div>

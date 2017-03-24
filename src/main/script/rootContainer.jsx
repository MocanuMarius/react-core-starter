import React from 'react'
import { Router, Route, IndexRoute , Redirect } from 'react-router'
import {render} from 'react-dom'

import { StateResolver } from "./stateResolver.jsx"
import LoginView from "../../features/login/views/login.jsx"
import SampleView from "../../features/sample/views/sample.jsx"

let routes = require("./route-loader.js").default

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
					<Route path="/" component={ StateResolver }/>
					<Route path="*" component={ StateResolver }/>
					{ routes.map((item) =>
						<Route
								key={ item.path }
								path={ item.path }
								component={ item.component }
								/>
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

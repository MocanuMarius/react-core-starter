import React from 'react'
import {render} from 'react-dom'
import {Link} from "react-router-dom"
import { Route, Redirect } from "react-router"

export default class LoginView extends React.Component {
	render() {
		return (
			<div>
				<h1>Here should</h1>
				<Link to={{
					pathname: "/sampleview",
					state: {
						isSpecialState: true
					}
				}}>
					<button>
						Go to sample 3333viewz
					</button>
				</Link>
			</div>
		);
	}
}

module.exports = {
	route: {
		path: "/login",
		component: LoginView,
		needsLogin: false,
	}
}

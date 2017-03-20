import React from 'react'
import {render} from 'react-dom'
import { Link } from "react-router-dom"
// import { history } from "./../../../main/script/history.jsx"

export default class LoginView extends React.Component {
    render() {
		return (
			<div>
				<h1>Here should</h1>
				<Link to={{
					pathname: "/sampleview", state:{ isSpecialState: true }
				}}>
					<button>
						Go to sample viewz
					</button>
				</Link>
			</div>
		);
	}
}

module.exports = LoginView

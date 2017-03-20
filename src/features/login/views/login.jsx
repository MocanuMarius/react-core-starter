import React from 'react'
import {render} from 'react-dom'
import { Link } from "react-router-dom"


export default class LoginView extends React.Component {
	goToHome(){

	}
    render() {
		return (
			<div>
				<h1> Bullshit man..</h1>
				<p> Hey ? </p>
				<button onclick={this.goToHome.bind(this)}>
					<Link to={{ pathname: '/sampleView'}} /> G3O2 T3O HOM3E
				</button>
			</div>
		)
	}
}

module.exports = LoginView

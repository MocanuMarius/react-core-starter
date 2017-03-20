import React from 'react'
import {render} from 'react-dom'
import { Link } from "react-router-dom"
// import { history } from "./../../../main/script/history.jsx"

export default class SampleView extends React.Component {
	goToHome(){ console.log("going home") }
    render() {
		return (
			<div>
				<h1> Navgatsed3 .433333...</h1>
				<p> Hey ? </p>
			</div>
		)
	}
}

module.exports = SampleView

import React from 'react';
import { render } from 'react-dom';
import { history } from "./../../../main/script/history.jsx"

export default class SampleView extends React.Component {

	constructor(props){
		super(props)
	}
	render() {
		return (
			<div>
				<h1> Sample view with para333d3m3s33</h1>
				<button onClick={ this.props.history.goBack.bind(this) }> B3ACK ?!!</button>
			</div>
		);
	}
}

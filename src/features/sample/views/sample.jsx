import React from 'react';
import { render } from 'react-dom';

export default class SampleView extends React.Component {
    render() {
		return (
			<div>
				<h1> Sample view with param3s { this.state.props }</h1>
				<p> Hey ? </p>
			</div>
		)
	}
}

module.exports = SampleView

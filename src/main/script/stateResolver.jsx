import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router'

import LoginView from "../../features/login/views/login.jsx"

class StateResolver extends React.Component {
	constructor(){ super() }
	figureOutStateAndNavigate(){
		browserHistory.push("/login")
	}
	render(){
		this.figureOutStateAndNavigate()
		// return(
		// 	<Router history={ browserHistory }>
		// 		<Route path="/login" component={ LoginView } />
		// 	</Router>
		// )
	}

}

export default StateResolver

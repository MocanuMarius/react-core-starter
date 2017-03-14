import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import RootContainer from './rootContainer.jsx';

class App extends React.Component {
  render () {
    return (
		<AppContainer>
	      <RootContainer />
	    </AppContainer>
	)
  }
}

if (module.hot) {
  module.hot.accept('./rootContainer.jsx', () => {
    const NextRootContainer = require('./rootContainer.jsx');

    render((
      <AppContainer>
        <NextRootContainer />
      </AppContainer>
  ), document.getElementById('app'));
  })
}

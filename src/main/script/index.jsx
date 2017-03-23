import React from 'react';
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import RootContainer from './rootContainer.jsx';
import {render} from 'react-dom'
require("../sass/assets/fonts/icons.ttf")

ReactDOM.render(
  <AppContainer>
    <RootContainer/>
  </AppContainer>,
  document.getElementById('app')
);

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

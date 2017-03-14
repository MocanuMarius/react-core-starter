import React from 'react';
import {render} from 'react-dom';

System.import("../../features/button/button.jsx").then((niceButton) => {})
import NiceButton from '../../features/button/button.jsx'

export default class App extends React.Component {
    render() {
        console.log(" THE ENVIRONMENT IS", process.env.NODE_ENV)
        return (<NiceButton message="myMs3333g2"/>)
    }
}
module.exports = App

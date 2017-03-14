import React from 'react';
import {render} from 'react-dom';
import {buttonStyles} from './../sass/button.sass';

export default class niceButton
extends React.Component {
    constructor() {
        super()
		this.forceUpdate()
        this.state = {
            items: []
        }
    }
    addItem() {
        this.setState({
            items: this.state.items.concat({
                label: Math.random() * 1000,
                key: Math.random() * 943
            })
        })
    }
    render() {
        var items = this.state.items;
        console.log("items is", items)
        return (
            <div className="container">
                <button className="btn btn-primary" onClick={this.addItem.bind(this)}>{this.props.message}</button>
                {items.map((item) => <li>{item.label}</li>)}

                <div className="row">
                    <div className="col col-md-12">
                        <button className="btn btn-danger">
                            aa33551233123</button>
                    </div>
                </div>

            </div>
        );

    }
}

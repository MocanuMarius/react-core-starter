import React from 'react';
import {render} from 'react-dom';
import {Route, Redirect} from "react-router";
import {RestrictedRoute} from "../../../main/script/stateResolver.jsx"
import {observer} from "mobx-react"
import {observable} from "mobx"
// import DevTools from 'mobx-react-devtools';

import Input from 'semantic-ui-react/dist/commonjs/elements/Input'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button'
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu'
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment'
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon'


console.log("restr", RestrictedRoute)

@observer
class SampleView extends React.Component {
    constructor() {
        super()
        this.forms = observable({
            firstName: "Gigel",
            lastName: "Bucureanu",
            isGenericPerson: false,
			activeItem: 'bio',
            get viewFirstName() {
                return this.isGenericPerson
                    ? "N/A"
                    : this.firstName
            },
            set viewFirstName(val) {
                this.firstName = val
            },
            set viewLastName(val) {
                this.lastName = val
            },
            get viewLastName() {
                return this.isGenericPerson
                    ? "N/A"
                    : this.lastName
            },
            get label() {
                return this.isGenericPerson
                    ? "Generic person"
                    : this.firstName + " " + this.lastName
            }
        })
    }
    render() {
        return (

            <div className="container-fluid mt-4">
                <Button>
                    Click Here
                </Button>

				<Menu attached='top' tabular>
		          <Menu.Item name='bio' active={this.forms.activeItem === 'bio'} onClick={() => this.forms.activeItem = 'bio'} />
		          <Menu.Item name='photos' active={this.forms.activeItem === 'photos'} onClick={() => this.forms.activeItem = 'photos'} />
		          <Menu.Menu position='right'>
		            <Menu.Item>
		              <Input transparent icon={{ name: 'search', link: true }} placeholder='Search users...' />
		            </Menu.Item>
		          </Menu.Menu>
		        </Menu>

		        <Segment attached='bottom'>
		          <h1> Segment </h1>
		        </Segment>

                <RestrictedRoute enabled={false}/>

				<div className="col col-md-1">
                    <Input icon='users' iconPosition='left' placeholder='Search users...'/>
                </div>

                <div className="col col-md-10">
                    <button onClick={this.props.history.goBack.bind(this)}>
                        BACK
                    </button>
                    <hr/>
                    <input type="checkbox" name="isGenericPerson" value={this.forms.isGenericPerson} onChange={(ev) => {
                        this.forms.isGenericPerson = ev.target.checked
                    }}/>
                    <label htmlFor="isGenericPerson">Is this guy just a regular guy ?</label>
                    <hr/>
                    <div className="form-group">

                        <input className="form-control" name="firstName" type="text" value={this.forms.viewFirstName} disabled={this.forms.isGenericPerson} onChange={(ev) => {
                            this.forms.viewFirstName = ev.target.value
                        }}/>
                        <br/>
                        <label htmlFor="firstName">INSERT YOUR FIRST NAME</label>

                        <label htmlFor="firstName">INSERT YOUR LAST NAME</label>
                        <input className="form-control" type="text" value={this.forms.viewLastName} disabled={this.forms.isGenericPerson} onChange={(ev) => {
                            this.forms.viewLastName = ev.target.value
                        }}/>

                    </div>
                    <span className="bg-primary">
                        {'You will be known as'}</span>
                    <em>{this.forms.label}</em>

                </div>
                <div className="col col-md-1"></div>
            </div>
        );
    }
}

module.exports = {
    route: {
        path: "/sampleview",
        component: SampleView,
        needsLogin: true
    }
}

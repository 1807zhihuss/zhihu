import React, { Component } from 'react'
import Home from '../home'
import {Switch,Route,Redirect} from 'react-router-dom'
export default class app extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Redirect to='home'/>
                </Switch>
                {/* <Home></Home> */}
            </div>
        )
    }
}

import React, { Component } from 'react'
import Home from '../home'
import { Switch, Route, Redirect } from 'react-router-dom'

import Common from '../content/common'
import Weibo from '../content/weibo'

import Login from '../login'

export default class app extends Component {
    render() {
        return (
            <div>
                <Switch>
                    {/* 登录 */}
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />
                    <Route path="/weibo" component={Weibo} />
                    <Redirect to='/login' />
                </Switch>
                {/* <Home></Home> */}

                {/*二级公共模板 */}
                {/* <Common /> */}
                {/* 微博热搜 */}
                {/* <Weibo /> */}
                {/* 登录 */}
                {/* <Login /> */}

            </div >
        )
    }
}

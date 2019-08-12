import React, { Component,Suspense } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'
// import Home from '../home'
// import Xianqing from '../xianqing'
// import Weibo from '../content/weibo/index'
// import Login from '../login'

const Home = React.lazy(()=>import('../home'))
const Weibo = React.lazy(() => import('../content/weibo/index'))
const Login = React.lazy(() => import('../login'))
const Xianqing = React.lazy(() => import('../xianqing'))

export default class app extends Component {
    render() {
        return (
            <div>
                <Suspense fallback={<div>加载中……</div>}>
                    <Switch>
                        {/* 登录 */}
                        <Route path="/login" component={Login} />
                        <Route path="/home" component={Home} />
                        <Route path="/xianqi/:id" component={Xianqing} />
                        <Route path="/weibo" component={Weibo} />
                        <Redirect to='/login' />
                    </Switch>
                </Suspense >
            </div>

        )
    }
}

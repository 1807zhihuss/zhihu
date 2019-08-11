import React, { Component } from 'react'

import Common from '../content/common'
import Weibo from '../content/weibo'

import Login from '../login'

export default class app extends Component {
    render() {
        return (
            <div>

                {/*二级公共模板 */}
                {/* <Common /> */}
                {/* 微博热搜 */}
                {/* <Weibo /> */}
                {/* 登录 */}
                <Login />

            </div>
        )
    }
}

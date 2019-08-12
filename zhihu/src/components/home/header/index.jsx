import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import LinkList from '../list'
import './header.scss'
export default class index extends Component {
    render() {
        // console.log()
        // const { match } = this.props
        return (
            <header className="header-box ">
                <div className='header-top flex flex-ju'>
                    <NavLink to='/home' className="hed-top">知乎</NavLink>
                    <NavLink className="sou-put" to='/weibo'>
                        🔍 搜索
                    </NavLink>
                    <NavLink to='/login' className="size-box">
                        注册或者登陆
                    </NavLink>
                </div>
            </header>
        )
    }
}

import React, { Component } from 'react'
// import {NavLink} from 'react-router-dom'
// import LinkList from '../list'
import './header.scss'
export default class index extends Component {
    render() {
        console.log()
        const { match} = this.props
        return (
            <header className="header-box ">
                <div className='header-top flex flex-ju'>
                    <div className="hed-top">知乎</div>
                    <div className="sou-put">
                       🔍 搜索
                    </div>
                    <div className="size-box">
                        注册或者登陆
                    </div>
                </div>
                {/* <div className="yin-box"></div>
                <div className='header-tab'>
                    <ul className='ul'>
                        {
                            LinkList.map(item=>{
                                return <li key={item.url}> <NavLink to={match.url+item.url}>{item.title}</NavLink></li>
                            })
                        }
                    </ul>
                </div> */}
            </header>
        )
    }
}

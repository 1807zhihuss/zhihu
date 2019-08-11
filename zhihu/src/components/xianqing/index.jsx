import React, { Component } from 'react'
import Header from '../home/header/index'
import './xiangqing.scss'
export default class index extends Component {
    render() {
        return (
            <div className="xian-box">
                <Header></Header>
                <main>
                    <h1>考研复试中，有哪些令人窒息的问题？</h1>
                    <div className="content-box">
                        <div>姓名</div>
                        <div>某直辖市985毕业，考研失利，去另一直辖市野鸡学校调剂面试…（大成功）</div>
                    </div>
                </main>



            </div>
        )
    }
}

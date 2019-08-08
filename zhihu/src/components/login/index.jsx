import React, { Component } from 'react'
import './index.scss'
export default class Login extends Component {
    render() {
        return (
            <div className='login-container'>
                <header className='login-header'>
                    <span className='l-h-x'>X</span>
                    <div className='l-h-text1'>登录知乎</div>
                    <div className='l-h-text2'>发现更多可信赖的解答</div>
                </header>
                <main className='login-main'>
                    <div className='l-form'>
                        <select name="" id="" className='l-h-select1'>
                            <option value="中国 +86">中国 +86</option>
                            <option value="美国 +1">美国 +1</option>
                            <option value="日本 +81">日本 +81</option>
                            <option value="香港 +852">香港 +852</option>
                            <option value="台湾 +886">台湾 +886</option>
                        </select>
                        <input type="text" placeholder='请输入手机号' className='l-h-input1' />
                    </div>
                    <div className='l-pass '>
                        <input type="text" placeholder='请输入6位验证码' className='l-h-input2' />
                        <div className='l-send'>发送验证码</div>
                    </div>
                    <div className='l-text'>
                        <p>未注册手机验证后自动登录</p>
                        <p>注册即同意《知乎协议》《隐私保护指引》</p>
                        <div className='login'>登录</div>
                    </div>
                    <div className='l-b-text'>
                        <div>密码登录</div>
                        <div>需要帮助</div>
                    </div>
                    <div className='l-bottom'>
                        <p>社交账号登录</p>
                        <p>注册机构账号</p>
                    </div>

                </main>
            </div>
        )
    }
}

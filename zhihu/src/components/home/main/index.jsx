import React, { Component } from 'react'
import axios from 'axios'
import './main.scss'
import Common from '../../content/common'
export default class index extends Component {
    constructor(props){
        super()
        this.state={
            data:{},
            body:{}
        }
    }
    componentDidMount() {
        // console.log(this.props)
        // axios.get('http://localhost:4500/zhihu').then(res => {
        //     console.log(res.data)
        //     this.setState({data:res.data})

        // })


    }
    listbtn=(id)=>{
        // console.log(id)
        axios.get('http://localhost:4500/ditail', { params:{ id }}).then(res => {
            // console.log(res.data)
            this.setState({
                body: res.data
            })
        })
    }
    render() {
        // console.log(this.state)
        // const { stories } = this.state.data
        // const { body } = this.state.body

        return (
            <div className="mian-cont">
                <Common {...this.props} />
            </div>
        )
    }
}

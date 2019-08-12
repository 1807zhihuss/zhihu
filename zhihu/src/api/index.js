import axios from 'axios';
// 设置默认访问路径
axios.defaults.baseURL = "http://localhost:4502"

// 请求拦截 响应拦截 Interceptors 拦截器
axios.interceptors.response.use((res) => {
    return res.data
}, (err) => {
    Promise.reject(err)
})

// 获取登录数据
// export let loginApi = (data) => {
//     console.log(data)
//     return axios.request({
//         url: '/login',
//         method: 'post',
//         data: data,
//     })
// }

// 获取首页内容
export let shouApi = (data) => {
    // console.log(data)
    return axios.request({
        url: `/shou?id=${data}`,
        method: 'get',

    })
}

// 获取首页详情内容
export let xiangqingApi = (data,id) => {
    // console.log(data,id)
    return axios.request({
        url: `/xiang?page=${data}&id=${id}`,
        method: 'get',
    })
}
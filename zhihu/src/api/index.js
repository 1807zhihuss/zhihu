import axios from 'axios';
// 设置默认访问路径
axios.defaults.baseURL = "http://localhost:4000"

// 请求拦截 响应拦截 Interceptors 拦截器
axios.interceptors.response.use((res) => {
    return res.data
}, (err) => {
    Promise.reject(err)
})

// 获取登录数据
export let loginApi = (data) => {
    console.log(data)
    return axios.request({
        url: '/login',
        method: 'post',
        data: data,
    })
}
const express = require('express')
// 一个node.js 后端框架，类似koa
const app = express();
const bodyParser = require('body-parser') // 使用中间件可以获取到post-body里的数据
app.use(bodyParser.urlencoded({ extended: true })) // 表单请求
app.use(bodyParser.json()) // json请求--post
// 获取本地ip 地址的
const os = require('os');
///////////////////获取本机ip///////////////////////
function getIPAdress(os) {
    var interfaces = os.networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}
const IPv4 = getIPAdress(os)


app.listen(4000, () => { console.log('服务器启动：http://localhost:4000; 本机ip：http://' + IPv4) })

// 解决跨域可以自己设置可以使用中间件 cors
//  const cors = require('cors') app.use(cors)
app.all('*', function (req, res, next) { // 设置跨域白名单 可以使用cors模块，这里没使用
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By", ' 3.2.1');
    // res.header("Content-Type", "application/json;charset=utf-8");
    // next();
    // 这里的* 表示不拦截，可以响应所有的数据
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if (req.method === 'OPTIONS') {
        // res.send(200)
        res.sendStatus(200)
    } else {
        // 必须有next方法，才能跳出这个方法到下一个请求里去
        next()
    }
});
// app.git 是拦截到get 请求的
app.get('/', (req, res) => {
    res.json({
        ip: IPv4
    })
})

const list = [
    {
        username: 'qwerty',
        password: '123456'
    }
]
app.post('/login', (req, res) => {
    const state = req.body
    console.log(state)
    // 账号
    const loginList = list.find(item =>
        item.username === state.username
    )
    // 密码
    let typely
    if (loginList) {
        if (loginList.password === state.password) {
            // console.log('密码')
            typely = true
        } else {
            typely = false
        }
    } else {
        typely = false
    }
    console.log(typely)
    res.json({
        state: { typely: typely },
    })
})
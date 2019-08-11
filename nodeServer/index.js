/* eslint-disable default-case */
// 1.初始化目录  npm init -y
// 2.安装node.js 包 npm i -S express body-parser

const express = require('express')
// 一个node.js 后端框架，类似koa
const app = express();
const bodyParser = require('body-parser') // 使用中间件可以获取到post-body里的数据
app.use(bodyParser.urlencoded({ extended: true })) // 表单请求
app.use(bodyParser.json()) // json请求--post
const https =require('https')
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


app.listen(4501, () => { console.log('服务器启动：http://localhost:4501; 本机ip：http://' + IPv4) })


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
        res.sendStatus(200)
    } else {
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

// app.get('/zhihu', (req, respoens) => {
//     var page = req.query.page ? req.query.page : 4
//     console.log(page)
//     https.get('https://news-at.zhihu.com/api/' + page + '/news/latest', (res) => {
//         res.on('data', (d) => {
//             let data = d.toString('utf-8');
//             respoens.json(JSON.parse(data))
//         });

//     }).on('error', (e) => {
//         console.error('错误：', e);
//     });
// })

// const iconv = require('iconv-lite');
// app.get('/ditail', (req, respoens) => {

//     https.get('https://news-at.zhihu.com/api/4/news/' + req.query.id, (res) => {
//         var chunks = [];
//         res.on('data', (d) => {
//             chunks.push(d)
//         }).on('end', function () {
//             chunks = Buffer.concat(chunks);
//             // 对二进制进行解码
//             var body = iconv.decode(chunks, 'utf-8');
//             // console.log(body);
//             respoens.end(body);
//         }).on('error', (e) => {
//             console.error('错误：', e);
//         });;
//     })
// })


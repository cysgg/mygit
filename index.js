/**
 * 图书管理系统-入口文件
 */
const router = require('./router.js')
const express = require('express')
const path = require('path')
const pug = require('pug')
const bodyparser = require('body-parser')

const app = express();

//启动静态资源服务
app.use('/www', express.static('views/public'))

//设置模板路径
app.set('views', path.join(__dirname, 'views'))
//设置模板引擎
app.set('view engine', 'pug')

//挂载处理中间件 请求参数和json格式的参数
app.use(bodyparser.urlencoded({
    extended: false
}))
app.use(bodyparser.json())

//配置路由
app.use(router);

app.listen(3000, () => {
    console.log('running');

})
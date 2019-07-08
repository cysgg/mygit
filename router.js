/**
 * 路由模块
 */

const express = require('express')
const router = express.Router()

const service = require('./service.js')


//渲染主页
router.get('/', service.showIndex)
//跳转到添加图书的页面
router.get('/toAddBook', service.toAddBook)
//添加图书(提交表单)
router.post('/addBook', service.addBook)
//跳转到编辑页面
router.get('/toEditBook',service.toEditBook)
//编辑页面(提交表单)
router.post('/editBook',service.editBook)

module.exports = router
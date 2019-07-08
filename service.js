/**
 * 业务模块
 */
const path = require('path')
const fs = require('fs')
const data = require('./data.json')

//自动生成图书编号(自增)
let maxBookCode = () => {
   let arr = [];
   data.forEach(element => {
      arr.push(element.id)
   });
   return Math.max.apply(null, arr);
}

// 渲染主页面
exports.showIndex = (req, res) => {
   res.render('index', {
      list: data
   })
}
//跳转到添加图书的页面
exports.toAddBook = (req, res) => {
   res.render('addBook', {})
}
//添加图书保存数据
exports.addBook = (req, res) => {
   let info = req.body;
   let book = {}
   for (key in info) {
      book[key] = info[key]
   }
   book.id = maxBookCode() + 1
   data.push(book)
   //把内存中的写入文件
   fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data,null,4), (err) => {
      if (err) {
         res.send('server err')
      }
      //写入成功挑战到主页面
      res.redirect('/')
   })

}

//跳转到修改图书的页面
exports.toEditBook = (req, res) => {
   let idcode = req.query.id
   let book = {}
   data.forEach((item)=>{
      if(idcode == item.id){
         book = item;
         return;
      }
   })
   res.render('editBook',book)
}
//修改图书保存数据
exports.editBook = (req, res) => {
   let book = req.body;
   data.forEach((item)=>{
      if(book.id == item.id){
         for(key in book){
            item[key] = book[key]
         }
      }
   })
   // console.log(data);
   
   //把内存中的写入文件
   fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data,null,4), (err) => {
      if (err) {
         res.send('server err')
      }
      //写入成功跳转到主页面
      res.redirect('/')
   })
}
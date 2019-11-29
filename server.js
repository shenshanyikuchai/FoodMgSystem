const express = require('express');
const dp = require('./db/module/connect');
const bodyParser = require('body-parser');
const path = require('path');
const foodRouter = require('./router/foodRouter');
// 实例化express对象
const app = express();

// 解析表单数据 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// 解析json数据 application/json
app.use(bodyParser.json());
// 加载第三方 中间件
app.use('/public', express.static(path.join(__dirname, './public/')));
app.use('/food', foodRouter);

app.listen(3000, ()=>{
    console.log("server start");
})
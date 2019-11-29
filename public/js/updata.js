function onUpdata(name){
    let price = $('.price')[1].value.trim();
    let desc = $('.desc')[1].value.trim();
    let typename = $('.typename')[1].value.trim();
    let typeid = $('.typeid')[1].value.trim();
    let updataObj = {}; //更新数据对象
    //若输入为空则不添加
    if(price){ 
        updataObj.price = price;
    }
    if(desc){
        updataObj.desc = desc;
    }
    if(typename){
        updataObj.typename = typename;
    }
    if(typeid){
        updataObj.typeid = typeid;
    }
    // 将对象转成JSON格式
    let indexObj = JSON.stringify({name});
    updataObj = JSON.stringify(updataObj);
    console.log("修改对象：" + updataObj)
    table.updata(indexObj, updataObj);
}

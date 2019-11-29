
function remove(){
    let th_checkBox = document.getElementsByClassName('check-box');
    let names = [];
    for(let i = 0; i < th_checkBox.length;i++){ //循环获取选择行的菜品名称
        var checkbox = th_checkBox[i].children[0];
        if(checkbox.checked){
            checkbox.checked = false;
            let addname = th_checkBox[i].parentNode.children[2].innerText; //选中对应行的菜品名称
            names.push(addname);
        }
    }
    // 先循环删除已选数据后更新页
    for(let i = 0; i < names.length;i++){ //用postremover接口删除数据
        let name = names[i];
        table.remove(name);
    }
    table.find();
}
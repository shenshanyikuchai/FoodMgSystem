// 查询功能
function onFind(){
    let fd_name = document.getElementById('fd_name');
    let fd_type = document.getElementById('fd_type');
    let name = fd_name.value.trim();
    let typename = fd_type.value.trim();
    let reqObj = {};
    if(name){
        reqObj.name = name;
    }
    if(typename){
        reqObj.typename = typename;
    }
    table.findObj = reqObj;
    console.log(reqObj);
    table.find(reqObj);
}

$('#bt_find')[0].onclick = onFind;
//获取列表 
function getList(page, pagelimit) {
    let res;
    $.ajax({
        type: "GET",
        url: "https://mp3.zzgoodqc.cn/api/songs?page=" + page + "&pageSize=" + pagelimit,
        async: false,
        dataType: "json",
        success: function (data) {
            res = data;
        },
    });
    return res;
}
//搜素
function getListById(id) {
    let searchData;
    $.ajax({
        type: "GET",
        url: "https://mp3.zzgoodqc.cn/api/songs/" + id,
        dataType: "json",
        async: false,
        success: function (res) {
            searchData = res.data.data;
        },
    });
    return searchData;
}
//删除 
function del(id) {
    $.ajax({
        type: "DELETE",
        url: "https://mp3.zzgoodqc.cn/api/songs/" + id,
        dataType: "json",
        async: false,
        success: function (res) {
        },
    });
}
//新增
function add(res) {
    $.ajax({
        type: "POST",
        url: "https://mp3.zzgoodqc.cn/api/songs",
        dataType: "json",
        async: false,
        data: res,
        headers: {
            "Content-Type": "application/json"
        },
        success: function (res) {
            alert(res.msg)
        },
    });
}
//修改
function upd(res) {
    let data = {
        title: res.title,
        artist: res.artist,
        album: res.album,
        year: res.year,
        genre: res.genre,
    };
    $.ajax({
        type: "PUT",
        url: "https://mp3.zzgoodqc.cn/api/songs/" + res.id,
        dataType: "json",
        async: false,
        data: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
        success: function (res) {
            alert(res.msg)
        },
    });
}
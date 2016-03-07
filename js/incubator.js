var addCompany = function(){

    var html = '<div class="table_item_tr">'+
           '<div class="table_item_td item_body" style="width: 12%"><input type="text"/></div>'+
           '<div class="table_item_td item_body" style="width: 8%"><input type="text"/></div>'+
           '<div class="table_item_td item_body" style="width: 8%"><input type="text"/> </div>'+
           '<div class="table_item_td item_body" style="width: 8%"><input type="text"/></div>'+
           '<div class="table_item_td item_body" style="width: 10%"><input type="text"/></div>'+
           '<div class="table_item_td item_body" style="width: 8%"><input type="text"/></div>'+
           '<div class="table_item_td item_body" style="width: 10%"><input type="text"/></div>'+
           '<div class="table_item_td item_body" style="width: 8%"><input type="text"/></div>'+
           '<div class="table_item_td item_body" style="width: 8%"><input type="text"/></div>'+
           '<div class="table_item_td item_body" style="width: 9%"><input type="text"/></div>'+
           '<div class="table_item_td item_operate" style="width: 9%"><a class="del" onclick="delTr(this)">删除</a></div></div>';

    $(".company_table .company_info").append(html);
}

var addGraduate = function(){

    var html = '<div class="table_item_tr">'+
           '<div class="table_item_td item_body" style="width: 12%"><input type="text"/></div>'+
           '<div class="table_item_td item_body" style="width: 8%"><input type="text"/></div>'+
           '<div class="table_item_td item_body" style="width: 8%"><input type="text"/></div>'+
           '<div class="table_item_td item_body" style="width: 9%"><input type="text"/></div>'+
           '<div class="table_item_td item_body" style="width: 9%"><input type="text"/></div>'+
           '<div class="table_item_td item_body" style="width: 8%"><input type="text"/></div>'+
           '<div class="table_item_td item_body" style="width: 9%"><input type="text"/></div>'+
           '<div class="table_item_td item_body" style="width: 9%"><input type="text"/></div>'+
           '<div class="table_item_td item_body" style="width: 9%"><input type="text"/></div>'+
           '<div class="table_item_td item_body" style="width: 8%"><input type="text"/></div>'+
           '<div class="table_item_td item_operate" style="width: 9%"><a class="del"  onclick="delTr(this)">删除</a></div></div>';

    $(".graduate_table .graduate_info").append(html);
}

var delTr = function(handle){

    var me = $(handle);
    var parentTr = me.closest(".table_item_tr");
    parentTr.remove();
}


$(function(){

    $(".tab_box li").on("click",function(){

        var me = $(this);
        var formName = me.attr("id");

        me.siblings().removeClass("active");
        me.addClass("active");

        $(".form_list").find(".form_hide").removeClass("form_show");

        $(".form_list").find("."+formName).addClass("form_show");
    });

    //附件上传
    $("body").on("change","input.upload:file",function(){
        var $me = $(this);
        var _fileElementId = $me.attr("id");

        if(_fileElementId){
            //TODO 文件类型、大小过滤

            //上传
            $.ajaxFileUpload ({
                url :'demodata/upload.json',
                secureuri :false,
                fileElementId : _fileElementId.substring(1),
                dataType : 'json',
                success : function (res, status){

                    if(res.success){

                        alert("上传成功");

                        $me.siblings("img").attr("src", res.data.url);

                        $me.closest(".zip_image").siblings(".info").empty();
                        var _infoHtml = "<dl><dt><a href='#'>" + res.data.name + "</a></dt>"
                                        + "<dt class='info_flow'>" + res.data.size + "</dt></dl>";
                        $me.closest(".zip_image").siblings(".info").append(_infoHtml);
//                        $me.siblings(":not('img')").remove();
                        $me.remove();
                    }
                },
                error: function (data, status, e){
                    console.info(e);
                }
            })
        }
    })
})
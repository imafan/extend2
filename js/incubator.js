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

    $.extend($.validator.messages, {
        required: "不能为空！",
        remote: "请修正此字段",
        email: "请输入有效的电子邮件地址",
        url: "请输入有效的网址",
        date: "请输入有效的日期",
        dateISO: "请输入有效的日期 (YYYY-MM-DD)",
        number: "请输入有效的数字",
        digits: "只能输入数字",
        creditcard: "请输入有效的信用卡号码",
        equalTo: "你的输入不相同",
        extension: "请输入有效的后缀",
        maxlength: $.validator.format("最多可以输入 {0} 个字符"),
        minlength: $.validator.format("最少要输入 {0} 个字符"),
        rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符串"),
        range: $.validator.format("请输入范围在 {0} 到 {1} 之间的数值"),
        max: $.validator.format("请输入不大于 {0} 的数值"),
        min: $.validator.format("请输入不小于 {0} 的数值")
    });

    $(".submit_btn a").click(function(){

        if($(this).closest("form").valid()){

        }
    })

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
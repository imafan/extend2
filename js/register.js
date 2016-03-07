/* 团队资料新增人员方法*/
var addPeople = function(type,handle){

	var me = $(handle);
	var peopleStr  = "";
	if(type=="creator"){
		peopleStr = "【创始人】";

	}else if(type == "links"){
		peopleStr = "【联系人】";

	}else{
		peopleStr = "【成员】";
	}

	var html = '<div class="table_item_tr">'+
			   '<div class="table_item_td item_title">'+peopleStr+'</div>'+
			   '<div class="table_item_td item_body"><input type="text" placeholder="姓名"></div>'+
			   '<div class="table_item_td item_body"><input type="text" placeholder="手机"></div>'+
			   '<div class="table_item_td item_body"><input type="text" placeholder="邮箱"></div>'+
			   '<div class="table_item_td item_body"><input type="text" placeholder="专业"></div>'+
			   '<div class="table_item_td item_operate"><a class="del" onclick="delTr(this)">删除</a></div></div>';

	var parentTr = me.closest(".table_item_tr");
	parentTr.after(html);
													
}

var addProject = function(){

	var html = '<div class="table_item_tr">'+
			   '<div class="table_item_td item_body" style="width: 220px;">'+
			   '<input type="text" placeholder="企业（项目）名称"></div>'+
			   '<div class="table_item_td item_body" style="width: 156px;">'+
			   '<input type="text" placeholder="项目负责人"></div>'+
			   '<div class="table_item_td item_body" style="width: 156px;">'+
			   '<input type="text" placeholder="联系电话"></div>'+
			   '<div class="table_item_td item_body" style="width: 155px;">'+
			   '<input type="text" placeholder="孵化时间段"></div>'+
			   '<div class="table_item_td item_body" style="width: 305px;">'+
			   '<input type="text" placeholder="备注"></div>'+
			   '<div class="table_item_td item_operate" style="width: 200px;"><a class="add" onclick="delTr(this)">删除</a></div></div>';
	
	$(".project_form .project_info").append(html);						
						
}

var addActivity = function(){

	var html = '<div class="table_item_htr">'+
			   '<div class="table_item_td" style="width: 100px;"><input type="text" placeholder="活动时间"></div>'+
			   '<div class="table_item_td" style="width: 173px;"><input type="text" placeholder="活动名称或主题"></div>'+
			   '<div class="table_item_td" style="width: 200px;"><input type="text" placeholder="活动地点"></div>'+
			   '<div class="table_item_td" style="width: 80px;"><input type="text" placeholder="人数"></div>'+
			   '<div class="table_item_td" style="width: 100px;"><input type="text" placeholder="活动负责人"></div>'+
			   '<div class="table_item_td" style="width: 120px;"><input type="text" placeholder="联系电话"></div>'+
			   '<div class="table_item_td item_picture" style="width: 326px;">'+
			   '<ul><li><img src="images/add_bg.png" alt=""><span>通知</span><input type="file" id="fileToUpload_3" name="fileToUpload" class="upload"></li>'+
			   '<li><img src="images/add_bg.png" alt=""><span>签到</span><input type="file" id="fileToUpload_3" name="fileToUpload" class="upload"></li>'+
			   '<li><img src="images/add_bg.png" alt=""><span>现场1</span><input type="file" id="fileToUpload_3" name="fileToUpload" class="upload"></li>'+
			   '<li><img src="images/add_bg.png" alt=""><span>现场2</span><input type="file" id="fileToUpload_3" name="fileToUpload" class="upload"></li>'+
			   '<div style="clear: both;"></div></ul></div>'+
			   '<div class="table_item_td item_operate" style="width: 90px;"><a class="del" onclick="delHtr(this)">删除</a></div></div>';
	
	$(".activity_form .activity_info").append(html);	
}

var delTr = function(handle){

	var me = $(handle);
	var parentTr = me.closest(".table_item_tr");
	parentTr.remove();
}

var delHtr = function(handle){

	var me = $(handle);
	var parentTr = me.closest(".table_item_htr");
	parentTr.remove();
}

$(function(){

	//TODO 表单中文提示，需要看具体情况修改
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

	//TODO 表单验证，需要看具体情况修改
	$(".submit_btn a").click(function(){

		if($(this).closest("form").valid()){

		}
	})

	/* tab点击事件*/

	$(".tab_box li").on("click",function(){

		var me = $(this);
		var formName = me.attr("id");

		me.siblings().removeClass("active");
		me.addClass("active");

		$(".form_list").find(".form_hide").removeClass("form_show");

		$(".form_list").find("."+formName).addClass("form_show");
	});

    //附件上传
	$(".accessory_form").on("change","input.upload:file",function(){
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

	//图片上传
    $(".activity_form").on("change","input.upload:file",function(){
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

                        $me.siblings("img").attr("src", "images/change_bg.jpg");
                    }
                },
                error: function (data, status, e){
                    console.info(e);
                }
            })
        }
    })
});
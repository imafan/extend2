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
			   '<ul><li><img src="images/add_bg.png" alt=""><span>通知</span></li>'+
			   '<li><img src="images/add_bg.png" alt=""><span>签到</span></li>'+
			   '<li><img src="images/add_bg.png" alt=""><span>现场1</span></li>'+
			   '<li><img src="images/add_bg.png" alt=""><span>现场2</span></li>'+
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

	/* tab点击事件*/

	$(".tab_box li").on("click",function(){

		var me = $(this);
		var formName = me.attr("id");

		me.siblings().removeClass("active");
		me.addClass("active");

		$(".form_list").find(".form_hide").removeClass("form_show");

		$(".form_list").find("."+formName).addClass("form_show");
	});
});
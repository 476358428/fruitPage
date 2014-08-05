define(function(require,exports,module){
		require('./hide.js').hide($('.info-alter-pass'));


		$('#info-alter-box').dialog({
		/*对话框标题*/
		title: '设置个人信息',
		/*在对话框添加按钮，值所对应的函数是点击按钮所运行的函数，this表示对话框写内容的div元素*/
		buttons: {
		},
		width: 600,
		/*打开和关闭的动画效果*/
		show: false,
		hide: false,
		/*调用.dialog是否显示对话框，如果用于初始化对话框，可以现不现实，然后用.dialog('open')打开对话框*/
		autoOpen:false,
		/*可不可以退调整对话框大小*/
		resizable: false,
		/*改变关闭按钮提示*/
		closeText: '关闭',
		closeOnEscape: false, //按下esc 无效
		/*是否有遮罩*/
		modal: false
	});
	//修改邮箱
	openDialog($('.info-alter-email'),'新邮箱地址：','email',function(){
		alert('email')
	})
	//设置电话
	openDialog($('.info-alter-tel'),'设置联系电话：','tel',function(){
		alert('tel')
	})
	//设置地址
	openDialog($('.info-alter-address'),'设置联系地址','address',function(){
		alert('address')
	})	
	function openDialog($el,label,name,fun){
		var $box=$('#info-alter-box')
		$el.click(function(event) {
			$box.find('label').html(label);
			$box.find('input').attr('name',name)
			$box.dialog('option','buttons',{
				'保存设置':fun
				})
			$box.onScreen(98).dialog('open');
			
			})
	}





}) 
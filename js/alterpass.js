define(function(require,exports,module){

	exports.init=function(){

		/*提示工具*/
		$('.alter-pass-text').tooltip({
			position: {
				my: 'left bottom',
				at: 'right+5 bottom'
			},
			tooltipClass: 'register-tooltip',
			show: false,
			hide: false
		});
		$('#alter-pass')
		.validate({ //验证表单
			//使用其他方式代替默认提交
			//指定label放的位置
			errorLabelContainer: 'ol.alter-error',
			//在label上包裹一层元素
			wrapper: 'li',
			//高亮显示有错误的元素
			highlight: function(element, errorClass) { //element是出错误的元素
				$(element).next('span').removeClass('input-success');
			},
			unhighlight: function(element, errorClass) { //element是出错误的元素
				$(element).next('span').addClass('input-success');
			},
			rules: {
				prepass: {
					required: true,
					minlength: 6,
				/*	remote : {
						url : 'user.php',
						type:'post',
						data:{
							user:function(){return $('#register-user').val()}
						}
					}*/
				},
				newpass: {
					required: true,
					minlength: 6
				},
				'pass-con': {
					required: true,
					equalTo:"#alter-new-pass"
				}
			},
			messages: {
				prepass: {
					required: '原始密码不能为空！',
					minlength: '账号不能小于{0}位！',
					/*remote:'此用户名存在，请重新注册！'*/
				},
				newpass: {
					required: '新密码不能为空！',
					minlength: '密码不能小于{0}位！'
				},
				'pass-con': {
					required: '确认密码不能为空！',
					equalTo:'两次填写密码不一致，请重新填写！'
				}
			}
		});
	}



})
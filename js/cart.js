(function(){

	// tap封装了移动端的touch事件，如果想要用touch相关的事件,要引入touch.js
	
	var deletTop ;
	$('.delete_shop').on('tap',function(){

		$('.alert').css({'display':'block'});

		//算出距顶部的距离
		var top = (window.innerHeight - $('.alert_box').height())/2;
		// 移动端所有浏览器都兼容，可以不用谢前缀
		$('.alert_box').css({

			transition:'all 1s ease 0s',
			transform : 'translateY('+top+'px)'
		})

	
		//垃圾桶的盖子
		deletTop = $(this).find('.delete_top');

		deletTop.css({
			transition:'all 1s ease 0s',
			transform: 'translateY(-5px) rotate(-45deg)'
		})
	})

		//点击取消,确定按钮，隐藏弹出层
	   $('.alert_box .cancel').on('tap',function(){
	   	close();
	   })
	   $('.alert_box .submit').on('tap',function(){
	   	 close();
	   })

		//隐藏弹出层
		function close(){
			$('.alert').css({'display':'none'});

			deletTop.css({
				transition:'all 1s ease 0s',
				transform: 'translateY(0px) rotate(0deg)'
			})

			$('.alert_box').css({

			transition:'all 1s ease 0s',
			transform : 'translateY(0px)'
			})

		}


		//checkbox
		$('.checkbox').on('tap',function(){
			//有checked属性,点了就移除，没有就添加
			if($(this).attr('checked')){

				$(this).removeAttr('checked');
			}else{
				$(this).attr('checked',true);
			}
		})

		//全选
		$('.shop_header .checkbox').on('tap',function(){

			if($(this).attr('checked')){
				// 先找其父节点，再找其子节点
			   $(this).parents('.shop').find('.product .checkbox').attr('checked',true);
			}else{
			   $(this).parents('.shop').find('.product .checkbox').removeAttr('checked',true);

			}
		})
})()
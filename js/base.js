const $mohu = $('.choose-more-mian,#banner,.navbar-header,.cyz-ppjhs,.cyz-aboutus,.cyz-sbzc,.cyz-news,.cyz-footer,.cyz-base-head,.news-detial'),
		searchH = function() {
			//计算搜索框的高度
			var BSheight = $('.banner-select .i-text:nth-of-type(1) .i-text-show').height(),
				yuanHeight = (BSheight - $('.banner-select .list-ul li').outerWidth(true)) / 2;
	
			$('.banner-select .i-text-show').height(BSheight)
			$('.banner-select .i-text:nth-of-type(2) .list-ul').css('paddingTop', yuanHeight)
		}

$('.navbar-collapse .navbar-nav').load('template/nav.html')
$('.cyz-footer').load('template/footer.html')
//点击搜索出现商标信息
$('.cyz-ppjh .look-more-white a').click(function() {
	var show = $('.shangbiao-pos').css('display'),
		name = $(this).parents('.border-x').find('.list .lh50').text(),
		numbers = $(this).parents('.border-x').find('.list .fs').text(),
		detial = $(this).parents('.border-x').find('.detial').text(),
		sbgs = $(this).parents('.border-x').find('.cyz-sbgs').text(),
		images = $(this).parents('.border-x').find('.image').html().trim();
	if(show == 'none') {
		$mohu.addClass('mohu')
	}
	$('.shangbiao-pos .pos-bottom .name').text(name);
	$('.shangbiao-pos .pos-bottom .numbers').text(numbers);
	$('.shangbiao-pos .pos-bottom .detial').text(detial);
	$('.shangbiao-pos .pos-bottom .sbgs').text(sbgs);
	$('.shangbiao-pos .max').html(images);
	$('.shangbiao-pos').fadeIn()
	$('.shangbiao-pos .item .border-x').addClass('animated fadeInDown')
})
$('.shangbiao-pos,.my-close').click(function() {
	var show = $('.shangbiao-pos').css('display');
	if(show == 'block') {
		$mohu.removeClass('mohu')
	}
	$('.shangbiao-pos').fadeOut();
	$('.shangbiao-pos .item .border-x').removeClass('animated fadeInDown')
})
$('.shangbiao-pos .item .border-x').click(function(e) {
	e.stopPropagation();
})
// 手机点击出现导航
$('#nav-close').click(function() {
	$('#btn').click();
});
$('#btn').click(function() {
	var show = $('.navbar-collapse.in').css('display');
	if(show) {
		$mohu.removeClass('mohu')
	} else {
		$mohu.addClass('mohu')
	}
})

$(function() {
	//点击出现搜索框
	$('.choose-more-mian a').click(function() {
		$('#choose-more-detial').fadeIn()
		let show = $('#choose-more-detial').css('opacity')
		if(show == '0') {
			$mohu.addClass('mohu')
			$('#choose-more-detial .container').addClass('animated fadeInDown')
		}
	})
	$('.inner-close').click(function() {
		$('#choose-more-detial').fadeOut()
		let show = $('#choose-more-detial').css('opacity');
		if(show == '1') {
			$mohu.removeClass('mohu')
			$('#choose-more-detial .container').removeClass('animated fadeInDown')
		}
	})
	$('.detial-ul li').click(function() {
		let num = $(this).text();
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parent('.detial-ul').siblings('input').val(num)
	})
	//cyz-base-head判断加css
	var winHerf = window.location.href;
	if (winHerf.indexOf('index') > 0) {
		return
	}
	if (winHerf.indexOf('food') > 0) {
		$('.cyz-base-head').addClass('bg04')
	} else if (winHerf.indexOf('news') > 0) {
		$('.cyz-base-head').addClass('bg03')
	} else if (winHerf.indexOf('trademark') > 0) {
		$('.cyz-base-head').addClass('bg02 contactbg')
	} else if (winHerf.indexOf('contact') > 0) {
		$('.cyz-base-head').addClass('bg05 contactbg')
	} 
	
})
$(function(){
	searchH()
	//返回定部
	$('.gotop').click(function() {
		$('html,body').animate({
			scrollTop: '0'
		}, 500)
	});
	//搜索框获取焦点时候
	$('.i-text-open').focus(function() {
		var show = $('.i-text-show').css('display')
		if(show !== 'none') {
			return false
		}
		$('.i-text-show').slideDown(500, function() {
			$('.banner-select.bd100').css('borderRadius', '100px 100px 100px 0')
		});
		$('.banner-select .ivu-icon').addClass('active')		
	})
	$('.i-text.show').click(function() {
		var show = $('.i-text-show').css('display')
		if(show == 'none') {
			$('.i-text-show').slideDown(500, function() {
				$('.banner-select.bd100').css('borderRadius', '100px 100px 100px 0')
			});
			$('.banner-select .ivu-icon').addClass('active')
		} else {
			$('.banner-select.bd100').css('borderRadius', '100px')
			$('.i-text-show').slideUp()
			$('.banner-select .ivu-icon').removeClass('active')
		}
		return false
	})
	$('.i-text-show li').click(function() {
		var texts = $(this).text().trim();
		$(this).addClass('active').siblings().removeClass('active')
		$(this).parents('.i-text-show ').siblings('.i-text-open').attr('value', texts);
		$('.banner-select.bd100').css('borderRadius', '100px')
	})
	$('body').click(function() {
		$('.banner-select.bd100').css('borderRadius', '100px')
		$('.i-text-show').slideUp()
	})
	$('.i-text-show, .i-text-open,.i-text.list').click(function() {
		return false
	})
})
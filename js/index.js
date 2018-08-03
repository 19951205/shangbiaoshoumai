$(function() {
	//banner的左右滑动
	// 获取界面上的轮播图容器
	//	$('.carousel').not('.look-more-white').css('color','red')
	var $carousels = $('.cyz-banner .carousel');
	var startX, endX;
	var offset = 100;
	// 注册滑动事件
	$carousels.on('touchstart', function(e) {
		startX = e.originalEvent.touches[0].clientX;
	});

	$carousels.on('touchmove', function(e) {
		endX = e.originalEvent.touches[0].clientX;
	});
	$carousels.on('touchend', function(e) {
		var distance = Math.abs(startX - endX);
		if(distance > offset) {
			$(this).carousel(startX > endX ? 'next' : 'prev');
		}
	});
	var $carousels = $('#ppjhBanner.carousel');
	var startsX, endsX;
	var offsets = 100;
	// 注册滑动事件
	$carousels.on('touchstart', function(e) {
		startsX = e.originalEvent.touches[0].clientX;
	});

	$carousels.on('touchmove', function(e) {
		endsX = e.originalEvent.touches[0].clientX;
	});
	$carousels.on('touchend', function(e) {
		var distances = Math.abs(startsX - endsX);
		if(distances > offsets) {
			$(this).carousel(startsX > endsX ? 'next' : 'prev');
		}
	});
	//小圆点的个数
	var html = '',
		leng = $('#banner .item').length;
	for (var k = 0; k < leng; k++) {
		html += `<li data-target="#banner" data-slide-to="${ k }"></li>`
	}
	$('#banner .carousel-indicators').append(html)
	$('#banner .carousel-indicators li').eq(0).addClass('active')
	
	$('#ppjhBanner').carousel({
		interval: false
	})
	$('#banner').carousel({
		interval: 3000
	})
	$('#banner .carousel-inner .active .banner-text').addClass('animated ' + 'fadeInDown')
	$('#banner').on('slid.bs.carousel', function() {
		$('#banner .banner-text').removeClass('animated ' + 'fadeInDown')
		$('#banner .carousel-inner .active .banner-text').addClass('animated ' + 'fadeInDown')
	})
	$('#ppjhBanner').on('slid.bs.carousel', function() {
		$('.cyz-ppjhs .item > div').removeClass('fadeInUp')
	})
//	$('.cyz-ppjh .carousel-indicators li').click(function(){
//		$('.cyz-ppjhs .item > div').addClass('animatedclose')
//	})
	//添加执行事件
	for(var i = 0; i < $('.cyz-ppjhs .item > div').length; i++) {
		$('.cyz-ppjhs .item > div').eq(i).css({
			'animationDelay': (0.3 * i) + 's',
		})
	}
	for(var i = 0; i < $('.cyz-news .cyz-news-detial li').length; i++) {
		$('.cyz-news .cyz-news-detial li').eq(i).css({
			'animationDelay': (0.3 * i) + 's',
		})
	}
	function Scroll() {
		//滾動事件
		let winTop = $(window).scrollTop(),
			winHHalf = $(window).height() / 2,
			ppjhOT = $('.cyz-ppjhs').offset().top, //品牌集合
			ppjhOTDom = $('.cyz-ppjhs').height(),
			AboutOT = $('.cyz-aboutus').offset().top, //关于我们
			AboutOTDom = $('.cyz-aboutus').height(),
			SbzcOT = $('.cyz-sbzc').offset().top, //商标注册
			SbzcOTDom = $('.cyz-sbzc').height(),
			NewsOT = $('.cyz-news').offset().top, //cyz-news新闻
			NewsOTDom = $('.cyz-news').height();
		//触发事件；加载动画
		$.fn.extend({
			animateCss: function(animationName) {
				$(this).addClass('animated ' + animationName)
			},
			removeaAnimateCss: function(animationName) {
				$(this).removeClass('animated ' + animationName)
			}
		});
		
		// 品牌集合
		if(winTop >= (ppjhOT - winHHalf) && winTop < (ppjhOT + ppjhOTDom + winHHalf)) {
			$('.cyz-ppjhs .cyz-base-head,.cyz-ppjhs .carousel-indicators,.cyz-ppjhs .look-more-mian').removeaAnimateCss('fadeOutUp')
			$('.cyz-ppjhs .item:nth-of-type(1) > div').removeaAnimateCss('fadeOutDown')
			
			$('.cyz-ppjhs .cyz-base-head,.cyz-ppjhs .carousel-indicators,.cyz-ppjhs .look-more-mian').animateCss('fadeInDown')
			$('.cyz-ppjhs .item:nth-of-type(1) > div').animateCss('fadeInUp')
		} else if ($('.cyz-ppjhs .cyz-base-head').hasClass('fadeInDown')) {
			$('.cyz-ppjhs .cyz-base-head,.cyz-ppjhs .carousel-indicators,.cyz-ppjhs .look-more-mian').removeaAnimateCss('fadeInDown')
			$('.cyz-ppjhs .item:nth-of-type(1) > div').removeaAnimateCss('fadeInUp')
			$('.cyz-ppjhs .item > div').removeClass('animatedclose')
			
			$('.cyz-ppjhs .cyz-base-head,.cyz-ppjhs .carousel-indicators,.cyz-ppjhs .look-more-mian').animateCss('fadeOutUp')
			$('.cyz-ppjhs .item:nth-of-type(1) > div').animateCss('fadeOutDown')
		}
		//关于我们
		if(winTop >= (AboutOT - winHHalf) && winTop < (AboutOT + AboutOTDom + winHHalf)) {
			$('.cyz-aboutus .cyz-base-head').removeaAnimateCss('fadeOutUp')
			$('.cyz-main .image').removeaAnimateCss('fadeOutDown')
			$('.cyz-main .cyz-aboutus-detial .detial').removeaAnimateCss('fadeOutDown')
			
			$('.cyz-aboutus .cyz-base-head').animateCss('fadeInDown')
			$('.cyz-main .image').animateCss('slideInUp')
			$('.cyz-main .cyz-aboutus-detial .detial').animateCss('fadeInUp')
		} else {
			$('.cyz-aboutus .cyz-base-head').removeaAnimateCss('fadeInDown')
			$('.cyz-main .image').removeaAnimateCss('slideInUp')
			$('.cyz-main .cyz-aboutus-detial .detial').removeaAnimateCss('fadeInUp')
			
			$('.cyz-aboutus .cyz-base-head').animateCss('fadeOutUp')
			$('.cyz-main .image').animateCss('fadeOutDown')
			$('.cyz-main .cyz-aboutus-detial .detial').animateCss('fadeOutDown')
		}

		//商标注册
		if(winTop >= (SbzcOT - winHHalf) && winTop < (SbzcOT + SbzcOTDom + winHHalf)) {
			$('.cyz-sbzc .text').removeaAnimateCss('bounceOutRight')
			$('.cyz-sbzc .look-more-mian').removeaAnimateCss('bounceOutLeft')
			
			$('.cyz-sbzc .text').animateCss('bounceInLeft')
			$('.cyz-sbzc .look-more-mian').animateCss('bounceInRight')
		} else {
			$('.cyz-sbzc .text').removeaAnimateCss('bounceInLeft')
			$('.cyz-sbzc .look-more-mian').removeaAnimateCss('bounceInRight')
			
			$('.cyz-sbzc .text').animateCss('bounceOutRight')
			$('.cyz-sbzc .look-more-mian').animateCss('bounceOutLeft')
		}

		//news新闻
		if(winTop >= (NewsOT - winHHalf) && winTop < (NewsOT + NewsOTDom + winHHalf)) {
			$('.cyz-news .cyz-base-head,.cyz-news .look-more-mian').removeaAnimateCss('fadeOutUp')
			$('.cyz-news .cyz-news-detial li').removeaAnimateCss('bounceOutDown')
			
			$('.cyz-news .cyz-base-head,.cyz-news .look-more-mian').animateCss('fadeInDown')
			$('.cyz-news .cyz-news-detial li').animateCss('bounceInUp')
		} else {
			$('.cyz-news .cyz-base-head,.cyz-news .look-more-mian').removeaAnimateCss('fadeInDown')
			$('.cyz-news .cyz-news-detial li').removeaAnimateCss('bounceInUp')
			
			$('.cyz-news .cyz-base-head,.cyz-news .look-more-mian').animateCss('fadeOutUp')
			$('.cyz-news .cyz-news-detial li').animateCss('bounceOutDown')
		}
	}
		Scroll()
		$(window).scroll(function() {
			Scroll()
		})

})
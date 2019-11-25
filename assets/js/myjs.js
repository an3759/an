		$(function (){
			var $win = $(window);
			var $backToTop = $('.js-back-to-top');
			// 當用戶滾動到離頂部100像素時，展示回到頂部按鈕
			$win.scroll(function () {
				if ($win.scrollTop() > 800) {
					$backToTop.show();
				}
				else {
					$backToTop.hide();
				}
			});
				// 當用戶點擊按鈕時，通過動畫效果返回頭部
			$backToTop.click(function () {
				$('html, body').animate({scrollTop: 0}, 800);
			});
		});

		$('.to-edu').click(function(){
        	$('html,body').animate({scrollTop:$('#學歷').offset().top},800);
    	});

    	$('.to-hob').click(function(){
        	$('html,body').animate({scrollTop:$('#興趣').offset().top},800);
    	});

    	$('.to-self').click(function(){
        	$('html,body').animate({scrollTop:$('#自我期許').offset().top},800);
    	});

    	$('.to-life').click(function(){
        	$('html,body').animate({scrollTop:$('#生活紀錄').offset().top},800);
    	});
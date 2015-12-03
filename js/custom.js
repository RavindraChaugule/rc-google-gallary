$(document).ready(function(){
	var winWidth = $(window).width(),
		itemanchor = $('.item-hold > a'),
		itemdetail = $('.item-detail');
	
	itemdetail.width(winWidth);
	itemanchor.click(function(){
		
		var _this = $(this),
			parent = $(this).parent('.item-hold');

		parent.toggleClass('active');
		parent.siblings().removeClass('active');

		if(parent.hasClass('active')){
			_this.next('.item-detail').slideDown('fast');
			parent.siblings().find('.item-detail').slideUp('fast');
		
			//$('html, body').animate({scrollTop:$("#"+idName+"-hd").offset().top}, 'slow');
			$('html, body').animate({
                    scrollTop: (parent.offset().top-10)
                    }, 700);

		}else{
			_this.next('.item-detail').slideUp();
		}

		var $whatever = $('.item-hold.active');
		var rt = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
		console.log(rt);

	});

$('body').click(function(e){
      if($(e.target).closest(itemanchor).length === 0 && $(e.target).closest(itemdetail).length === 0){
            $('.item-detail').slideUp('fast');
      }
})


});
/*RC Google Gallary 12/12/2015*/

function rcGoogleGallary(){

	var winWidth = $(window).width(),
		winHeight = $(window).height(),
		item = $('.item-hold'),
		itemanchor = $('.item-hold > a'),
		itemdetail = $('.item-detail');

	itemdetail.width(winWidth);
	itemanchor.unbind().bind("click", function(event){
		var $this = $(this),
			parent = $(this).parent(item),
			parentHeight=parent.height(),
			topOffset=parentHeight/2,
			activeGutter=$this.next(itemdetail).height()+parentHeight+5;

		parent.toggleClass('active');
		parent.siblings().removeClass('active');

		if(parent.hasClass('active')){

			$this.next(itemdetail).slideDown('fast');
			$this.parent(parent).css('height',activeGutter);
			parent.siblings().css('height','auto');
			setTimeout(function(){
				parent.siblings().find(itemdetail).fadeOut('fast');	
			},100)

			$('html, body').animate({
                scrollTop: (parent.offset().top+topOffset)
            }, 200);

            event.stopPropagation();

		}else{
			$this.next(itemdetail).slideUp();
			$this.parent(parent).css('height','auto');
		}
	});

	$('body').click(function(e){
	      if($(e.target).closest(itemanchor).length === 0 && $(e.target).closest(itemdetail).length === 0){
	            itemdetail.slideUp('fast');
	            item.removeClass('active');
				item.removeAttr('style');
	      }
	});

}


$(document).ready(function(){

	rcGoogleGallary();

	

});

$(window).resize(function(){
	rcGoogleGallary();

	var item = $('.item-hold'),
		itemdetail = $('.item-detail');

		item.removeClass('active');
		item.removeAttr('style');
		itemdetail.slideUp('fast');
	
});
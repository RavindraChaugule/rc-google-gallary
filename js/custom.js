$(document).ready(function(){
	var winWidth = $(window).width(),
		winHeight = $(window).height(),
		item = $('.item-hold'),
		itemanchor = $('.item-hold > a'),
		itemdetail = $('.item-detail');

//console.log(activeGutter);

	itemdetail.width(winWidth);
	itemanchor.click(function(event){
		var $this = $(this),
			parent = $(this).parent(item),
			parentHeight=parent.height(),
			topOffset=parentHeight/2,
			activeGutter=$this.next(itemdetail).height()+parentHeight+5;
//console.log(activeGutter);
		parent.toggleClass('active');
		parent.siblings().removeClass('active');

		if(parent.hasClass('active')){

			$this.next(itemdetail).slideDown('fast');
			$this.parent(parent).css('height',activeGutter);
			parent.siblings().css('height','auto');
			setTimeout(function(){
				parent.siblings().find(itemdetail).fadeOut('fast');	
			},150)
			

		
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
            $(itemdetail).slideUp('fast');
            $(item).css('height','auto');
      }
})


});
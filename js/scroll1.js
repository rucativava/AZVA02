$(document).ready(function() {
  // put all your jQuery goodness in here.
//alert('jQuery working');

 if ($('#searchheader').length) {
// 		alert('We have #searchheader');
//        // SEARCH Check the initial Poistion of the Sticky Header
        var stickyHeaderTop = $('#searchheader').offset().top;

        var fillerHeight = $('#searchheader').height();
        var logoHeight = $('#logo').outerHeight();
		var logoHeight2 = $('#logo').height(); 
		var foo = $('#mainmenu').scrollTop();
		var beloOffset = 65;
//		$('#shadowtop').css('top',logoHeight);
		$(window).scroll(function(){
			$('#meter').text('scrollTop:'+$(window).scrollTop()+'     logo outerHeight: '+logoHeight+'     logo height: '+logoHeight2+'  fillerHeight:'+fillerHeight+'  stickyHeaderTop:'+stickyHeaderTop);
                
			if( $(window).scrollTop() > logoHeight ) {

//					
					$('#shadowtop').css('display','block');
					$('#shadowtop').css('z-index','9999');

                } else {

//					
					$('#shadowtop').css('display','none');
                }
		
			if( $(window).scrollTop() > stickyHeaderTop-73 ) {
				$('#searchheader').css({position: 'fixed', top: '70px'});
				$('#filler').css({height: fillerHeight});
				}else{
				$('#searchheader').css({position: 'static', top: ''+stickyHeaderTop+'px'});
				$('#filler').css({height: '0'});
				}				
		});
}

// SHADOW Check the initial Position of the Sticky Header		
// var stickyLogoTop = $('#logo').offset().top;
var mainmenuHeight = $('#mainmenu').height();
var mainmenuMarginTop = $('#mainmenu').css('margin-top');
var fillerHeight2 = $('#logo').height() + mainmenuHeight;


$(window).scroll(function(){
	var showShadow = ($(this).scrollTop()-10)/10;
	var mainmenuHide =  (1-($(this).scrollTop()/30));
	$('#shadowtop').css('opacity',showShadow);
//	$('#meter').text('scrollTop:'+$(window).scrollTop()+' logoHeight:'+logoHeight+'  fillerHeight:'+fillerHeight);
//	$('#mainmenu').css('opacity',mainmenuHide);
//	//$(this).scrollTop()
//	if( $(window).scrollTop() > stickyLogoTop){
//		$('#logo').css({position: 'fixed'});
//		$('#mainmenu').css('marginTop', '76px');
//		//alert('Height is'+mainmenuMarginTop+' '+fillerHeight2);
//		} else {
//		$('#logo').css({position: 'static'});
//		$('#mainmenu').css('marginTop', '20px');
//		}
		if ( showShadow < 0){
			$('#shadowtop').css('display','none'); } else {
			$('#shadowtop').css('display','block');}
});

jQuery.fn.checkShadowbottom = function() {
	var o1 = $('#endcontent').offset().top;
	var o2 = $('#footer').offset().top;
	var bottomvar =  o1 - o2;
	var showShadowbottom = (20+bottomvar)/30;
	$('#shadowbottom').css('opacity',showShadowbottom);
	if ( showShadowbottom < 0){
		$('#shadowbottom').css('display','none'); } else {
		$('#shadowbottom').css('display','block');}
};

$(window).checkShadowbottom();
//alert('chekou');
$(window).resize(function() {
		$(window).checkShadowbottom();
});
$(window).scroll(function(){
	$(window).checkShadowbottom();
//	$('#meter').text('scrollTop:'+$(window).scrollTop()+' bottomvar:'+bottomvar+'  fillerHeight:'+fillerHeight2+' shadow opacity is '+showShadowbottom);
	
});

// END READY
});
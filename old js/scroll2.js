$(document).ready(function() {
  // put all your jQuery goodness in here.

//This is the VIEWPROJECT SHADOW



// SHADOW Check the initial Position of the Sticky Header	
var pim =$(window).scrollTop();	
var stickyLogoTop = $('#logo').offset().top;
var mainmenuHeight = $('#mainmenu').height();
var mainmenuMarginTop = $('#mainmenu').css('margin-top');
var fillerHeight2 = $('#logo').height() + mainmenuHeight;
var logoHeight = $('#logo').height();
$('#shadowtop').css('top','56px');


$(window).scroll(function(){
	var showShadow = ($(this).scrollTop()- stickyLogoTop)/10;
	var mainmenuHide =  (1-($(this).scrollTop()/30));
	$('#shadowtop').css('opacity',showShadow);
 $('#meter').text('scrollTop:'+$(window).scrollTop()+' logoHeight:'+logoHeight+'  fillerHeight:'+fillerHeight2+' shadow opacity is '+showShadow);
//	$('#mainmenu').css('opacity',mainmenuHide);
//	//$(this).scrollTop()
	if( $(window).scrollTop() > stickyLogoTop){
		$('#logo').css({position: 'fixed'});
		$('#mainmenu').css('marginTop', '76px');
//		//alert('Height is'+mainmenuMarginTop+' '+fillerHeight2);
		} else {
		$('#logo').css({position: 'static'});
		$('#mainmenu').css('marginTop', '20px');
		}
		if ( showShadow < 0){
			$('#shadowtop').css('display','none'); } else {
			$('#shadowtop').css('display','block');}
});



// BOTTOM


jQuery.fn.checkShadowbottom = function() {
	var o1 = $('#endcontent').offset();
	var o2 = $('#footer').offset();
	var bottomvar =  o1.top - o2.top;
	var showShadowbottom = (20+bottomvar)/30;
	$('#shadowbottom').css('opacity',showShadowbottom);
	if ( showShadowbottom < 0){
		$('#shadowbottom').css('display','none'); } else {
		$('#shadowbottom').css('display','block');}
};

$(window).checkShadowbottom();

$(window).scroll(function(){
	$(window).checkShadowbottom();
	$('#meter').text('scrollTop:'+$(window).scrollTop()+' bottomvar:'+bottomvar+'  fillerHeight:'+fillerHeight2+' shadow opacity is '+showShadowbottom);
	
});




// END READY
});
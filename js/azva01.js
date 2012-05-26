$(document).ready(function() {
  // put all your jQuery goodness in here.



//setup before functions
var typingTimer;                //timer identifier
var doneTypingInterval = 100;  //time in ms, 5 second for example

//on keyup, start the countdown
$('#searchbox').keyup(function(){
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
});


$('#searchbox').keyup(function(){
    typingTimer = setTimeout($(".searchedthumb:first").slidetothumb({highlight: false}), 200);
});

//on keydown, clear the countdown 
$('#searchbox').keydown(function(){
    clearTimeout(typingTimer);
});

//user is "finished typing," do something
function doneTyping () {
	var text = $('input[type="text"]').val().toLowerCase();
	//alert('doneTyping');
	$('ul.thumbswcaption li').each(function(){
		var caption1 = $("a", this).attr('caption').toLowerCase();
		var info1 = $("a", this).attr('info').toLowerCase();
		var totalinfo = caption1+info1;
		if(totalinfo.indexOf(text) == -1){

			$(this).fadeTo(300, 0.2);
			$("img", this).fadeTo(300, 0.2);
			$(this).removeClass('searchedthumb');
}
			//alert('var text is '+$("a", this).attr('caption'));
		else{
			$(this).fadeTo(300, 1);
			$("img", this).fadeTo(300, 1);
			$(this).addClass("searchedthumb");
		}
	});
	
}

$('#loginbutton').click(function(){
alert('Wrong username and/or password.');
});

$('#dosearch').click(function(){
	// alert('working');
	var text = $('input[type="text"]').val().toLowerCase();
	$('#meter').text('text goes like this: '+text);
	$('ul.thumbswcaption li').each(function(){
		if($("a", this).attr('caption').toLowerCase().indexOf(text) == -1)
			$(this).hide("scale", {direction: 'horizontal' , origin: 'right'}, 500);
			//alert('var text is '+$("a", this).attr('caption'));
		else
			$(this).show();
	});     
});


$('span.fillform').click(function(){
	if ($(this).text() == "show all")
	{
	//	 alert('uahu');
		$('input[type="text"]').val('');
		doneTyping();
	}
	else
	{	
		if ($(this).text() == $('input[type="text"]').val())
			{ 
			//$('input[type="text"]').val('');
			}
		else
			{
			$('input[type="text"]').val($(this).text());
			$("input").removeClass("inputbefore");}
			var text = $('input[type="text"]').val().toLowerCase();
			doneTyping();
			}
	//alert('span.fillform');


});
// 
// $("a").mouseover(function() {
// 	alert('Click!');           
// });


$("a.thumb").click(function() {
	if ($(window).scrollTop() > 154 ) 
	$("#slideshow").slidetoheader({
		slide_duration : 'fast',
		highlight: false
		});           
});

$(".fillform").click(function() {
	//alert('.fillform click');
	$(".searchedthumb:first").slidetothumb({
	//	slide_duration : 'fast',
		highlight: false
		}); 
	//alert('end .fillform click');          
});

$("#slideshow-container").hover(
	function(){
	$("#controls").show();
	},
	function(){
	$("#controls").hide();
	}
);

$("#controls").hover(
	function(){
	$("#controls").show();
	},
	function(){
//	$("#controls").hide();
	}
);



$("input").click(function() {
	$(this).attr('placeholder','');
	$(this).removeClass("inputbefore");
});

$("input").focus(function() {
	$(this).attr('placeholder','');
	$(this).removeClass("inputbefore");
});



$("ul.thumbswcaption a img").hover(
	function(){
	if($.browser.msie) $(this).addClass("gobackimg");
	},
	function(){
	$(this).removeClass("gobackimg");
	}
);






// END READY
});

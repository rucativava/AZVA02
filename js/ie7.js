$(document).ready(function() {
  // put all your jQuery goodness in here.

$("ul.thumbswcaption a").hover(
	function(){
//alert('hover');
//	$(this).append('<i class=try1>teste jQuery</i>');
	$(this).append('<i class="try1">'+$(this).attr("caption")+'</i>');
	},
	function(){
	$('.try1').remove();
	}
);





// END READY
});

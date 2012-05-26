// shows this is run through jsbin & you can edit
(function () {
  if (window.location.hash == '#noedit') return;
  var ie = (!+"\v1");
  
  function set(el, props, hover) {
    for (var prop in props) {
      el.style[prop] = props[prop];
    }
  }
  
  function hide() {
    set(el, { opacity: '0' });
  }
  
  var el = document.createElement('a'); 
  
  set(el, { opacity: 1, position: 'fixed', top: '-1px', right: '-1px', padding: '5px 10px', background: '#ccc', color: '#333', 'text-shadow': '0px 1px 1px #fff', 'border-top-right-radius': '5px', MozBorderRadiusBottomleft: '5px', border: '1px solid #999', textDecoration: 'none', font: '12px "Helvetica Neue", Arial, Helvetica', WebkitTransition: 'opacity ease-out 100ms', MozTransition: 'opacity ease-out 100ms', OTransition: 'opacity ease-out 100ms', transition: 'opacity ease-out 100ms' });
  
  el.innerHTML = 'Edit in jsbin.com';
  el.href = window.location.pathname + (window.location.pathname.substr(-1) == '/' ? '' : '/') + 'edit';
  
  el.onmouseover = function () {
    this.style.opacity = 1;
  };
  
  el.onmouseout = function () {
    this.style.opacity = 0;
  };
  
  document.body.appendChild(el);
  setTimeout(hide, 2000);
  var moveTimer = null;
  
  if (document.addEventListener) {
    document.addEventListener('mousemove', show, false);
  } else {
    document.attachEvent('onmousemove', show);
  }
  
  function show() {
    if (!ie && (el.style.opacity*1) == 0) { // TODO IE compat
      el.style.opacity = 1;
    } else if (ie) {
      set(el, { display: 'block', opacity: '1' });
    }
    clearTimeout(moveTimer);
    moveTimer = setTimeout(hide, 2000);
  }
})();


$("mainmenu a").click(function(){
     $(this).toggleClass("highlight");
});


function passThrough(e) {
    $("#mainmenu a").each(function() {
       // check if clicked point (taken from event) is inside element
       var mouseX = e.pageX;
       var mouseY = e.pageY;
       var offset = $(this).offset();
       var width = $(this).width();
       var height = $(this).height();

       if (mouseX > offset.left && mouseX < offset.left+width 
           && mouseY > offset.top && mouseY < offset.top+height)
         $(this).click(); // force click event
    });
}

$("#shadowtop").click(passThrough);

var dthen = new Date();
		
setTimeout(function(){
	dNow = new Date();
	$('#shadowtop').css('height', ((dNow.getSeconds()+(dNow.getMilliseconds()/1000))*50)%300 +'px');
},10)

var doPassThrough = true;
$('input').click(function(){
  doPassThrough =  !doPassThrough;
  if (doPassThrough){
    $("#shadowtop").click(passThrough);
  } else {
    $('#shadowtop').unbind('click', passThrough);
  }
});

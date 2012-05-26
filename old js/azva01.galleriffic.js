$(document).ready(function() {



$('#thumbs').galleriffic({
	imageContainerSel:      '#slideshow',
	controlsContainerSel:   '#controls',
	autoStart:                 true,
	defaultTransitionDuration: 400,
	delay:3000,
	syncTransitions:           true,
	enableTopPager:            false,
	enableBottomPager:         false,
	maxPagesToShow:            7,  // The maximum number of pages to display in either the top or bottom pager
	captionContainerSel:       '', // The CSS selector for the element within which the captions should be rendered
	loadingContainerSel:       '' // The CSS selector for the element within which should be shown when an image is loading
});




});
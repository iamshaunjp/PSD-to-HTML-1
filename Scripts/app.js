
// Every jQuery statement starts with the $ or the jQuery keyword

// Examples 

// document.getElementById('main-heading'); 

$('#main-heading'); 

// jQuery will always return elements selected in the DOM as an array 



// $(document).ready(function (){

//     alert('jQuery Loaded')
// }); 

//  Used jQuery to select and manipulate an element 

const banner = $('.banner-title'); 

banner.css({color: 'coral'}); 

console.log(banner[0]); 

// jQuery Selectors 

// Element Selector 
$('h3').css({border:'3px solid blue'}); 

// Class selector
$('.wrapper').css({border:'3px solid red'});

// ID selector 

$('#clients').css({border: '3px solid yellow'}); 

// jQuery Filters 

$('header nav li:first').css({border: '2px solid red'}); 
$('header nav li:last').css({border: '2px solid red'}); 


// jQuery Even grabs all of the even elements 

$("header nav li :even").css({border: "2px solid blue"}); 
$("header nav li :odd").css({border: "2px solid yellow"});

// jQuery Not selector 

$("section:not('#contact')").css({border: "2px solid green"}); 

// Less than jQuery Selector 

$("social-nav li: lt(3)").css({border: "2px solid blue"});

// Greater than jQuery Selector

$("social-nav li: gt(2)").css({border: "2px solid blue"});

// class selector in jQuery 

$("div [class]").css({border: "2px solid pink"});

// Targeting ttributes with a specific value 

$("img[alt=quote]").css({border: "2px solid purple"});



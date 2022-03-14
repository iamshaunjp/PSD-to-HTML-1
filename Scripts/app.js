
// Every jQuery statement starts with the $ or the jQuery keyword

// Examples 

document.getElementById('main-heading'); 

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



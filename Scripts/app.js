
// // Every jQuery statement starts with the $ or the jQuery keyword

// // Examples 

// document.getElementById('main-heading'); 

// $('#main-heading'); 

// // jQuery will always return elements selected in the DOM as an array 



// $(document).ready(function (){

//     alert('jQuery Loaded')
// }); 

// //  Used jQuery to select and manipulate an element 

// const banner = $('.banner-title'); 

// banner.css({color: 'coral'}); 

// console.log(banner[0]); 

// // jQuery Selectors 

// // Element Selector 
// $('h3').css({border:'3px solid blue'}); 

// // Class selector
// $('.wrapper').css({border:'3px solid red'});

// // ID selector 

// $('#clients').css({border: '3px solid yellow'}); 

// // jQuery Filters 

// $('header nav li:first').css({border: '2px solid red'}); 
// $('header nav li:last').css({border: '2px solid red'}); 


// // jQuery Even grabs all of the even elements 

// $("header nav li :even").css({border: "2px solid blue"}); 
// $("header nav li :odd").css({border: "2px solid yellow"});

// // jQuery Not selector 

// $("section:not('#contact')").css({border: "2px solid green"}); 

// // Less than jQuery Selector 

// $("social-nav li: lt(3)").css({border: "2px solid blue"});

// // Greater than jQuery Selector

// $("social-nav li: gt(2)").css({border: "2px solid blue"});

// // class selector in jQuery 

// $("div [class]").css({border: "2px solid pink"});

// // Targeting ttributes with a specific value 

// $("img[alt=quote]").css({border: "2px solid purple"});



// // Traversin the DOM 


// //Using the next method in jQuery 

// $("#contact-methods").next().css({border: "3px solid red"}); 

// // Using the previous method in jQuery 

// $('#social-nav').prev().css({border: "3px solid blue"}); 

// // Using the parent method in jQuery 

// $('.banner-title').parent().css({border: "3px solid pink"}); 
// $('.banner-title').parents().css({border: "3px solid pink"}); 

// // Using the children methon in jQuery 

// $("#social-nav").children().css({border: "3px solid green"}); 

// // Using the find method in jQuery 

// $("#contact").find(".facebook").css({border:"3px solid purple"}); 

// // Using the closest method in jQuery 

// $("#social-nav").closest(".wrapper").css({border:"3px solid orange"}); 


// Chaining in jQuery 

$("#contact-methods").css({border:" 2px solid red"})
.next().css({border:"3px solid green"})
.closest("section")
.css({border: '2px solid blue'}); 

// Adding Content Using jQuery 

// Appending 
let tweet = "The big fight live: Ham vs Cheese!"; 

$("#tweets ").text(tweet);



//  .append() adds content to the bottom of the element 
//  .prepend() adds content to the top of an element 
//  .before() adds content before the element 
//  .after() adds content after the element 
//  .html() changes the whole HTML of the element 
//  .text() changes the text in an element 



// Wrap and Unwrap elements 

$("section").wrap("<div>");
$("section").unwrap();
$("section").wrapAll("<div>");

// wrap() wraps all matched elements individually 
// unwrap() unwraps all matched elements 
// wraps all elements combined to make one element 

let wrapper = "<div class = 'wrapper>"; 

let button = $('.button'); 

let wrapped = true ; 

button[0].onclick = function() {
    if(wrapped){
        $("section").unwrap();
        wrapped = false; 
        button.text("Wrap"); 
    }
    else{
        $("section").wrapAll(wrapper)
        wrapped = true; 
        button.text("Unwrap"); 
    }
};


// Removing Content 

// $(".button").empty(); 
// .empty() remover the inner HTMl within an Element 

// $("#points-of-sale").empty(); 

// $("#contact img").remove(); 

// .remove() removes the element completely 



// Changing Attributes 

// $("#contact img").removeAttr("alt"); 

// .removeAttr() removes an attribute completely

// $("#lead-banner img").attr("alt, banner-lead"); 

// .attr() can read or set ny attribute 


// Controlling CSS with jQuery 

// console.log($("#social-nav").css("position")); 

// console.log($("#social-nav").css("top","-200")).css('left','100px').css; 

$("#social-nav").css({
    "top": "-400px",
    "left": "150px",
    "opacity": "0.5",
    "border-top": "4px solid red",
});

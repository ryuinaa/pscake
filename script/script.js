$(function(){

//intro
// $(".videoclick p").mouseover(function(){
//     $(".videoclick").css({"backgroun-dcolor":"rgba(0,0,0,.0)")})
// })
$(".videoclick p").click(function(){
    $(".video").fadeOut(200)
});

//tab
$(".tabbtn").click(function(){
    $(".tab1").removeClass("active")
});

//NiceScroll
$("html").niceScroll({
    cursorcolor: "#000",
    cursorwidth: "10px",
    cursorborder: "0px solid pink",
    cursorborderradius: "100px"
});

})//end

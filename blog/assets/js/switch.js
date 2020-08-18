/*
function toggleDarkLightMode() {
   document.body.classList.toggle("darkmode-bg");
   //var element = document.getElementsByTagName("*:not(a)")
   $("*:not(a)").get()toggle("darkmode-txt");
   var i;
   
   for(i=0; i<element.length; i++)
   {
   	element[i].toggle("darkmode-txt");
   }
}
*/

$(function() {
  $("#switch").click(function() {
    $("body").toggleClass("darkmode-bg");
    $("*:not(a.post-content,code,code *)").toggleClass("darkmode-txt");
    $("div").toggleClass("darkmode-border");
  });
});

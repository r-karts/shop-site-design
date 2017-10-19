$(document).ready(function() {
  // $(".btn").slideUp(500).delay(500).slideDown(500);

});

$(document).click(function(e) {
  var $var = $(".dropdown a i");
  $.each($var, function() {
    if ($(this).hasClass("fa-angle-up")) $(this).slideUp(100, function() {$(this).removeClass("fa-angle-up").addClass("fa-angle-down")}).slideDown(100);
  });

});

$(".dropdown-toggle").click(function() {
  if ($(this).parent().hasClass("open")) {
    $(this).children("i").slideUp(100, function() {$(this).removeClass("fa-angle-up").addClass("fa-angle-down")}).slideDown(100);
  } else {
    $(this).children("i").slideUp(100, function() {$(this).removeClass("fa-angle-down").addClass("fa-angle-up")}).slideDown(100);
  }
  // $(".dropdown .dropdown-toggle>i").slideUp(300).removeClass("fa-angle-down").addClass("fa-angle-up").slideDown(300);
  // $(".open .dropdown-toggle>i").slideUp(300).removeClass("fa-angle-up").addClass("fa-angle-down").slideDown(300);
});


console.log("main.js loaded!");

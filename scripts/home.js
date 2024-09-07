/// <reference path="../"
$(document).ready( function() {

  // $('.pop-img').on("mouseenter", {pop: true, amt: 1.05}, popImg).on("mouseleave", {pop: false, amt: 1.05}, popImg);
  $('#js_skill').on('dblclick', function() {
    $('#js_hints').toggle();
  });
});


// function popImg(event) {
//   let width = parseInt($(this).css("width"));
//   let ms = 100;
//   if(event.data.pop)
//     $(this).animate({'width': width*event.data.amt + 'px'}, ms);
//   else
//     $(this).animate({'width': width/event.data.amt + 'px'}, ms);
// }

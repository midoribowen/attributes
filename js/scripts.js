$(document).ready(function() {
  $('button#dark').click(function() {
    $('body').removeClass();
    $('body').addClass('dark');
  });
  $('button#red').click(function() {
    $('body').removeClass();
    $('body').addClass('red');
  });
  $('button#white').click(function() {
    $('body').removeClass();
  });

  $('.column-main').children('p').click(function() {
    $('p').removeClass('highlight');
    $(this).addClass('highlight');
  });
});


//Cycling Function found on: http://www.simonbattersby.com/blog/cycling-a-src-with-jquery/
function cycleImages() {
  //console.log('I work');
  var $active = $('.cycler .active');
  var $next = $('.cycler .active').next().length > 0 ? $('.cycler .active').next() : $('.cycler img:first');

  $next.css('z-index', 2); //move the next image up the pile
  $active.fadeOut(1400, function () {
    //fade out the top image
    $active.css('z-index', 1).show().removeClass('active'); //reset the z-index and unhide the image
    $next.css('z-index', 3).addClass('active'); //make the next image the top one
  });
}

$(document).ready(function () {
  // Toggle Open Options
  $('.home-button').click(function () {
    $('.begin-button').css('opacity', '0');
    $('.begin-button').css('pointer-events', 'none');
    $('.hidden-text').addClass('show-div');
    $('.button-row button').css('opacity', '1');
  });

  $('.cycler').fadeIn(1400); //fade the background back in once all the images are loaded
  // run every 7s
  setInterval(function () {
    //code goes here that will be run every 5 seconds.
    cycleImages();
  }, 5000);
});

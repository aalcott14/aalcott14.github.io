var captionLength = 0;
var caption = '';

$(document).ready(function() {
  hideHome();
  setInterval ('cursorAnimation()', 1000);
  captionEl = $('#caption');
  type('Hello, my name is Adam.');
  setTimeout('erase()', 4500);
  setTimeout(function() { type('Welcome.') }, 7000);
  setTimeout('replaceElements()', 9500);

  $('#skipIntro').click(function() {
    $(".typeIntro").hide();
    $(".home").fadeIn("slow");
  });
});

function type(string) {
  caption = string;
  captionEl.html(caption.substr(0, captionLength++));
  if (captionLength < caption.length + 1) {
    setTimeout(function() { type(string) }, 100);
  }
}

function erase() {
  captionEl.html(caption.substr(0, captionLength--));
  if(captionLength >= 0) {
    setTimeout('erase()', 60);
  } else {
    captionLength = 0;
    caption = '';
  }
}

function cursorAnimation() {
  $('#cursor').animate({
    opacity: 0
  }, 'fast', 'swing').animate({
    opacity: 1
  }, 'fast', 'swing');
}

function replaceElements() {
  $(".typeIntro").hide();
  $(".home").fadeIn("slow");
}

function hideHome() {
  $(".home").hide();
}

var captionLength = 0;
var caption = '';

$(document).ready(function() {
  setInterval ('cursorAnimation()', 1000);
  captionEl = $('#caption');
  type('Hello.');
  setTimeout('erase()', 2000);
  setTimeout(function() { type('My name is Adam.') }, 3500);
  setTimeout('erase()', 7500);
  setTimeout(function() { type('Welcome to my site.') }, 9500);
});

function type(string) {
  caption = string;
  captionEl.html(caption.substr(0, captionLength++));
  if (captionLength < caption.length + 1) {
    setTimeout(function() { type(string) }, 150);
  }
}

function erase() {
  captionEl.html(caption.substr(0, captionLength--));
  if(captionLength >= 0) {
    setTimeout('erase()', 100);
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

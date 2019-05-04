$(document).ready(function() {
var newHeader = new Headers();
var $audioButtons = $(".audio-btn");
var $audioPlayer = $('#audio-player');

// newHeader.append("contentType", "application/javascript");
// newHeader.get("contentType");
//   console.log(Headers["contentType"]);
//   var audio = document.querySelectorAll("#string_6, #string_5, #string_4, #string_3, #string_2, #string_1"); 
//   function playAud() { 
//     audio.play(); 
//   }

  $audioButtons.on("click", function(e) {
    var url = $(e.target).data("audio-url");
    $audioPlayer.prop("src", url);
    $audioPlayer.prop("controls", true);
    $audioPlayer.prop("autoplay", true);
  });
});
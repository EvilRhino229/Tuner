$(document).ready(function() {
  var $record = $("#record");
  var $stopRecord = $("#stop");
  var $recordedAudio = $("#recordedAudio");
  var $token = $('meta[name="csrf-token"]').prop("content");

  navigator.mediaDevices.getUserMedia({audio: true})
  .then(stream => {handlerFunction(stream)});

  function handlerFunction(stream) {
    rec = new MediaRecorder(stream);
    rec.ondataavailable = e => {
      audioChunks.push(e.data);
      if (rec.state === "inactive") {
        var blob = new Blob(audioChunks, {type: "audio/wav"});
        var url = (window.URL || window.webkitURL).createObjectURL(blob);
        var form = new FormData();
        form.append('blob', blob);
        $.ajax({
          url: "/compare_audio",
          type: "post",
          dataType: "json",
          headers: {"X-CSRF-TOKEN": $token},
          data: form,
          processData: false,
          contentType: false,
          success: function(response) {
            console.log(response);
          },
          error: function(response) {
            console.log(response);
          }
        });
        $recordedAudio.prop("src", url);
        $recordedAudio.prop("controls", true);
        $recordedAudio.prop("autoplay", true);
      }
    }
  }

  $record.on("click", function() {
    console.log("I was clicked!");
    $record.prop("disabled", true);
    $stopRecord.prop("disabled", false);
    audioChunks = [];
    rec.start();
  });

  $stopRecord.on("click", function() {
    console.log("I was clicked!");
    $stopRecord.prop("disabled", true);
    $record.prop("disabled", false);
    rec.stop();
  });
});
$(document).ready(function() {
  var $record = $("#record");
  var $stopRecord = $("#stop");
  var $recordedAudio = $("#recordedAudio");

  navigator.mediaDevices.getUserMedia({audio: true})
  .then(stream => {handlerFunction(stream)});

  function handlerFunction(stream) {
    rec = new MediaRecorder(stream);
    rec.ondataavailable = e => {
      audioChunks.push(e.data);
      if (rec.state === "inactive") {
        var blob = new Blob(audioChunks, {type: 'audio/mpeg-3'});
        $recordedAudio.prop("src", URL.createObjectURL(blob));
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
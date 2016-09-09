(function () {

function stop() {
  alert("stop");
}

function resume() {
  alert("resume");
}

function damage() {
  $("#audio-reaction-damage")[0].play();
}

function doubleDamage() {
  $("#audio-reaction-damage")[0].play();
}

function playSound(soundId) {
  console.debug("Playing " + soundId);

  if (soundId.indexOf("event-dive") > -1) {
    var numRepeats = 3;
    var waitTime = $(soundId)[0].duration*1000;

    $(soundId)[0].volume = 0.4;

    $(soundId)[0].play();
    var loop = setInterval(function() {
      if (--numRepeats === 1) {
        clearInterval(loop);
      }
      $(soundId)[0].play();
    }, waitTime);
  } else {
    $(soundId)[0].play();
  }
}

function initSpeechRecognition(attrToInclude) {
  if (annyang) {
    var allCommands = {
      'stop': stop,
      'resume': resume,
      'indirect hit': damage,
      'direct hit': doubleDamage
    };

    var commands = {};
    attrToInclude.forEach(function(key) {
      commands[key] = allCommands[key];
    });

    // Resets and adds new commands
    annyang.removeCommands();
    annyang.addCommands(commands);
  }
}

function startGame() {
  document.getElementById('btn-start').style.display = 'none';
  document.getElementById('btn-stop').style.display = 'inherit';

  var attrToInclude = [];
  $(":checkbox:checked").each(function() {
    if ($(this).attr("data-kw")) {
      attrToInclude = attrToInclude.concat($(this).data("kw"));
    }
  });
  // Might take time? So we'll just loop over later to start audio
  initSpeechRecognition(attrToInclude);
  annyang.start();

  $(":checkbox:checked").each(function() {
    if($("#audio-" + $(this).attr('id')).length > 0) {
      playSound("#audio-" + $(this).attr('id'));
    }
  });
}

function stopGame() {
  annyang.abort();

  $("audio").each(function() {
    $(this)[0].pause();
    // TODO detach setInterval
  });


  document.getElementById('btn-stop').style.display = 'none';
  document.getElementById('btn-start').style.display = 'inherit';
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('btn-stop').style.display = 'none';

  document.getElementById("btn-start").addEventListener("click", startGame);
  document.getElementById("btn-stop").addEventListener("click", stopGame);
});

}());

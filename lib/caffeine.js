(function() {
  var iosSleepPreventInterval = setInterval(function() {
    window.location.href = "/";
    window.setTimeout(function() {
      window.stop();
    }, 0);
  }, 30000);
})();

/**
 * A lightweight library for mobile web browsers to prevent phones from sleeping.
 *
 * @author Andy Jiang <andyjiang@gmail.com>
 * @license MIT License
 */

(function(root, factory) {
  if (typeof exports === 'object')
    module.exports = factory();
  else
    root.caffeine = factory();
}(this, function() {

  /**
   * Define `caffeine`.
   */

  var caffeine = {};

  /**
   * Reload page and stop every 30 seconds.
   */

  var sleepPreventInterval = setInterval(function() {
    window.location.href = "/";
    window.setTimeout(function() {
      window.stop();
    }, 0);
  }, 30000);

  /**
   * Start sleep prevention.
   */

  caffeine.start = function() { sleepPreventInterval() };

  /**
   * Stop sleep prevention.
   */

  caffeine.stop = function() { clearInterval(sleepPreventInterval) };

  /**
   * Return `caffeine`.
   */

  return caffeine;
}));

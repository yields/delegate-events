
/**
 * Dependencies
 */

var each = require('each');

/**
 * Export `delegate`
 */

module.exports = delegate;

/**
 * Delegate `events` of `a` to `b`.
 *
 * @param {Emitter} a
 * @param {Emitter} b
 * @param {Array} events
 * @api public
 */

function delegate(a, b, events){
  each(events, function(event){
    a.on(event, function(){
      [].unshift.call(arguments, event);
      b.emit.apply(b, arguments);
    });
  });
}

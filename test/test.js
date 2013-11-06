
describe('delegate-events', function(){

  var delegate = require('delegate-events')
    , Emitter = require('emitter')
    , assert = require('assert')
    , a = new Emitter
    , b = new Emitter;

  it('should delegate events', function(done){
    delegate(a, b, ['test']);

    b.on('test', function(a, b){
      assert('a' == a);
      assert('b' == b);
      done();
    });

    a.emit('test', 'a', 'b');
  })

})

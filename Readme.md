
# delegate-events

  delegate events from one emitter to another

## Installation

  Install with [component(1)](http://component.io):

    $ component install yields/delegate-events

## API

#### delegate(a, b, events)

  Delegate array of `events` from emitter `a` to emitter `b`.

## Example

```js
delegate(a, b, ['test']);

b.on('test', function(a, b){
  assert('a' == a);
  assert('b' == b);
});

a.emit('test', 'a', 'b');
```

## Tests

```bash
$ make test
```

## License

  MIT

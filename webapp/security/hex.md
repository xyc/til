## Hex dump on command line

Website: https://hexed.it/

Shell
```sh
# dump hex or reverse
xxd

# or hexdump
hexdump
```

Javascript
```js
const buffer = new Buffer('af796fc67a0e4c4c97fde905f0c960c14ee068d43e76ef778991cc5ef7081236f76f96708c15839ed3b51afa6a213901', 'hex')
buffer.toString('hex')
```

Python
```python
hex(0x1234)
```

## Crypto library
- libraries https://gist.github.com/jo/8619441
  - asmCrypto https://github.com/vibornoff/asmcrypto.js/

# Salt
A **salt** is random data that is used as an additional input to a one-way function that "hashes" a password or passphrase.

Defend against
- dictionary attacks
- pre-computed rainbow table attacks

Salt is stored in the database.

Read more:
- You're Probably Storing Passwords Incorrectly http://blog.codinghorror.com/youre-probably-storing-passwords-incorrectly/
- Rainbow hash cracking http://blog.codinghorror.com/rainbow-hash-cracking/

## md5
```js
// binary
const md5_digest_bin = (text) => crypto.createHash('md5').update(text).digest('binary')

// this returns a HEX string (32-characters long)
const md5_digest_hex = (text) => crypto.createHash('md5').update(text).digest('hex')

// base64
const md5_digest_base64 = (text) => crypto.createHash('md5').update(text).digest('base64')
```


## Crypto algorithms
http://lollyrock.com/articles/nodejs-encryption/

Basics

```sh
openssl list-cipher-algorithms
```

```js
/**
With AES, there are three possible key lengths,
 - 128-bit (16 bytes)
 - 192-bit (24 bytes)
 - 256-bit (32 bytes).
 When you create an AES object, the key size is automatically detected, so it is important to pass in a key of the correct length.
 */

const algorithm = 'aes-128-cbc'
const iv = '3zTvzr3p67VC61jm' // 16-bytes cryptographically-random initialization vector
crypto.createCipheriv(algorithm, password, iv)
```

Encrypt and decrypt text
```js
/**
 * [description]
 * @return {[type]} [description]
 */
export const encrypt = (password, iv, text) => {
  const algorithm = 'aes-128-cbc'
  const cipher = crypto.createCipheriv(algorithm, password, iv)
  let encrypted = cipher.update(text, 'utf8', 'hex')
  return encrypted + cipher.final('hex')
}

/**
 * decrypt an encrypted text using the iv
 * @return {[type]} [description]
 */
export const decrypt = (iv, encrypted) => {
  const algorithm = 'aes-128-cbc'
  const decipher = crypto.createDecipheriv(algorithm, password, iv)
  let decrypted = decipher.update(encrypted, 'hex', 'utf8')
  return decrypted + decipher.final('hex')
}

```

Encrypt and decrypt buffer
```js
function encrypt(buffer){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = Buffer.concat([cipher.update(buffer),cipher.final()]);
  return crypted;
}

function decrypt(buffer){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = Buffer.concat([decipher.update(buffer) , decipher.final()]);
  return dec;
}
```

## random bytes
```js
crypto.randomBytes(16, (err, buf) => {
  if (err) {
    throw err;
  }

  // buf  
})
```

## Buffer and typed arrays

- [Typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrayss)
  - `Unit8Array`
  - `Unit16Array`
  - `Unit32Array`
  - `Float64Array`


The size of the Buffer is established when it is created and cannot be resized.

#### Creation:
```js
const buf1 = new Buffer(10);
  // creates a buffer of length 10

const buf2 = new Buffer([1,2,3]);
  // creates a buffer containing [01, 02, 03]

const buf3 = new Buffer('test');
  // creates a buffer containing ASCII bytes [74, 65, 73, 74]

const buf4 = new Buffer('tést', 'utf8');
  // creates a buffer containing UTF8 bytes [74, c3, a9, 73, 74]
```

Encodings:
- `'ascii'`
- `'utf-8'`
- `'hex'`

## Read/Write file
```js
fs.readFile(path, (err, data) => {
  // data is raw buffer
})

fs.readFile(path, 'utf-8', (err, data) => {
  // data is string
}
```

## hex
http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
```js
(255).toString(16) //'ff'
parseInt('ff', 16)
```

# config.json

[![Build Status](https://travis-ci.org/bulyshko/config.json.png?branch=master)](https://travis-ci.org/bulyshko/config.json)

[nconf](https://github.com/flatiron/nconf) wrapper that simplifies work
with environment specific configuration files.

Using config.json is easy; it:

- loads the default configuration file;
- loads environment specific configuration file and overrides defaults;

and then:

- uses environment variables;
- and command-line arguments to override data from configuration files.

## Installation

```bash
$ npm install config.json
```

## Usage

### Create default configuration file

```bash
$ vi sample.json
```

```json
{
  "domain": "www.example.com",
  "mongodb": {
    "host": "localhost",
    "port": 27017
  }
}
```

### Create environment specific configuration file

```bash
$ vi sample.development.json
```

```json
{
  "domain": "dev.example.com"
}
```

**Note:** Environment specific configuration files should be in the same directory as the default one.

### Test config.json in action

```bash
$ vi sample.js
```

```js
var config = require('config.json')('./sample.json');

console.log("domain:", config.domain);
console.log("mongodb:\n",
  "host:", config.mongodb.host, "\n",
  "port:", config.mongodb.port);
```

Run the above script:

```bash
$ NODE_ENV=development node ./sample.js --mongodb:host "dharma.mongohq.com" --mongodb:port 10065
```

The output will be:

```
domain: dev.example.com
mongodb:
 host: dharma.mongohq.com
 port: 10065
```

## License

(The MIT License)

Copyright (c) 2013 Romuald Bulyshko &lt;romuald@bulyshko.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the &quot;Software&quot;), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

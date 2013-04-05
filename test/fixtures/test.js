var path = require('path').join(__dirname, 'config.json'),
    config = require('../../lib/config')(path);

process.stdout.write(config.foo);

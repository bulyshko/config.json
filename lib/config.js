
var nconf = require('nconf');

module.exports = function (path) {
  // Command-line arguments
  nconf.argv();

  // Environment variables
  nconf.env();

  // Environment specific configuration file
  var env = process.env.NODE_ENV || 'development',
      parts = path.split('.');

  parts.splice(parts.length - 1, 0, env);

  nconf.file(env, parts.join('.'));

  // Default configuration file
  nconf.file(path);

  return nconf.get();
};

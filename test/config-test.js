var assert = require('assert')
    spawn = require('child_process').spawn,
    test = require('path').join(__dirname, 'fixtures', 'test.js');

function run(callback, options) {
  var env = null;

  if (options.env) {
    env = {};

    Object.keys(process.env).forEach(function (key) {
      env[key] = process.env[key];
    });
    Object.keys(options.env).forEach(function (key) {
      env[key] = options.env[key];
    });
  }

  var child = spawn('node', [test].concat(options.args), {env: env});

  child.stdout.on('data', function (data) {
    callback(data.toString());
  });
}

describe('config.json', function () {
  it('should use default configuration file', function (done) {
    run(function (foo) {
      assert.equal(foo, 'bar');
      done();
    }, {
      env: { NODE_ENV: 'production' }
    });
  });

  it('should use environment specific configuration file', function (done) {
    run(function (foo) {
      assert.equal(foo, 'bar-dev');
      done();
    }, {
      env: { NODE_ENV: 'development' }
    });
  });

  it('should use environment variables', function (done) {
    run(function (foo) {
      assert.equal(foo, 'bar');
      done();
    }, {
      env: { NODE_ENV: 'development', foo: 'bar' }
    });
  });

  it('should use command-line arguments', function (done) {
    run(function (foo) {
      assert.equal(foo, 'bar2');
      done();
    }, {
      env: { NODE_ENV: 'development', foo: 'bar' },
      args: ['--foo', 'bar2']
    });
  });
});

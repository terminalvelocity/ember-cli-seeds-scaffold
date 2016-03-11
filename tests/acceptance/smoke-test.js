var path = require('path');
var fs = require('fs-extra');
var runCommand = require('ember-cli/tests/helpers/run-command');
var Promise = require('ember-cli/lib/ext/promise');
var remove = Promise.denodeify(fs.remove);
var testHelper = require('../test-helper');
var testAdapter = fs.readFileSync('./tests/acceptance/test-adapter', 'utf8');
var setupTestApp = testHelper.setupTestApp;
var projectRoot = testHelper.projectRoot;
var root = process.cwd();

describe('Acceptance: scaffold smoke test', function() {
  this.timeout(650000);

  beforeEach(function() {
    return setupTestApp('my-app');
  });

  afterEach(function() {
    process.chdir(root);
    return remove(projectRoot);
  });

  function ember(command) {
    var cliPath = path.join('node_modules', 'ember-cli', 'bin', 'ember');
    return runCommand.apply(null, [cliPath].concat(command.split(' ')));
  }

  function insertTextInto(path, afterPattern, textToInsert) {
    var text = fs.readFileSync(path, {encoding: 'utf8'});
    var index = text.indexOf(afterPattern);

    if (index === -1) {
      throw new Error('Pattern "' + afterPattern + '" not found into ' + path);
    }

    index += afterPattern.length;

    var firstPart = text.slice(0, index);
    var lastPart = text.slice(index, text.length);
    var result = firstPart + textToInsert + lastPart;

    fs.writeFileSync(path, result);
  }

  var bindPolyfill = "    <script>if (!Function.prototype.bind) {Function.prototype.bind = function(oThis) {if (typeof this !== 'function') {throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');} var aArgs   = Array.prototype.slice.call(arguments, 1), fToBind = this, fNOP    = function() {}, fBound  = function() {return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));}; if (this.prototype) {fNOP.prototype = this.prototype;} fBound.prototype = new fNOP(); return fBound;};}</script>\n";

  it('tests pass', function() {
    var indexHtml = path.join(projectRoot, 'my-app', 'tests', 'index.html');
    var adapter = path.join(projectRoot, 'my-app', 'app', 'adapters', 'application.js');

    fs.ensureFile(adapter, function(err) {
      fs.writeFileSync(adapter, testAdapter, "utf8");
    });

    // phantomjs doesn't support Function.prototype.bind :(
    insertTextInto(indexHtml, '  <head>', bindPolyfill);

    return ember('generate ember-cli-seeds-scaffold')
      .then(function() {
        return ember('generate scaffold user name:string age:number');
      })
      .then(function() {
        return ember('test');
      });
  });

  it('works with podModulePrefix', function() {
    var indexHtml = path.join(projectRoot, 'my-app', 'tests', 'index.html');
    var environment = path.join(projectRoot, 'my-app', 'config', 'environment.js');
    var adapter = path.join(projectRoot, 'my-app', 'app', 'pods', 'application', 'adapter.js');

    fs.ensureFile(adapter, function(err) {
      fs.writeFileSync(adapter, testAdapter, "utf8");
    });

    // phantomjs doesn't support Function.prototype.bind :(
    insertTextInto(indexHtml, '  <head>', bindPolyfill);

    insertTextInto(environment, '    modulePrefix: \'my-app\',', '    podModulePrefix: \'my-app/pods\',');

    return ember('generate ember-cli-seeds-scaffold')
      .then(function() {
        return ember('generate scaffold user name:string age:number --pod');
      })
      .then(function() {
        return ember('test');
      });
  });
});

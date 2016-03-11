'use strict';

var assert = require('assert');
var path = require('path');
var fs = require('fs-extra');
var root = process.cwd();
var projectRoot = path.join(require('os').tmpDir(), 'ember-cli-scaffold-tests');
var lookupPath = path.join(root, 'blueprints');
var runCommand = require('ember-cli/tests/helpers/run-command');

module.exports.projectRoot = projectRoot;

module.exports.lookupPath = lookupPath;

module.exports.fixturePath = function fixturePath(fileName) {
  return path.join(root, 'tests', 'fixtures', fileName);
};

module.exports.projectPath = function projectPath(/* paths ... */) {
  var args = Array.prototype.slice.call(arguments);
  args.unshift(projectRoot);
  return path.join.apply(path, args);
};

function fileEqual(actual, expected, message) {
  var actualFile = fs.readFileSync(actual, 'utf8');
  var expectedFile = fs.readFileSync(expected, 'utf8');
  assert.equal(actualFile.trim(), expectedFile.trim(), message);
}

assert.fileEqual = fileEqual;

function updatePackageJson(packagePath, func) {
  var contents = JSON.parse(fs.readFileSync(packagePath, { encoding: 'utf8' }));
  func(contents);
  fs.writeFileSync(packagePath, JSON.stringify(contents, null, 2));
}

module.exports.setupTestApp = function setupTestApp(name) {
  if (fs.existsSync(projectRoot)) { fs.removeSync(projectRoot); }
  fs.mkdirsSync(projectRoot);
  process.chdir(projectRoot);
  return runCommand(path.join(root, 'node_modules', 'ember-cli', 'bin', 'ember'), 'new', name, '--skip-git', '--skip-npm').then(function() {
    process.chdir(path.join('.', name));

    var saveModelMixin = fs.readFileSync(path.join(__dirname, 'acceptance', 'save-model-mixin'), 'utf8');
    var mixin = path.join(projectRoot, 'my-app', 'app', 'mixins', 'save-model-mixin.js');
    fs.ensureFile(mixin, function(err) {
      fs.writeFileSync(mixin, saveModelMixin, "utf8");
    });

    return runCommand('npm', 'install').then(function() {
      updatePackageJson(path.join(process.cwd(), 'package.json'), function(contents) {
        contents.devDependencies['ember-cli-seeds-scaffold'] = '*';
      });
      fs.symlinkSync(root, path.join('node_modules', 'ember-cli-seeds-scaffold'));
    });
  });
};

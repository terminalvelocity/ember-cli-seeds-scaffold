'use strict';

var fs                   = require('fs-extra');
var EmberRouterGenerator = require('ember-router-generator');

var addScaffoldRoutes = function(routerFile, options) {
  var fileContent = fs.readFileSync(routerFile, 'utf8');
  var routes = new EmberRouterGenerator(fileContent);
  var newFileContent = routes
    .add(options.dasherizedModuleNamePlural, {type: 'route'})
    .add(options.dasherizedModuleNamePlural + '/new')
    .add(options.dasherizedModuleNamePlural + '/edit', {path: ':' + options.dasherizedModuleName + '_id/edit'})
    .add(options.dasherizedModuleNamePlural + '/show', {path: ':' + options.dasherizedModuleName + '_id'})
    .code();

  if (!options.dryRun) {
    fs.writeFileSync(routerFile, newFileContent);
  }

  var status = newFileContent === fileContent ? 'identical' : 'change';
  return status;
};

module.exports.addScaffoldRoutes = addScaffoldRoutes;

var removeScaffoldRoutes = function(routerFile, options) {
  var fileContent = fs.readFileSync(routerFile, 'utf8');
  var routes = new EmberRouterGenerator(fileContent);
  var newFileContent = routes
    .remove(options.dasherizedModuleNamePlural, {type: 'route'})
    .code();

  if (!options.dryRun) {
    fs.writeFileSync(routerFile, newFileContent);
  }

  var status = newFileContent === fileContent ? 'identical' : 'change';
  return status;
};

module.exports.removeScaffoldRoutes = removeScaffoldRoutes;

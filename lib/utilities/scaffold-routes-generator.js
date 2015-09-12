'use strict';

const fs                   = require('fs-extra');
const EmberRouterGenerator = require('ember-router-generator');

const addScaffoldRoutes = function(routerFile, options) {
  let fileContent = fs.readFileSync(routerFile, 'utf8');
  let routes = new EmberRouterGenerator(fileContent);
  let newFileContent = routes
    .add(options.dasherizedModuleNamePlural, {type: 'route'})
    .add(options.dasherizedModuleNamePlural + '/new')
    .add(options.dasherizedModuleNamePlural + '/edit', {path: ':' + options.dasherizedModuleName + '_id/edit'})
    .add(options.dasherizedModuleNamePlural + '/show', {path: ':' + options.dasherizedModuleName + '_id'})
    .code();

  if (!options.dryRun) {
    fs.writeFileSync(routerFile, newFileContent);
  }

  let status = newFileContent === fileContent ? 'identical' : 'change';
  return status;
};

module.exports.addScaffoldRoutes = addScaffoldRoutes;

const removeScaffoldRoutes = function(routerFile, options) {
  let fileContent = fs.readFileSync(routerFile, 'utf8');
  let routes = new EmberRouterGenerator(fileContent);
  let newFileContent = routes
    .remove(options.dasherizedModuleNamePlural, {type: 'route'})
    .code();

  if (!options.dryRun) {
    fs.writeFileSync(routerFile, newFileContent);
  }

  let status = newFileContent === fileContent ? 'identical' : 'change';
  return status;
};

module.exports.removeScaffoldRoutes = removeScaffoldRoutes;

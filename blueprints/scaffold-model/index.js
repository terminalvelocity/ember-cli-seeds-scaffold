/*jshint node:true*/

var inflection  = require('inflection');
var path = require('path');

module.exports = {
  description: 'Generates an ember-data model.',

  anonymousOptions: [
    'name',
    'attr:type'
  ],

  fileMapTokens: function(options) {
    return {
      __name__: function(options) {
        return options.dasherizedModuleName;
      }
    }
  },

  locals: function(options) {
    return this.lookupBlueprint('model').locals(options);
  }
};

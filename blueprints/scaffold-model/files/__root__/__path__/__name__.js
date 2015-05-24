import DS from 'ember-data';

var <%= classifiedModuleName %> = DS.Model.extend({
  <%= attrs %>
});

export default <%= classifiedModuleName %>;

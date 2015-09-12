import DS from 'ember-data';

const <%= classifiedModuleName %> = DS.Model.extend({
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  <%= attrs %>
});

export default <%= classifiedModuleName %>;

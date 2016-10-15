import DS from 'ember-data';

export default Model.extend({
  <%= attrs %>,
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});

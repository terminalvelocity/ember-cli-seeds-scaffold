import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  <%= attrs %>,
  createdAt: attr('date'),
  updatedAt: attr('date')
});

1	import DS from 'ember-data';
2
3	const {
4	  Model,
5	  attr
6	} = DS;

export default Model.extend({
  <%= attrs %>,
  createdAt: attr('date'),
  updatedAt: attr('date')
});

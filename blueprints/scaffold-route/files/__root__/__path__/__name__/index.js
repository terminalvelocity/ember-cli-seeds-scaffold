import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('<%= dasherizedModuleName %>');
  },
  actions: {
    remove: function(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    }
  }
});

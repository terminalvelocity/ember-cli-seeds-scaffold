import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('<%= dasherizedModuleName %>');
  },
  actions: {
    remove(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    }
  }
});

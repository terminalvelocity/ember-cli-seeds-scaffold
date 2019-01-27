import Route from '@ember/routing/route';

export default Route.extend({
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

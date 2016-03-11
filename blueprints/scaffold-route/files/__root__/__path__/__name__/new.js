import Ember from 'ember';
import SaveModelMixin from '<%= modulePrefix %>/mixins/save-model-mixin';

export default Ember.Route.extend(SaveModelMixin, {
  model() {
    return this.store.createRecord('<%= dasherizedModuleName %>');
  }
});

import Route from '@ember/routing/route';
import SaveModelMixin from '<%= modulePrefix %>/mixins/save-model-mixin';

export default Route.extend(SaveModelMixin, {
  model() {
    return this.store.createRecord('<%= dasherizedModuleName %>');
  }
});

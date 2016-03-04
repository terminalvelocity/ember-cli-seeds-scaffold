import Ember from 'ember';

export default Ember.Mixin.create({
  deactivate() {
    if (this.currentModel.get('isNew')) {
      this.currentModel.deleteRecord();
    } else {
      this.currentModel.rollbackAttributes();
    }
  },
  actions: {
    save() {
      this.currentModel.save().then(() => {
        this.transitionTo('<%= dasherizedModuleNamePlural %>');
      }, () => {
        console.log('Failed to save the model');
      });
    }
  }
});

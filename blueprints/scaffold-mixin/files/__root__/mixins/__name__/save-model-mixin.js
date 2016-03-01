import Ember from 'ember';

export default Ember.Mixin.create({
  deactivate: function() {
    if (this.currentModel.get('isNew')) {
      this.currentModel.deleteRecord();
    } else {
      this.currentModel.rollbackAttributes();
    }
  },
  actions: {
    save: function() {
      var route = this;
      this.currentModel.save().then(function() {
        route.transitionTo('<%= dasherizedModuleNamePlural %>');
      }, function() {
        console.log('Failed to save the model');
      });
    }
  }
});

import Mixin from '@ember/object/mixin';

export default Mixin.create({
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
        this.transitionTo(`${this.routeName.split('.').slice(0, -1).join('.')}.index`);
      }, () => {
        console.log('Failed to save the model');
      });
    }
  }
});

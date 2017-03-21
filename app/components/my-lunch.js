import Ember from 'ember';

export default Ember.Component.extend({
  dad: Ember.inject.service(),

  chair: Ember.computed(function() {
    let appInstance = Ember.getOwner(this);
    return appInstance.lookup('service:chair');
  }),
  actions: {
    newSandwich() {
      this.set('sandwich', this.get('dad').makeSandwich());
    }
  }
});

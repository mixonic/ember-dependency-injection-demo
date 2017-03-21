import Ember from 'ember';

export default Ember.Service.extend({
  makeSandwich() {
    let owner = Ember.getOwner(this);
    let factory = owner.factoryFor('food:sandwich');
    // class, create
    return factory.create();
  }
});

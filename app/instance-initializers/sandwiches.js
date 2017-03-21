import Ember from 'ember';

const Sandwich = Ember.Object.extend({
  meat: Ember.computed(function() {
    let meats = ['Ham', 'Turkey'];
    return meats[Math.round(Math.random())];
  })
});

export function initialize(appInstance) {
  appInstance.register('food:sandwich', Sandwich);
}

export default {
  name: 'sandwiches',
  initialize
};

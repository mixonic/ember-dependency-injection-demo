export function initialize(appInstance) {
  appInstance.register('service:fridge', window.localStorage, {instantiate: false});
  appInstance.inject('component:my-lunch', 'fridge', 'service:fridge');
}

export default {
  name: 'fridge',
  initialize
};

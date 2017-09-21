import Ember from 'ember';

export default Ember.Component.extend({
  closed: true,

  actions: {
    login() {
      this.get('onLogin')();
    },

    logout() {
      this.get('onLogout')();
    }
  }
});

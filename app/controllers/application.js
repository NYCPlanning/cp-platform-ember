import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    login() {
      const lockOptions = {
        auth: {
          params: { scope: 'openid email' },
          responseType: 'id_token token'
        }
      };

      this.get('session').authenticate('authenticator:auth0-lock', lockOptions);
    },

    logout() {
      this.get('session').invalidate();
    }
  }
});

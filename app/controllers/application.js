import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import config from 'authmaker-super-rentals/config/environment';

export default Controller.extend({
  session: service(),

  actions: {
    login() {
      return this.get('session').authenticate('authenticator:authmaker', config.authmaker);
    },
    logout() {
      return this.get('session').invalidate();
    }
  },

});

import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

// authenticated route protects FE
export default Route.extend(AuthenticatedRouteMixin, {
  // redirect to index if logged out user tries to go to create page
  authenticationRoute: 'index',

});

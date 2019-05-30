import Route from '@ember/routing/route';

export default Route.extend({
  // don't use model hook to load model, as it is blocking page rendering
  setupController(controller) {
    this.store.findAll('question').then( response => {
      controller.set('model', response);
    }, () => {
      controller.set('error', true);
    });
  }
});
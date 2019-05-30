import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNameBindings: ['collapsed::active'],
  collapsed: true,
  answerText: null,
  answerLoaded: false,
  answerNotFound: false,
  showButtons: computed('item.id', function() {
    return (this.get('item.id') === "4") ? true : false;
  }),

  actions: {
    toggle() {
      if (!this.get('showButtons') && !this.get('answerLoaded')) {
        this.get('item.answer').then( response => {
          this.set('answerText', response.get('body'));
        }, () => {
          this.set('answerNotFound', true);
        }).then( () => {
          this.set('answerLoaded', true);
        });
      }
      this.toggleProperty('collapsed');
      return false;
    }
  }
}).reopenClass({
  positionalParams: ['item']
});
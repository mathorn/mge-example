import Component from '@ember/component';

export default Component.extend({
  hasQuestions: false,
  hasAnswered: false,
  actions: {
    handleAnswer(answerCode) {
      if (answerCode === 1) {
        window.location.href = "mailto:matt@blindedbylights.de";
      }
      this.set('hasQuestions', (answerCode === 1) ? true : false);
      this.set('hasAnswered', true);
    }
  }
});
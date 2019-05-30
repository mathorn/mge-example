import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  answer: DS.belongsTo('answer', { async: true })
});
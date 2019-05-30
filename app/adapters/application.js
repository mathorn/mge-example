import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://blindedbylights.de/examples/api'
});
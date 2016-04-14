import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const poll = this.modelFor("polls.poll");
    return this.get('store').createVote(poll);
  },

  store: Ember.inject.service()
});

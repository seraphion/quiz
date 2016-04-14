import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    toggleOption(vote, option) {
      vote.toggleOption(option);
    }
  },

  model() {
    const poll = this.modelFor("polls.poll");
    return this.get('store').createVote(poll);
  },

  store: Ember.inject.service()
});

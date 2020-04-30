import { firestoreAction } from 'vuexfire';
import db from '@/db';

// const { firestoreAction } = Vuexfire;

const state = {
  subreddits: [],
};

const actions = {

  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('subreddits', db.collection('subreddits')); // This will bind the subreddits state with the firebase
  }),
};

export default {
  namespaced: true,
  state,
  actions,
};

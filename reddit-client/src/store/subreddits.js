import { firestoreAction } from 'vuexfire';
import db from '@/db';

// const { firestoreAction } = Vuexfire;

const state = {
  subreddits: [],
};

const actions = {

  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('subreddits', db.collection('subreddits')); // This will bind the subreddits
    // state with the firebase. Any time new-sbureddits is added,
    // instantly pops in the subreddits array
  }),
};

export default {
  namespaced: true,
  state,
  actions,
};

import { firestoreAction } from 'vuexfire';
import db from '@/db';

// const { firestoreAction } = Vuexfire;

const state = {
  users: [],
};

const actions = {

  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('users', db.collection('users')); // This will bind the subreddits
    // state with the firebase. Any time new-sbureddits is added,
    // instantly pops in the subreddits array
  }),
};

const getters = {
  usersBy
}

export default {
  namespaced: true,
  state,
  actions,
};

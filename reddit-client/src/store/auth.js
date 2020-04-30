/*  eslint no-shadow: ["error", { "allow": ["state"] }] */
import firebase from '@/firebase';

const state = { // State for the Vuex: User which will have it's own field
  user: {},
  isLoggedIn: false,
};

const mutations = {
  setUser(state, user) {
    if (user) {
      state.user = user;
      state.isLoggedIn = true;
    } else {
      state.user = {};
      state.isLoggedIn = false;
    }
  },
};

const actions = {

  async login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  },
  async logout() {
    await firebase.auth().signOut();
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

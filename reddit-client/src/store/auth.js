/*  eslint no-shadow: ["error", { "allow": ["state"] }] */
import firebase from '@/firebase';
import db from '@/db';


const state = { // State for the Vuex: User which will have it's own field
  user: {},
  isLoggedIn: false,
};

const mutations = {
  setUser(state, user) {
    console.log(user);
    state.user = user;
    state.isLoggedIn = true;
  },
};

const actions = {

  async login({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await firebase.auth().signInWithPopup(provider);
    const setUser = {
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };
    db.collection('users').doc(setUser.id).set(setUser);
    commit('setUser', setUser);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

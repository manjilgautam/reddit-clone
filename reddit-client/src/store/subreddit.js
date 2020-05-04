/*  eslint no-shadow: ["error", { "allow": ["state"] }] */
import { firestoreAction } from 'vuexfire';
import db from '@/db';
import firebase from '@/firebase';


// const { firestoreAction } = Vuexfire;
const posts = db.collection('posts');

const state = {
  subreddits: [],
  posts: [],
};


const actions = {
  async createPost({ getters }, post) {
    const result = posts.doc();
    post.id = result.id; // eslint-disable-line 
    post.subreddit_id = getters.subreddit.id; // eslint-disable-line 
    post.user_id = firebase.auth().currentUser.uid; // eslint-disable-line 
    post.created_at = firebase.firestore.FieldValue.serverTimestamp(); // eslint-disable-line 
    post.updated_at = firebase.firestore.FieldValue.serverTimestamp(); // eslint-disable-line 
    await posts.doc(post.id).set(post); // eslint-disable-line
  },
  async deletePost(_, post_id) { // eslint-disable-line 
    await posts.doc(post_id).delete(); // eslint-disable-line 
  },
  initSubreddit: firestoreAction(({ bindFirestoreRef }, name) => { // returns the
    // sub-reddit that matches with the name sent in param
    bindFirestoreRef('subreddits', db.collection('subreddits').where('name', '==', name)); // This will bind
    // the subreddits state with the firebase
  }),
  initPosts: firestoreAction(({ bindFirestoreRef }, subreddit_id) => { // eslint-disable-line 
    bindFirestoreRef('posts', posts.where('subreddit_id', '==', subreddit_id)); // eslint-disable-line 
  }),
};

const getters = {
  subreddit: (state) => (state.subreddits[0] ? state.subreddits[0] : {}), // Returns a
  // first sub-reddits
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
};

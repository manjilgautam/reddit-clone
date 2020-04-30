/*  eslint no-shadow: ["error", { "allow": ["state"] }] */
import { firestoreAction } from 'vuexfire';
import db from '@/db';

// const { firestoreAction } = Vuexfire;
const posts = db.collection('posts');

const state = {
  subreddits: [],
  posts: [],
};

const getters = {
  subreddit: (state) => (state.subreddits[0] ? state.subreddits[0] : {}),
};

const actions = {
  async createPost(post) {
    const result = posts.doc();
    console.log('This is the result: ', result);
    post.id = result.id; // eslint-disable-line 
    await posts.doc(post.id).set(post);
  },
  initSubreddit: firestoreAction(({ bindFirestoreRef }, name) => {
    bindFirestoreRef('subreddits', db.collection('subreddits').where('name', '==', name)); // This will bind the subreddits state with the firebase
  }),
  initPosts: firestoreAction(({ bindFirestoreRef }, subreddit_id) => { // eslint-disable-line 
    bindFirestoreRef('posts', db.collection('posts').where('subreddit_id', '==', subreddit_id)); // eslint-disable-line 
  }),
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
};

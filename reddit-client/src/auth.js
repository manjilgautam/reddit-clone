import firebase from '@/firebase';
import store from '@/store';
import db from '@/db';
import router from '@/router';

firebase.auth().onAuthStateChanged((user) => { // Listening when the
  // login state changes || This is like cookie; Observer.
  if (user) {
    if (user.user) {
      user = user.user; // eslint-disable-line no-param-reassign
    }

    const setUser = {
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };
    db.collection('users').doc(setUser.id).set(setUser);
    // User is signed in.
    store.commit('auth/setUser', setUser);
    router.push('/subreddits');
  } else {
    store.commit('auth/setUser', null);
    // No user is signed in.
  }
});

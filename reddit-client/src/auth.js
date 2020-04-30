import firebase from '@/firebase';
import store from '@/store';
import db from '@/db';

firebase.auth().onAuthStateChanged((user) => { // Listening when the login state changes
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
  } else {
    store.commit('auth/setUser', null);
    // No user is signed in.
  }
});

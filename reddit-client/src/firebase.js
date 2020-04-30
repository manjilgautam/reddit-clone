import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBC0AhiIvmaHy_Cx-2hTyUv1qaG38Qcq14',
  authDomain: 'reddit-clone-d7210.firebaseapp.com',
  databaseURL: 'https://reddit-clone-d7210.firebaseio.com',
  projectId: 'reddit-clone-d7210',
  storageBucket: 'reddit-clone-d7210.appspot.com',
  messagingSenderId: '860832027500',
  appId: '1:860832027500:web:b47345ffb8caf7c6399949',
};

firebase.initializeApp(config);

export default firebase;

import firebase from "@firebase/app";
import 'firebase/firestore'
import "@firebase/auth";
import store from "../store";

const config = {
	apiKey: "AIzaSyC_A3jrV_5hlDItwgp6guJZjSC4uzQ1THA",
    authDomain: "uec-products.firebaseapp.com",
    databaseURL: "https://uec-products.firebaseio.com",
    projectId: "uec-products",
    storageBucket: "uec-products.appspot.com",
    messagingSenderId: "570279977145",
    appId: "1:570279977145:web:46e96b8cb876aae8"
}
var fbapp = firebase.initializeApp(config)
export default {
    fbapp: fbapp,
    firestore(){
        return fbapp.firestore()
    },
    init() {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    },
    login(username, password) {
        return firebase.auth().signInWithEmailAndPassword(username, password).then(
            user => {
              return true;
            }
          )
    },
    logout() {
      firebase.auth().signOut()
    },
    onAuth() {
      firebase.auth().onAuthStateChanged(user => {
        user = user ? user : {};
        store.commit('onAuthStateChanged', user);
        store.commit('onUserStatusChanged', user.uid ? true : false);
      });
    }
  };

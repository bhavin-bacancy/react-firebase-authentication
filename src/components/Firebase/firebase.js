import app from 'firebase/app';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyCe16aZbybRY97eacl5wvewxj17Ncec_Q4",
	authDomain: "react-firebse-authentication.firebaseapp.com",
	databaseURL: "https://react-firebse-authentication.firebaseio.com",
	projectId: "react-firebse-authentication",
	storageBucket: "react-firebse-authentication.appspot.com",
	messagingSenderId: "624929951463",
	credentials: true,
};

class Firebase {
	constructor() {
		app.initializeApp(config);
		this.auth = app.auth();
	}

	// *** Auth API ***

	doCreateUserWithEmailAndPassword = (email, password) => 
		this.auth.createUserWithEmailAndPassword(email, password);

	doSignInWithEmailAndPassword = (email, password) =>
		this.auth.signInWithEmailAndPassword(email, password);

	doSignOut = () => this.auth.signOut();

	doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

	doPasswordUpdate = password =>
		this.auth.currentUser.updatePassword(password);
}

export default Firebase;
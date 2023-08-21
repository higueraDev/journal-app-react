import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
	try {
		const { user } = await signInWithPopup(FirebaseAuth, googleProvider);
		const { displayName, email, photoURL, uid } = user;
		return {
			ok: true,
			user: {
				displayName,
				email,
				photoURL,
				uid,
			},
		};
	} catch (error) {
		const errorMessage = error.message;
		const errorCode = error.code;

		return {
			ok: false,
			errorCode,
			errorMessage,
		};
	}
};

export const signInWithEmail = async (form) => {
	try {
		const { user } = await createUserWithEmailAndPassword(
			FirebaseAuth,
			form.email,
			form.password
		);

		const { uid, photoURL, email } = user;

		await updateProfile(FirebaseAuth.currentUser, {
			displayName: form.displayName,
		});

		return {
			ok: true,
			user: {
				uid,
				photoURL,
				email,
				displayName: form.displayName,
			},
		};
	} catch (error) {
		const errorMessage = error.message;
		const errorCode = error.code;

		return {
			ok: false,
			errorCode,
			errorMessage,
		};
	}
};

export const loginWithEmail = async (form) => {
	try {
		const { user } = await signInWithEmailAndPassword(
			FirebaseAuth,
			form.email,
			form.password
		);
		const { uid, displayName, photoURL, email } = user;
		return {
			ok: true,
			user: {
				uid,
				displayName,
				photoURL,
				email,
			},
		};
	} catch (error) {
		const errorMessage = error.message;
		const errorCode = error.code;

		return {
			ok: false,
			errorMessage,
			errorCode,
		};
	}
};

export const logoutFirebase = async () => {
	try {
		await FirebaseAuth.signOut();
		return {
			ok: true,
		};
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;

		return {
			ok: false,
			errorCode,
			errorMessage,
		};
	}
};

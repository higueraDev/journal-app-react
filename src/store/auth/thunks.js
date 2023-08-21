import {
	loginWithEmail,
	logoutFirebase,
	signInWithEmail,
	signInWithGoogle,
} from "../../firebase/providers";
import { setErrorMessage, setStatus, setUser } from "./authSlice";

export const handleSession = (dispatch, { ok, user, errorMessage }) => {
	if (ok && user) {
		dispatch(setUser(user));
		dispatch(setErrorMessage(""));
		dispatch(setStatus("authenticated"));
	} else {
		dispatch(setUser({}));
		dispatch(setErrorMessage(errorMessage));
		dispatch(setStatus("not-authenticated"));
	}
};

export const setCurrentUser = (user) => {
	return (dispatch) => {
		dispatch(setStatus("checking"));
		handleSession(dispatch, {
			ok: true,
			user,
		});
	};
};

export const startLogout = () => {
	return async (dispatch) => {
		try {
			dispatch(setStatus("checking"));
			const response = await logoutFirebase();
			handleSession(dispatch, response);
		} catch (error) {
			console.error(error);
		}
	};
};

export const startGoogleSignIn = () => {
	return async (dispatch) => {
		try {
			dispatch(setStatus("checking"));
			const response = await signInWithGoogle();
			handleSession(dispatch, response);
		} catch (error) {
			console.error(error);
		}
	};
};

export const startSignInWithEmail = (form) => {
	return async (dispatch) => {
		try {
			dispatch(setStatus("checking"));
			const response = await signInWithEmail(form);
			handleSession(dispatch, response);
		} catch (error) {
			console.error(error);
		}
	};
};

export const startLoginWithEmail = (form) => {
	return async (dispatch) => {
		try {
			dispatch(setStatus("checking"));
			const response = await loginWithEmail(form);
			handleSession(dispatch, response);
		} catch (error) {
			console.error(error);
		}
	};
};

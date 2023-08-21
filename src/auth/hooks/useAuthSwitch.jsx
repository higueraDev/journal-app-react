import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../../firebase/config";
import { setCurrentUser, startLogout } from "../../store/auth";

export const useAuthSwitch = (statusOptions) => {
	const { status } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(FirebaseAuth, async (user) => {
			if (!user) {
				dispatch(startLogout());
				return;
			}
			const { uid, displayName, photoURL, email } = user;
			dispatch(setCurrentUser({ uid, displayName, photoURL, email }));
		});
	}, []);

	return statusOptions[status];
};

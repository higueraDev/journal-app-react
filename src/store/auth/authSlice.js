import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		status: "checking",
		user: {
			uid: "",
			email: "",
			displayName: "",
			photoURL: "",
		},
		errorMessage: "",
	},
	reducers: {
		setUser: (state, { payload }) => {
			state.user = payload;
		},
		setErrorMessage: (state, { payload }) => {
			state.errorMessage = payload;
		},
		setStatus: (state, { payload }) => {
			state.status = payload;
		},
	},
});

export const { setUser, setErrorMessage, setStatus } = authSlice.actions;

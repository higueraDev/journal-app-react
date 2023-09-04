import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
	name: "journal",
	initialState: {
		isSaving: false,
		message: "",
		notes: [],
		activeNote: {
			title: "",
			body: "",
			date: 0,
			imageUrls: [],
		},
	},
	reducers: {
		setIsSaving: (state, { payload }) => {
			state.isSaving = payload;
		},
		setActiveNote: (state, { payload }) => {
			state.activeNote = payload;
		},
		setNotes: (state, { payload }) => {
			state.notes = payload;
		},
	},
});

export const { setIsSaving, setActiveNote, setNotes } = journalSlice.actions;

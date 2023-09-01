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
		addNote: (state, { payload }) => {
			state.notes.push(payload);
		},
		setActiveNote: (state, { payload }) => {
			state.activeNote = payload;
		},
		setNotes: (state, { payload }) => {
			state.notes = payload;
		},
		updateNote: (state, { payload }) => {},
		deleteNote: (state, { payload }) => {},
	},
});

export const {
	setIsSaving,
	addNote,
	deleteNote,
	setActiveNote,
	setNotes,
	updateNote,
} = journalSlice.actions;

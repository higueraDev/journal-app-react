import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { setActiveNote, setIsSaving, setNotes } from "./journalSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const startAddNote = () => {
	return async (dispatch, getState) => {
		const { auth } = getState();
		const { user } = auth;

		const newNote = {
			title: "",
			body: "",
			date: new Date().getTime(),
			imageUrls: [],
		};

		dispatch(setIsSaving(true));

		const newDoc = doc(collection(FirebaseDB, `${user.uid}/journal/notes`));
		await setDoc(newDoc, newNote);
		newNote.id = newDoc.id;
		dispatch(setActiveNote(newNote));
		
		dispatch(setIsSaving(false));
	};
};

export const startGetNotes = createAsyncThunk(
	"journal/startGetNotes",
	async (params, { dispatch, getState }) => {
		const { auth } = getState();
		const { uid } = auth.user;

		const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
		const docs = await getDocs(collectionRef);
		const notes = [];
		docs.forEach((doc) => {
			notes.push({ id: doc.id, ...doc.data() });
		});
		dispatch(setNotes(notes));

		const result = {
			success: true,
			message: "Data fetched successfully",
		};

		return result;
	}
);

export const startSaveNote = createAsyncThunk(
	"journal/startSaveNote",
	async (params, { dispatch, getState }) => {
		const { auth } = getState();
		const { user } = auth;
		const { journal } = getState();
		const { activeNote } = journal;
		const { id } = activeNote;

		dispatch(setIsSaving(true));

		const docRef = doc(FirebaseDB, `${user.uid}/journal/notes/${id}`);
		await setDoc(docRef, activeNote, { merge: true });

		dispatch(setIsSaving(false));

		const result = {
			success: true,
			message: "Updates saved successfully",
		};

		return result;
	}
);

import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNote, setActiveNote, setIsSaving, setNotes } from "./journalSlice";

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
		dispatch(addNote(newNote));
		dispatch(setActiveNote(newNote));
		dispatch(setIsSaving(false));
	};
};

export const startGetNotes = () => {
	return async (dispatch, getState) => {
		const { auth } = getState();
		const { uid } = auth.user;

		const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
		const docs = await getDocs(collectionRef);
		const notes = [];
		docs.forEach((doc) => {
			notes.push({ id: doc.id, ...doc.data() });
		});
		dispatch(setNotes(notes));
	};
};

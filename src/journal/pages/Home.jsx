import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth/thunks";
import {
	startAddNote,
	startGetNotes,
	startSaveNote,
} from "../../store/journal/thunks";
import { useEffect, useMemo } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { useForm } from "../../hooks";
import { launchAlert } from "../../helpers/launchAlert";

export const Home = () => {
	const { user } = useSelector((state) => state.auth);

	const { isSaving, activeNote, notes } = useSelector(
		(state) => state.journal
	);

	const dispatch = useDispatch();

	const {
		formState: activeNoteForm,
		date,
		onInputChange,
	} = useForm(activeNote);

	const dateString = useMemo(
		() => new Date(date).toLocaleDateString(),
		[date]
	);

	const onLogout = () => {
		dispatch(startLogout());
	};

	const onAddNote = async () => {
		dispatch(startAddNote());
	};

	const onSidebarItemClick = (id) => {
		const note = notes.find((note) => note.id === id);
		dispatch(setActiveNote(note));
	};

	const onSaveNote = async () => {
		dispatch(setActiveNote(activeNoteForm));
		await dispatch(startSaveNote());
		await dispatch(startGetNotes());
		launchAlert(
			"Note Updated",
			"Your Changes has been saved successfully",
			"success"
		);
	};

	useEffect(() => {
		dispatch(startGetNotes());
	}, []);

	return (
		<JournalLayout
			onLogout={onLogout}
			displayName={user.displayName}
			data={notes}
			onSidebarItemClick={onSidebarItemClick}
		>
			{activeNote.date ? (
				<NoteView
					note={{ ...activeNoteForm, date: dateString }}
					onInputChange={onInputChange}
					onSaveNote={onSaveNote}
					isSaving={isSaving}
				/>
			) : (
				<NothingSelectedView />
			)}

			<IconButton
				disabled={isSaving}
				onClick={onAddNote}
				size="large"
				sx={{
					color: "white",
					backgroundColor: "error.main",
					":hover": { backgroundColor: "error.main", opacity: "0.9" },
					position: "fixed",
					right: 50,
					bottom: 50,
				}}
			>
				<AddOutlined sx={{ fontSize: 30 }} />
			</IconButton>
		</JournalLayout>
	);
};

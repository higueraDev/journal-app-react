import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth/thunks";
import { startAddNote, startGetNotes } from "../../store/journal/thunks";
import { useEffect } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";

export const Home = () => {
	const { user } = useSelector((state) => state.auth);
	const { isSaving, activeNote, notes } = useSelector(
		(state) => state.journal
	);
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(startLogout());
	};
	const onAddNote = () => {
		dispatch(startAddNote());
	};

	const onSidebarItemClick = (id) => {
		const note = notes.find((note) => note.id === id);
		dispatch(setActiveNote(note));
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
			{activeNote.id ? <NoteView /> : <NothingSelectedView />}
			
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

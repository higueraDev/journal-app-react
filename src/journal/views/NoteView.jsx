import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components/ImageGallery";
import PropTypes from "prop-types";
import { useForm } from "../../hooks";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export const NoteView = () => {
	const { activeNote } = useSelector((state) => state.journal);
	const { date, body, title,onInputChange } = useForm(activeNote);
	const dateString = useMemo(() => new Date(date).toLocaleDateString(), [date])

	return (
		<Grid
			container
			direction="row"
			alignItems="center"
			justifyContent="space-between"
			overflow="hidden"
		>
			<Grid item>
				<Typography fontSize={39} fontWeight="light">
					{dateString}
				</Typography>
			</Grid>
			<Grid item>
				<Button color="primary" padding={2}>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
					Save
				</Button>
			</Grid>
			<Grid container>
				<TextField
					onChange={onInputChange}
					type="text"
					variant="filled"
					placeholder="Type a cool title"
					label="Title"
					name="title"
					value={title}
					fullWidth
					sx={{ mb: 1, border: "none" }}
				/>
				<TextField
					onChange={onInputChange}
					type="text"
					variant="filled"
					placeholder="What's going on?"
					value={body}
					name="body"
					multiline
					fullWidth
					minRows={5}
				/>
			</Grid>
			<Grid item width="100%" maxHeight="calc(100vh - 382.5px)">
				<ImageGallery />
			</Grid>
		</Grid>
	);
};

NoteView.propTypes = {
	note: PropTypes.shape({
		date: PropTypes.number,
	}),
	onInputChange: PropTypes.func,
};

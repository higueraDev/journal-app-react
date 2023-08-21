import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components/ImageGallery";

export const NoteView = () => {
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
					August 24 ,2023
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
					type="text"
					variant="filled"
					placeholder="Type a cool title"
					label="Title"
					fullWidth
					sx={{ mb: 1, border: "none" }}
				/>
				<TextField
					type="text"
					variant="filled"
					placeholder="What's going on?"
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

import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{
				minHeight: "calc(100vh - 112px)",
				backgroundColor: "primary.main",
				borderRadius: 3,
			}}
		>
			<Grid item xs={12}>
				<StarOutline sx={{ color: "white", fontSize: "100px" }} />
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h5" color="white">
					Select an entry
				</Typography>
			</Grid>
		</Grid>
	);
};

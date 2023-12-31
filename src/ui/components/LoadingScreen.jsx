import { CircularProgress, Grid } from "@mui/material";

export const LoadingScreen = () => {
	return (
		<Grid
			container
			spacing={0}
			
			direction={"column"}
			alignItems={"center"}
			justifyContent={"center"}
			sx={{
				minHeight: "100vh",
				backgroundColor: "primary.main",
				padding: 4,
			}}
		>
			<Grid item>
				<CircularProgress color="secondary" />
			</Grid>
		</Grid>
	);
};

import { createTheme } from "@mui/material";
import { green, purple, red } from "@mui/material/colors";

export const purpleTheme = createTheme({
	palette: {
		primary: purple,
		secondary: green,
		error: red,
	},
});

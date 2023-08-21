import { CssBaseline, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import { purpleTheme } from "./purpleTheme";

export const AppTheme = ({ children }) => {
	return (
		<ThemeProvider theme={purpleTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

AppTheme.propTypes = {
	children: PropTypes.node.isRequired,
};
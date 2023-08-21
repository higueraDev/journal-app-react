import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";

export const Navbar = ({ offsetLeft, onLogout }) => {
	return (
		<AppBar
			position="fixed"
			sx={{
				width: { sm: `calc(100% - ${offsetLeft}px)` },
				left: { sm: offsetLeft + "px" },
			}}
		>
			<Toolbar>
				<IconButton
					color="inherit"
					edge="start"
					sx={{ mr: 2, display: { sm: "none" } }}
				>
					<MenuOutlined />
				</IconButton>
				<Grid
					container
					direction={"row"}
					justifyContent={"space-around"}
					alignItems={"center"}
				>
					<Typography variant="h6" noWrap component={"div"}>
						Journal App
					</Typography>
					<IconButton onClick={onLogout} color="inherit">
						<LogoutOutlined />
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

Navbar.propTypes = {
	offsetLeft: PropTypes.number,
	onLogout: PropTypes.func,
};

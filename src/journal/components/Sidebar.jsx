import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = ({ drawerWidth, displayName, data, onItemClick }) => {
	return (
		<Box
			component="nav"
			sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
		>
			<Drawer
				variant="permanent"
				open
				sx={{
					display: { xs: "block" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: drawerWidth,
					},
				}}
			>
				<Toolbar nowrap="true" component="div">
					<Typography
						variant="h6"
						sx={{ textTransform: "capitalize" }}
					>
						{displayName}
					</Typography>
				</Toolbar>
				<Divider />
				<List>
					{data.map(({ title, body, id }) => (
						<SidebarItem
							onClick={onItemClick}
							key={crypto.randomUUID()}
							title={title}
							body={body}
							id={id}
						/>
					))}
				</List>
			</Drawer>
		</Box>
	);
};

Sidebar.propTypes = {
	drawerWidth: PropTypes.number,
	displayName: PropTypes.string,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			body: PropTypes.string,
			date: PropTypes.number,
			imageUrls: PropTypes.arrayOf(
				PropTypes.shape({
					img: PropTypes.string,
					title: PropTypes.string,
				})
			),
		})
	),
	onItemClick: PropTypes.func,
};

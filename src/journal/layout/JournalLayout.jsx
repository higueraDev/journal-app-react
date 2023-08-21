import { Box, Toolbar } from "@mui/material";
import PropTypes from "prop-types";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

const drawerWidth = 240;
export const JournalLayout = ({ children, onLogout, displayName, data, onSidebarItemClick }) => {
	return (
		<Box
			className="animate__animated animate__fadeIn animate__faster"
			sx={{ display: "flex" }}
		>
			<Navbar offsetLeft={drawerWidth} onLogout={onLogout} />
			<Sidebar
				drawerWidth={drawerWidth}
				displayName={displayName}
				data={data}
				onItemClick={onSidebarItemClick}
			/>
			<Box component={"main"} sx={{ flexGrow: 1, padding: 3 }}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};

JournalLayout.propTypes = {
	children: PropTypes.node.isRequired,
	onLogout: PropTypes.func,
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
	onSidebarItemClick: PropTypes.func
};

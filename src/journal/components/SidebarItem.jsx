import { TurnedInNot } from "@mui/icons-material";
import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";

import PropTypes from "prop-types";

const textStyles = {
	">*": {
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
		overflow: "hidden",
		maxWidth: "150px",
	},
};

export const SidebarItem = ({ id, title, body, onClick }) => {
	const handleClick = () => {
		onClick(id);
	};
	return (
		<ListItem disablePadding>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>
					<TurnedInNot />
				</ListItemIcon>
				<List disablePadding>
					<ListItemText sx={textStyles} primary={title} />
					<ListItemText secondary={body} sx={textStyles} />
				</List>
			</ListItemButton>
		</ListItem>
	);
};

SidebarItem.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	body: PropTypes.string,
	onClick: PropTypes.func,
};

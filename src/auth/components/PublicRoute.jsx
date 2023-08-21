import { Navigate } from "react-router-dom";
import { LoadingScreen } from "../../ui";
import { useAuthSwitch } from "../hooks/useAuthSwitch";

export const PublicRoute = ({ children }) => {
	const statusOptions = {
		authenticated: <Navigate to="/" />,
		"not-authenticated": children,
		checking: <LoadingScreen />,
	};

	const element = useAuthSwitch(statusOptions);

	return element;
};

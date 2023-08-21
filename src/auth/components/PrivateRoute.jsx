import { Navigate } from "react-router-dom";
import { LoadingScreen } from "../../ui/components";
import { useAuthSwitch } from "../hooks/useAuthSwitch";

export const PrivateRoute = ({ children }) => {
	const statusOptions = {
		authenticated: children,
		"not-authenticated": <Navigate to="/auth" />,
		checking: <LoadingScreen />,
	};

	const element = useAuthSwitch(statusOptions);

	return element;
};

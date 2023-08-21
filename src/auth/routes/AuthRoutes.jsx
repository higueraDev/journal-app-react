import { Navigate } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";

export const AuthRoutes = [
	{
		path: "",
		element: <Navigate to={"/auth/login"} />,
	},
	{
		path: "login",
		element: <LoginPage />,
	},
	{
		path: "register",
		element: <RegisterPage />,
	},
];

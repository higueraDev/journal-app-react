import { Navigate, Outlet, createRoutesFromChildren } from "react-router-dom";
import { Home } from "../journal/pages/Home";
import { PrivateRoute, PublicRoute } from "../auth/components";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
createRoutesFromChildren;
export const AppRoutes = [
	{
		path: "/",
		element: (
			<PrivateRoute>
				<Home />
			</PrivateRoute>
		),
	},
	{
		path: "/auth",
		element: (
			<PublicRoute>
				<Outlet />
			</PublicRoute>
		),
		children: AuthRoutes,
	},
	{
		path: "/*",
		element: <Navigate to="/" />,
	},
];

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";
import { store } from "./store";
import "./styles.css";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<AppTheme>
				<RouterProvider router={AppRouter} />
			</AppTheme>
		</Provider>
	</React.StrictMode>
);

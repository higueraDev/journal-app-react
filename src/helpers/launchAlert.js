import Swal from "sweetalert2";

export const launchAlert = (title, message, icon) => {
	Swal.fire(title, message, icon);
};

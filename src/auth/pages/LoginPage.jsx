import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { Typography } from "@mui/material";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
	setErrorMessage,
	startGoogleSignIn,
	startLoginWithEmail,
} from "../../store/auth";
import { useEffect, useMemo } from "react";
import { useValidator } from "../../hooks/useValidator";

const initialForm = {
	email: "david@hotmail.com",
	password: "asdjsndsds",
};

const formValidations = {
	email: [(value) => value.includes("@"), "Email should have @"],
	password: [(value) => value.length > 0, "This field is required"],
};

export const LoginPage = () => {
	const { status, errorMessage } = useSelector((store) => store.auth);
	const dispatch = useDispatch();

	const isCheckingAuthentication = useMemo(
		() => status === "checking",
		[status]
	);

	const { email, password, formState, onInputChange } = useForm(initialForm);

	const { validateInput, validateForm, isFormValid, errors } =
		useValidator(formValidations);

	const handleInputChange = (e) => {
		onInputChange(e);
		validateInput(e);
	};

	const title = "Login";

	const inputs = [
		{
			name: "email",
			label: "Email",
			type: "email",
			placeholder: "email@domain.com",
			value: email,
			callback: handleInputChange,
			hasError: !!errors["email"],
			errorMessage: errors["email"],
		},
		{
			name: "password",
			label: "Password",
			type: "password",
			placeholder: "Type your password",
			value: password,
			callback: handleInputChange,
			hasError: !!errors["password"],
			errorMessage: errors["password"],
		},
	];

	const buttons = [
		{
			name: "login",
			children: <>Login</>,
			type: "submit",
			disabled: isCheckingAuthentication || !isFormValid,
		},
		{
			name: "google",
			children: (
				<>
					<Google />
					<Typography sx={{ ml: 1 }}>Google</Typography>
				</>
			),
			type: "submit",
			disabled: isCheckingAuthentication,
		},
	];

	const link = {
		to: "/auth/register",
		text: "Create an Account",
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (!isFormValid) return;
		dispatch(startLoginWithEmail(formState));
	};

	const onClick = ({ target }) => {
		const isLogin = target.name === "login";
		if (!isLogin) dispatch(startGoogleSignIn());
	};

	const onLink = () => {
		dispatch(setErrorMessage(""));
	};

	useEffect(() => {
		const isFormFilled = Object.values(initialForm).every(
			(value) => !!value
		);
		if (isFormFilled) validateForm(initialForm);
	}, [initialForm]);

	return (
		<AuthLayout
			title={title}
			inputs={inputs}
			buttons={buttons}
			link={link}
			onSubmit={onSubmit}
			onClick={onClick}
			onLink={onLink}
			errorAlert={errorMessage}
		/>
	);
};

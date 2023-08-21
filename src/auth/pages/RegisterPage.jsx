import { useEffect, useMemo } from "react";
import { useForm } from "../../hooks";
import { AuthLayout } from "../layout/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { useValidator } from "../../hooks/useValidator";
import { setErrorMessage, startSignInWithEmail } from "../../store/auth";

const initialForm = {
	displayName: "Manuel David",
	email: "david@hotmail.com",
	password: "asdjsndsds",
};

const formValidations = {
	displayName: [(value) => value.length > 0, "This field is required"],
	email: [(value) => value.includes("@"), "Email should have @"],
	password: [
		(value) => value.length > 7,
		"Password should have at least 8 characters",
	],
};

export const RegisterPage = () => {
	const { status, errorMessage } = useSelector((store) => store.auth);
	const dispatch = useDispatch();
	const isCheckingAuthentication = useMemo(
		() => status === "checking",
		[status]
	);

	const { email, password, displayName, formState, onInputChange } =
		useForm(initialForm);

	const { validateInput, isFormValid, validateForm, errors } =
		useValidator(formValidations);

	const handleInputChange = (e) => {
		onInputChange(e);
		validateInput(e);
	};

	const title = "Register";
	const inputs = [
		{
			name: "displayName",
			label: "Name",
			type: "text",
			value: displayName,
			placeholder: "Type your name",
			callback: handleInputChange,
			hasError: !!errors["displayName"],
			errorMessage: errors["displayName"],
		},
		{
			name: "email",
			label: "Email",
			type: "email",
			value: email,
			placeholder: "email@domain.com",
			callback: handleInputChange,
			hasError: !!errors["email"],
			errorMessage: errors["email"],
		},
		{
			name: "password",
			label: "Password",
			type: "password",
			value: password,
			placeholder: "Type your password",
			callback: handleInputChange,
			hasError: !!errors["password"],
			errorMessage: errors["password"],
		},
	];

	const buttons = [
		{
			name: "signup",
			children: <>Create Account</>,
			type: "submit",
			disabled: isCheckingAuthentication || !isFormValid,
		},
	];

	const link = {
		to: "/auth/login",
		text: "Use your Account",
	};

	const onLink = () => {
		dispatch(setErrorMessage(""));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (!isFormValid) return;
		dispatch(startSignInWithEmail(formState));
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
			onLink={onLink}
			errorAlert={errorMessage}
		/>
	);
};

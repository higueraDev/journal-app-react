import { useMemo, useState } from "react";

export const useValidator = (formValidations = {}) => {
	const [errors, setErrors] = useState({});

	const setValidationResult = (name, isValid) => {
		if (isValid) {
			setErrors((errors) => ({ ...errors, [name]: "" }));
		} else {
			const [, errorMessage] = formValidations[name];
			setErrors((errors) => ({ ...errors, [name]: errorMessage }));
		}
	};

	const isInputValid = (name, value) => {
		if (!Object.keys(formValidations).includes(name)) return true;
		const [fn] = formValidations[name];
		const isValid = fn(value);
		return isValid;
	};

	const validateInput = (e) => {
		const { name, value } = e.target;
		const isValid = isInputValid(name, value);
		setValidationResult(name, isValid);
	};

	const isFormValid = useMemo(() => {
		const errorValues = Object.values(errors);
		const validationKeys = Object.values(formValidations);
		const allValidated = errorValues.length === validationKeys.length;
		const allClear = errorValues.every(
			(errorMessage) => errorMessage.length === 0
		);
		const isValid = allValidated && allClear;
		return isValid;
	}, [errors]);

	const validateForm = (form) => {
		for (const input in form) {
			if (Object.hasOwnProperty.call(form, input)) {
				const name = input;
				const value = form[input];
				const isValid = isInputValid(name, value);
				setValidationResult(name, isValid);
			}
		}
	};

	return { validateInput, validateForm, isFormValid, errors };
};

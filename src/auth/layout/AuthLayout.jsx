import PropTypes from "prop-types";

import {
	Alert,
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	Link,
	TextField,
	Typography,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

export const AuthLayout = ({
	title,
	inputs,
	buttons,
	link,
	onSubmit,
	onClick,
	onLink,
	errorAlert,
}) => {
	return (
		<Grid
			container
			spacing={0}
			direction={"column"}
			alignItems={"center"}
			justifyContent={"center"}
			sx={{
				minHeight: "100vh",
				backgroundColor: "primary.main",
				padding: 4,
			}}
		>
			<Grid sx={{ width: { sm: "450px" } }} item>
				<form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
					<Card sx={{ padding: 2 }}>
						<CardContent>
							<Typography variant="h5" sx={{ mb: 1 }}>
								{title}
							</Typography>
							<Grid container>
								{inputs.map(
									(
										{
											name,
											label,
											type,
											placeholder,
											value,
											hasError,
											errorMessage,
											callback,
										},
										index
									) => (
										<Grid
											key={index}
											xs={12}
											sx={{ mb: 2 }}
											item
										>
											<TextField
												name={name}
												label={label}
												type={type}
												placeholder={placeholder}
												onChange={callback}
												value={value}
												error={hasError}
												helperText={errorMessage}
												fullWidth
											/>
										</Grid>
									)
								)}
							</Grid>
						</CardContent>
						<CardActions>
							<Grid container padding={"8px"}>
								<Grid container spacing={2} sx={{ mb: 2 }}>
									{errorAlert && (
										<Grid item xs={12}>
											<Alert severity="error">
												{errorAlert}
											</Alert>
										</Grid>
									)}
									{buttons.map(
										({
											children,
											type,
											disabled,
											name,
										}) => (
											<Grid
												key={crypto.randomUUID()}
												item
												xs={12}
												sm={buttons.length > 1 ? 6 : 12}
											>
												<Button
													name={name}
													variant="contained"
													fullWidth
													type={type}
													disabled={disabled}
													onClick={onClick}
												>
													{children}
												</Button>
											</Grid>
										)
									)}
								</Grid>
								<Grid
									container
									direction={"row"}
									justifyContent={"end"}
								>
									<Link
										component={RouterLink}
										to={link.to}
										color={"inherit"}
										onClick={onLink}
									>
										{link.text}
									</Link>
								</Grid>
							</Grid>
						</CardActions>
					</Card>
				</form>
			</Grid>
		</Grid>
	);
};

AuthLayout.propTypes = {
	title: PropTypes.string.isRequired,
	inputs: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			label: PropTypes.string,
			type: PropTypes.string,
			placeholder: PropTypes.string,
			value: PropTypes.string,
			hasError: PropTypes.bool,
			errorMessage: PropTypes.string,
			callback: PropTypes.func,
		})
	).isRequired,
	buttons: PropTypes.arrayOf(
		PropTypes.shape({
			children: PropTypes.node,
			type: PropTypes.string,
			disabled: PropTypes.bool,
			name: PropTypes.string,
		})
	).isRequired,
	link: PropTypes.shape({
		to: PropTypes.string,
		text: PropTypes.string,
	}),
	onSubmit: PropTypes.func,
	onLink: PropTypes.func,
	onClick: PropTypes.func,
	errorAlert: PropTypes.string,
};

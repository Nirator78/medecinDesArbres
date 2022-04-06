import React from "react";
import AuthService from "../../services/auth.service"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GreenButton from "../GreenButton";

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 500,
	bgcolor: 'background.paper',
	borderRadius: 5 + 'px',
	boxShadow: 24,
	p: 4,
};

function Connexion() {
	const [values, setValues] = React.useState({
		email: '',
		password: '',
		showPassword: false,
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	async function postData() {
		AuthService.login(values.email, values.password).then(
			() => {
				window.location.reload();
			},
			error => {
				console.log(error);
			}
		);
	}

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<div>

				<Button
					onClick={handleOpen}
					variant="contained"
					style={{marginRight: 2, backgroundColor: '#3e993f' }}
				>
					Connexion
				</Button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
							<div className="max-w-md w-full space-y-8">
								<div>
									<img
										className="mx-auto h-12 w-auto"
										src="/logo.png"
										alt=""
									/>
									<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Connexion a votre compte</h2>
								</div>
								<FormControl fullWidth variant="standard">
									<InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
									<Input
										id="standard-adornment-email"
										type="email"
										value={values.email}
										onChange={handleChange('email')}
									/>
								</FormControl>
								<FormControl fullWidth variant="standard">
									<InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
									<Input
										id="standard-adornment-password"
										type={values.showPassword ? 'text' : 'password'}
										value={values.password}
										onChange={handleChange('password')}
										sx={{ width: 1 }}
										endAdornment={
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleClickShowPassword}
													onMouseDown={handleMouseDownPassword}
												>
													{values.showPassword ? <VisibilityOff /> : <Visibility />}
												</IconButton>
											</InputAdornment>
										}
									/>
								</FormControl>
								<div className="flex items-center justify-between pt-6 pb-6">
									<div className="flex items-center">
										<input
											id="remember-me"
											name="remember-me"
											type="checkbox"
											className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
										/>
										<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
											Se souvenir de moi
										</label>
									</div>

									<div className="text-sm">
										<button className="font-medium text-indigo-600 hover:text-indigo-500">
											Mot de passe oublié?
										</button>
									</div>
								</div>
								<div>
									<GreenButton title="Connexion" handleClick={postData} />
								</div>

							</div>
						</div>
					</Box>
				</Modal>
			</div>
		</>
	);
}

export default Connexion;

import React from "react";
import AuthService from "../../services/auth.service"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GreenButton from "../GreenButton";
import { useForm } from "react-hook-form";
import FormError from "../FormError";

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
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [showPassword, setShowPassword] = React.useState(false)
	const [erreur, setErreur] = React.useState()
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword)
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	async function postData(data) {
		AuthService.login(data).then(
			response => {
                if (response.status) {
                    window.location.reload()
                }
				else {
					setErreur("Mot de passe ou email incorrect");
				}
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
					<form onSubmit={handleSubmit(postData)}>

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
									<h2 className="mt-6 mb-6 text-center text-red-600"> {erreur} </h2>
									<FormControl fullWidth variant="standard">
										<InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
										<Input
											id="standard-adornment-email"
											type="email"
											name="email"
											{...register("email", { required: true })}
										/>
											{
												errors.email?.type === 'required' &&
												<FormError text="Le email est un champ obligatoire" />
											}
									</FormControl>
									<FormControl fullWidth variant="standard">
										<InputLabel htmlFor="standard-adornment-password">Mot de passe</InputLabel>
										<Input
											id="standard-adornment-password"
											type={showPassword ? 'text' : 'password'}
											name="password"
											sx={{ width: 1 }}
											endAdornment={
												<InputAdornment position="end">
													<IconButton
														aria-label="toggle password visibility"
														onClick={handleClickShowPassword}
														onMouseDown={handleMouseDownPassword}
													>
														{showPassword ? <VisibilityOff /> : <Visibility />}
													</IconButton>
												</InputAdornment>
											}
											{...register("password", { required: true })}
										/>
										{
											errors.password?.type === 'required' &&
											<FormError text="Le mot de passe  est un champ obligatoire" />
										}
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
					</form>

						</Box>
				</Modal>
			</div>
		</>
	);
}

export default Connexion;

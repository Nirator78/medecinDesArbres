import React from "react";
import AuthService from "../../services/auth.service"
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Modal } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ButtonConnexion, FormError } from "../";
import { useForm } from "react-hook-form";
import { useStyles } from "../../utils/style.js";
import { useNavigate } from "react-router-dom";

function MotPasseOublie() {
	const { register, handleSubmit, formState: { errors }, reset } = useForm();
	const [showPassword, setShowPassword] = React.useState(false)
	const [erreur, setErreur] = React.useState()
	const [changePage, setChangePage] = React.useState(false)

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword)
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	const style = useStyles();

	async function postData(data) {
		AuthService.forgotPassword(data).then(
			response => {
                if (response.status) {
					setChangePage(true);
					setErreur("");
					reset()
                }
				else {
					setErreur("Email incorrect ou non existant");
					setChangePage(false);
				}
            },
			error => {
				console.log(error);
			}
		);
	}

	async function postNewPassword(data) {
		AuthService.newPassword(data).then(
			response => {
                if (response.status) {
                    setOpen(false)
					setChangePage(false);
                }
				else {
					setErreur("Key incorrect");
				}
            },
			error => {
				console.log(error);
			}
		);
	}

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {setOpen(false); reset();	}

	return (
		<>
			<div>

				<button
					type="button"
					onClick={handleOpen}
					variant="contained"
					className="font-medium text-indigo-600 hover:text-indigo-500"
				>
					Mot de passe oublié ?
				</button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					{
						!changePage ?
						<Box sx={style.box}>
							<form onSubmit={handleSubmit(postData)}>
								<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
									<div className="max-w-md w-full space-y-8">
										<div>
											<img
												className="mx-auto h-12 w-auto"
												src="/logo.png"
												alt=""
											/>
											<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Mot de passe oublié</h2>
											<h4 className="text-center pt-2">Pas d'inquiétude renseigner votre adresse email et un email de modification du mot de passe vous seras envoyé.</h4>
										</div>
										<h2 className="mt-6 mb-6 text-center text-red-600"> {erreur} </h2>
										<FormControl fullWidth variant="standard">
											<InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
											<Input
												id="standard-adornment-email"
												type="email"
												name="email"
												{...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
											/>
												{
													errors.email?.type === 'required' &&
													<FormError text="Le champ 'Email' est obligatoire" />
												}
												{
													errors.email?.type === 'pattern' &&
													<FormError text="Le champ 'Email' doit être une adresse email valide" />
												}
										</FormControl>
										<div className="flex items-center justify-between pt-6 pb-6">
											<ButtonConnexion title="Envoyer" handleClick={postData} />
										</div>
									</div>
								</div>
							</form>
						</Box>
						: 
						<>
							<Box sx={style.box}>
								<form onSubmit={handleSubmit(postNewPassword)}>
									<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
										<div className="max-w-md w-full space-y-8">
											<div>
												<img
													className="mx-auto h-12 w-auto"
													src="/logo.png"
													alt=""
												/>
												<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Changement du mot de passe</h2>
												<h4 className="text-center pt-2">Merci de renseigner la clé reçu par mail et votre nouveau mot de passe</h4>
											</div>
											<h2 className="mt-6 mb-6 text-center text-red-600"> {erreur} </h2>
											<FormControl fullWidth variant="standard">
											<InputLabel htmlFor="standard-adornment-key">Key</InputLabel>
												<Input
													id="standard-adornment-email"
													type="key"
													name="key"
													{...register("key", { required: true })}
												/>
												{
													errors.key?.type === 'required' &&
													<FormError text="Le champ 'Key' est obligatoire" />
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
													{...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/i})}
												/>
												{
													errors.password?.type === 'required' &&
													<FormError text="Le champ 'Mot de passe' est obligatoire" />
												}
												{
													errors.password?.type === 'pattern' &&
													<FormError text="Le champ 'Mot de passe' doit contenir au moins 6 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial" />
												}
		
											</FormControl>
											<button
												type="button"
												onClick={() => setChangePage(false)}
												variant="contained"
												className="font-medium text-indigo-600 hover:text-indigo-500 pt-2 "
											>
												Refaire une demande ?
											</button>
											<div className="flex items-center justify-between pt-6 pb-6">
												<ButtonConnexion title="Envoyer" handleClick={postNewPassword} />
											</div>
										</div>
									</div>
								</form>

							</Box>
						</>
					}
				</Modal>
			</div>
		</>
	);
}

export default MotPasseOublie;

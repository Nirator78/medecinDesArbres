import React from "react";
import AuthService from "../../services/auth.service";
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Modal } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ButtonConnexion, FormError, GreenButton } from "../";
import { useForm } from "react-hook-form";
import { useStyles } from "../../utils/style.js";

function Inscription() {
	const { register, handleSubmit, formState: { errors }, reset } = useForm();

	const [showPassword, setShowPassword] = React.useState(false)

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword)
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	const style = useStyles();

	async function postData(data) {
		AuthService.register(data).then(
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
	const handleClose = () => {setOpen(false); reset();	};
	return (

		<>
			
			<div>
		
				<Button
					onClick={handleOpen}
					variant="contained"
					style={style.buttonMenu}
				>
					Inscription
				</Button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					
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
										<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Inscription à Médecins des arbres</h2>
									</div>


									<FormControl fullWidth variant="standard">
										<InputLabel htmlFor="standard-adornment-nom">Nom</InputLabel>
										<Input
											id="standard-adornment-nom"
											type="text"
											name="nom"
											{...register("nom", { required: true })}
										/>
										{
											errors.nom?.type === 'required' &&
											<FormError text="Le champ 'Nom' est obligatoire" />
										}
									</FormControl>
									<FormControl fullWidth variant="standard">
										<InputLabel htmlFor="standard-adornment-prenom">Prénom</InputLabel>
										<Input
											id="standard-adornment-prenom"
											type="prenom"
											name="prenom"
											{...register("prenom", { required: true })}
										/>
										{
											errors.prenom?.type === 'required' &&
											<FormError text="Le champ 'Prénom' est obligatoire" />
										}
									</FormControl>
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
											<FormError text="Le champ 'Email' est obligatoire" />
										}
									</FormControl>
									<FormControl fullWidth variant="standard">
										<InputLabel htmlFor="standard-adornment-password">Mot de passe</InputLabel>
										<Input
											id="standard-adornment-password"
											name="password"
											type={showPassword ? 'text' : 'password'}
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
											{...register("password", { required: true, minLength: 6 })}
										/>
										{
											errors.password?.type === 'required' &&
											<FormError text="Le champ 'Mot de passe' est obligatoire" />
										}
										{
											errors.password?.type === 'minLength' &&
											<FormError text="Le mot de passe doit contenir au moins 6 caractères" />
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
												J'ai lu et j'accepte les termes et conditions
											</label>
										</div>

									</div>
									<div>
										<ButtonConnexion title="S'inscrire" handleClick={postData} />
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

export default Inscription;

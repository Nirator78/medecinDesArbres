import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Paper } from '@mui/material';
import UserService from "../../services/user.service";
import { useForm } from "react-hook-form";
import FormError from '../FormError';
import AuthService from "../../services/auth.service";

export default function FormProfile({ }) {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({ mode: 'onBlur' });
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const userConnected = AuthService.getUser();
            // Si pas d'utilisateur connecter on retourne à l'accueil
            if (userConnected) {
                setUser(userConnected);
                setValue('nom', userConnected.nom)
                setValue('prenom', userConnected.prenom)
                setValue('email', userConnected.email)
                setValue('telephone', userConnected.telephone)
                setValue('adresse', userConnected.adresse)
                setValue('codePostal', userConnected.codePostal)
                setValue('ville', userConnected.ville)
                setValue('pays', userConnected.pays)
                setValue('password', userConnected.password)
            }
            else {
                navigate('/app');
            }
        }
        fetchData();
    }, [])

    const onSubmit = async (data) => {
        Object.assign(data, { id: user.id });
        await UserService.updateUser(data);
    };

    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Paper sx={{ p: 4, mt: 5, ml: 4, mr: 4, mb: 2, borderRadius: 2 }}>
                    <Grid container>
                        <Grid item xs={6} >
                            <label className="text-gray-700 text-md font-bold mb-2" htmlFor="nom">
                                Nom
                            </label>
                            <input
                                name="nom"
                                className="form-control w-full py-2 px-3 text-base text-gray-700 bg-white bg-clip-padding
                                            border border-solid border-gray-300 rounded transition ease-in-out m-0"
                                placeholder="Nom"
                                {...register("nom", { required: true, maxLength: 150 })}
                            />
                            {
                                errors.nom?.type === 'required' &&
                                <FormError text="Le nom est un champs obligatoire" />
                            }

                        </Grid>
                        <Grid item xs={6} pl={1}>
                            <label className="text-gray-700 text-md font-bold mb-2" htmlFor="prenom">
                                Prenom
                            </label>
                            <input
                                name="prenom"
                                className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                            border border-solid border-gray-300 rounded transition ease-in-out m-0"
                                placeholder="Prenom"
                                {...register("prenom", { required: true, maxLength: 150 })}
                            />
                            {
                                errors.prenom?.type === 'required' &&
                                <FormError text="Le prenom est un champs obligatoire" />
                            }
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <label className="text-gray-700 text-md font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                name="email"
                                className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                        border border-solid border-gray-300 rounded transition ease-in-out m-0"
                                placeholder="Email"
                                {...register("email", { required: true, maxLength: 150 })}
                            />
                            {
                                errors.email?.type === 'required' &&
                                <FormError text="L'email est un champs obligatoire" />
                            }
                        </Grid>
                        <Grid item xs={6} pl={1}>
                            <label className="text-gray-700 text-md font-bold mb-2" htmlFor="telephone">
                                Téléphone
                            </label>
                            <input
                                name="telephone"
                                className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                        border border-solid border-gray-300 rounded transition ease-in-out m-0"
                                placeholder="Téléphone"
                                {...register("telephone", { required: true, maxLength: 150 })}
                            />
                            {
                                errors.telephone?.type === 'required' &&
                                <FormError text="Le telephone est un champs obligatoire" />
                            }
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <label className="text-gray-700 text-md font-bold mb-2" htmlFor="adresse">
                                Adresse
                            </label>
                            <input
                                name="adresse"
                                className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                        border border-solid border-gray-300 rounded transition ease-in-out m-0"
                                placeholder="Adresse"
                                {...register("adresse", { required: true, maxLength: 150 })}
                            />
                            {
                                errors.adresse?.type === 'required' &&
                                <FormError text="L'adresse est un champs obligatoire" />
                            }
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4}>
                            <label className="text-gray-700 text-md font-bold mb-2" htmlFor="ville">
                                Ville
                            </label>
                            <input
                                name="ville"
                                className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                            border border-solid border-gray-300 rounded transition ease-in-out m-0"
                                placeholder="Ville"
                                {...register("ville", { required: true, maxLength: 150 })}
                            />
                            {
                                errors.ville?.type === 'required' &&
                                <FormError text="La ville est un champs obligatoire" />
                            }
                        </Grid>
                        <Grid item xs={4} pl={1}>
                            <label className="text-gray-700 text-md font-bold mb-2" htmlFor="codePostal">
                                Code postal
                            </label>
                            <input
                                name="codePostal"
                                className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                        border border-solid border-gray-300 rounded transition ease-in-out m-0"
                                placeholder="Code postal"
                                {...register("codePostal", { required: true, maxLength: 150 })}
                            />
                            {
                                errors.codePostal?.type === 'required' &&
                                <FormError text="Le code postal est un champs obligatoire" />
                            }
                        </Grid>
                        <Grid item xs={4} pl={1}>
                            <label className="text-gray-700 text-md font-bold mb-2" htmlFor="pays">
                                Pays
                            </label>
                            <input
                                name="pays"
                                className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                        border border-solid border-gray-300 rounded transition ease-in-out m-0"
                                placeholder="Pays"
                                {...register("pays", { required: true, maxLength: 150 })}
                            />
                            {
                                errors.pays?.type === 'required' &&
                                <FormError text="Le pays est un champs obligatoire" />
                            }
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <label className="text-gray-700 text-md font-bold mb-2" htmlFor="password">
                                Mot de passe
                            </label>
                            <input
                                name="password"
                                className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                        border border-solid border-gray-300 rounded transition ease-in-out m-0"
                                placeholder="Mot de passe"
                                {...register("password", { required: true, maxLength: 150 })}
                            />
                            {
                                errors.password?.type === 'required' &&
                                <FormError text="Le mot de passe est un champs obligatoire" />
                            }
                        </Grid>
                    </Grid>
                    <Grid pt={1} align="center">
                        <Button type="submit" style={{ backgroundColor: '#3e993f' }} variant="contained">Sauvegarder</Button>
                    </Grid>
                </Paper>
            </form>
        </>
    )
}
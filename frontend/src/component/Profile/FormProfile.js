import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Paper, Typography } from '@mui/material';
import UserService from "../../services/user.service";
import { useForm } from "react-hook-form";
import FormError from '../FormError';
import AuthService from "../../services/auth.service";
import { useStyles } from "../../utils/style.js";

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
                navigate('/');
            }
        }
        fetchData();
    }, [])

    const onSubmit = async (data) => {
        Object.assign(data, { id: user.id });
        await UserService.updateUser(data);
    };
    const style = useStyles();

    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}>

                    <Typography align="center" variant="h5" gutterBottom component="div">
                        Mes informations
                    </Typography>
                    <Grid container>
                        <Grid item xs={6} p={1}>
                            <label className="text-gray-700 text-md font-bold mb-2" htmlFor="nom">
                                Nom
                            </label>
                            <input
                                name="nom"
                                className="form-control w-full py-2 px-3 text-base text-gray-700 bg-white bg-clip-padding
                                            border border-solid border-gray-300 rounded transition ease-in-out m-0"
                                placeholder="Nom"
                                {...register("nom", { required: true })}
                            />
                            {
                                errors.nom?.type === 'required' &&
                                <FormError text="Le nom est un champs obligatoire" />
                            }

                        </Grid>
                        <Grid item xs={6} p={1}>
                            <label className="text-gray-700 text-md font-bold mb-2" htmlFor="prenom">
                                Prenom
                            </label>
                            <input
                                name="prenom"
                                className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                            border border-solid border-gray-300 rounded transition ease-in-out m-0"
                                placeholder="Prenom"
                                {...register("prenom", { required: true })}
                            />
                            {
                                errors.prenom?.type === 'required' &&
                                <FormError text="Le prenom est un champs obligatoire" />
                            }
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6} p={1}>
                            <label className="text-gray-700 text-md font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                        border border-solid border-gray-300 rounded transition ease-in-out m-0"
                                placeholder="Email"
                                {...register("email", { required: true, 
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                                    } 
                                })}
                            />
                            {
                                errors.email?.type === 'required' &&
                                <FormError text="L'email est un champs obligatoire" />
                            }
                              {
                                errors.email?.type === 'pattern' &&
                                <FormError text="L'email est invalide" />
                            }
                        </Grid>
                        <Grid item xs={6} p={1}>
                            <label className="text-gray-700 text-md font-bold mb-2" htmlFor="telephone">
                                Téléphone
                            </label>
                            <input
                                name="telephone"
                                className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                        border border-solid border-gray-300 rounded transition ease-in-out m-0"
                                placeholder="Téléphone"
                                {...register("telephone", { required: true,
                                    pattern: {
                                        value: /^[0-9]{10}$/i
                            
                                    }
                                })}
                            />
                            {
                                errors.telephone?.type === 'required' &&
                                <FormError text="Le telephone est un champs obligatoire" />
                            }
                            {
                                errors.telephone?.type === 'pattern' &&
                                <FormError text="Le telephone est invalide" />
                            }
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} p={1}>
                            <label className="text-gray-700 text-md font-bold mb-2" htmlFor="adresse">
                                Adresse
                            </label>
                            <input
                                name="adresse"
                                className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                        border border-solid border-gray-300 rounded transition ease-in-out m-0"
                                placeholder="Adresse"
                                {...register("adresse", { required: true })}
                            />
                            {
                                errors.adresse?.type === 'required' &&
                                <FormError text="L'adresse est un champs obligatoire" />
                            }
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4} p={1}>
                            <label className="text-gray-700 text-md font-bold mb-2" htmlFor="ville">
                                Ville
                            </label>
                            <input
                                name="ville"
                                className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                            border border-solid border-gray-300 rounded transition ease-in-out m-0"
                                placeholder="Ville"
                                {...register("ville", { required: true })}
                            />
                            {
                                errors.ville?.type === 'required' &&
                                <FormError text="La ville est un champs obligatoire" />
                            }
                        </Grid>
                        <Grid item xs={4} p={1}>
                            <label className="text-gray-700 text-md font-bold mb-2" htmlFor="codePostal">
                                Code postal
                            </label>
                            <input
                                name="codePostal"
                                className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                        border border-solid border-gray-300 rounded transition ease-in-out m-0"
                                placeholder="Code postal"
                                {...register("codePostal", { required: true
                                    , pattern: {
                                        value: /^[0-9]{5}$/i
                                    }
                                })}
                            />
                            {
                                errors.codePostal?.type === 'required' &&
                                <FormError text="Le code postal est un champs obligatoire" />
                            }
                            {
                                errors.codePostal?.type === 'pattern' &&
                                <FormError text="Le code postal est invalide" />
                            }
                        </Grid>
                        <Grid item xs={4} p={1}>
                            <label className="text-gray-700 text-md font-bold mb-2" htmlFor="pays">
                                Pays
                            </label>
                            <input
                                name="pays"
                                className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                        border border-solid border-gray-300 rounded transition ease-in-out m-0"
                                placeholder="Pays"
                                {...register("pays", { required: true })}
                            />
                            {
                                errors.pays?.type === 'required' &&
                                <FormError text="Le pays est un champs obligatoire" />
                            }
                        </Grid>
                    </Grid>
                    <Grid pt={1} align="center">
                        <Button type="submit" style={style._defaultBgColor} variant="contained">Sauvegarder</Button>
                    </Grid>

            </form>
        </>
    )
}
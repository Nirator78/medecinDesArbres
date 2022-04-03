import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Typography,  Box } from '@mui/material';
import UserService from "../services/user.service";
import { useForm } from "react-hook-form";
import FormError from '../component/FormError';
import AuthService from "../services/auth.service";

export default function FormProfile({}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(async () => {
        const userConnected = AuthService.getUser();
        // Si pas d'utilisateur connecter on retourne à l'accueil
        if(userConnected){
            setUser(userConnected);
        }
        else {
            navigate('/app');
        }
    }, [])

    const onSubmit = async (data) => {
        Object.assign(data, {id: user.id});
        const newParcoursEcolo = await UserService.updateUser(data);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="text-gray-700 text-md font-bold mb-2" htmlFor="nom">
                    Nom
                </label>
                <input
                    name="nom"
                    className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                    border border-solid border-gray-300 rounded transition ease-in-out m-0"
                    placeholder="Nom"
                    defaultValue={user.nom ? user.nom : null}
                    {...register("nom", { required: true, maxLength: 150 })}
                />
                {
                    errors.nom?.type === 'required' &&
                    <FormError text="Le nom est un champs obligatoire"/>
                }
                <br></br>
                <label className="text-gray-700 text-md font-bold mb-2" htmlFor="prenom">
                    Prenom
                </label>
                <input
                    name="prenom"
                    className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                    border border-solid border-gray-300 rounded transition ease-in-out m-0"
                    placeholder="Prenom"
                    defaultValue={user.prenom ? user.prenom : null}
                    {...register("prenom", { required: true, maxLength: 150 })}
                />
                {
                    errors.prenom?.type === 'required' &&
                    <FormError text="Le prenom est un champs obligatoire"/>
                }
                <br></br>
                <label className="text-gray-700 text-md font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    name="email"
                    className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                    border border-solid border-gray-300 rounded transition ease-in-out m-0"
                    placeholder="Email"
                    defaultValue={user.email ? user.email : null}
                    {...register("email", { required: true, maxLength: 150 })}
                />
                {
                    errors.email?.type === 'required' &&
                    <FormError text="L'email est un champs obligatoire"/>
                }
                <br></br>
                <label className="text-gray-700 text-md font-bold mb-2" htmlFor="telephone">
                    Téléphone
                </label>
                <input
                    name="telephone"
                    className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                    border border-solid border-gray-300 rounded transition ease-in-out m-0"
                    placeholder="Téléphone"
                    defaultValue={user.telephone ? user.telephone : null}
                    {...register("telephone", { required: true, maxLength: 150 })}
                />
                {
                    errors.telephone?.type === 'required' &&
                    <FormError text="Le telephone est un champs obligatoire"/>
                }
                <br></br>
                <label className="text-gray-700 text-md font-bold mb-2" htmlFor="adresse">
                    Adresse
                </label>
                <input
                    name="adresse"
                    className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                    border border-solid border-gray-300 rounded transition ease-in-out m-0"
                    placeholder="Adresse"
                    defaultValue={user.adresse ? user.adresse : null}
                    {...register("adresse", { required: true, maxLength: 150 })}
                />
                {
                    errors.adresse?.type === 'required' &&
                    <FormError text="L'adresse est un champs obligatoire"/>
                }
                <br></br>
                <label className="text-gray-700 text-md font-bold mb-2" htmlFor="ville">
                    Ville
                </label>
                <input
                    name="ville"
                    className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                    border border-solid border-gray-300 rounded transition ease-in-out m-0"
                    placeholder="Ville"
                    defaultValue={user.ville ? user.ville : null}
                    {...register("ville", { required: true, maxLength: 150 })}
                />
                {
                    errors.ville?.type === 'required' &&
                    <FormError text="La ville est un champs obligatoire"/>
                }
                <br></br>
                <label className="text-gray-700 text-md font-bold mb-2" htmlFor="codePostal">
                    Code postal
                </label>
                <input
                    name="codePostal"
                    className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                    border border-solid border-gray-300 rounded transition ease-in-out m-0"
                    placeholder="Code postal"
                    defaultValue={user.codePostal ? user.codePostal : null}
                    {...register("codePostal", { required: true, maxLength: 150 })}
                />
                {
                    errors.codePostal?.type === 'required' &&
                    <FormError text="Le code postal est un champs obligatoire"/>
                }
                <br></br>
                <label className="text-gray-700 text-md font-bold mb-2" htmlFor="pays">
                    Pays
                </label>
                <input
                    name="pays"
                    className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                    border border-solid border-gray-300 rounded transition ease-in-out m-0"
                    placeholder="Pays"
                    defaultValue={user.pays ? user.pays : null}
                    {...register("pays", { required: true, maxLength: 150 })}
                />
                {
                    errors.pays?.type === 'required' &&
                    <FormError text="Le pays est un champs obligatoire"/>
                }
                <br></br>
                <label className="text-gray-700 text-md font-bold mb-2" htmlFor="password">
                    Mot de passe
                </label>
                <input
                    name="password"
                    className="form-control w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                    border border-solid border-gray-300 rounded transition ease-in-out m-0"
                    placeholder="Mot de passe"
                    defaultValue={user.password ? user.password : null}
                    {...register("password", { required: true, maxLength: 150 })}
                />
                {
                    errors.password?.type === 'required' &&
                    <FormError text="Le mot de passe est un champs obligatoire"/>
                }
                <br></br>
                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit" />
            </form>
        </>
    )
}
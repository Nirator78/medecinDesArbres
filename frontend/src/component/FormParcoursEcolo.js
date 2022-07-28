import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import ParcoursEcoloService from "../services/parcours-ecolo.service";
import { useForm } from "react-hook-form";
import AuthService from "../services/auth.service";
import VilleService from "../services/ville.service";
import { useStyles } from "../utils/style.js";
import { ButtonConnexion, FormError, GreenButton } from "../component";

export default function FormParcoursEcolo({ handleClose, handleRefresh }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [villesList, setVillesList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await VilleService.getAllVilles();
            setVillesList(response);
        }
        fetchData();
    }, [])

    const onSubmit = async (data) => {
        const user = AuthService.getUser();
        const image = data.image ? data.image[0] : null;
        delete data.image;
        data.nbSac = Number(data.nbSac);
        Object.assign(data, { user: user.id });
        const newParcoursEcolo = await ParcoursEcoloService.createParcoursEcolo(data);

        ParcoursEcoloService.uplaodParcoursEcoloImage(image, newParcoursEcolo.data.id);
        handleClose();
        handleRefresh();
    };
    const style = useStyles();

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <textarea
                    name="description"
                    className="form-control w-full block py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                    border border-solid border-gray-300 rounded transition ease-in-out m-0"
                    placeholder="Description"
                    {...register("description", { required: true,minLength: 5, maxLength: 800 })}
                />
                {
                    errors.description?.type === 'required' &&
                    <FormError text="Le champ 'description' est obligatoire" />
                }
                {
                    errors.description?.type === 'minLength' &&
                    <FormError text="La description doit contenir au moins 5 caractères" />
                }
                {
                    errors.description?.type === 'maxLength' &&
                    <FormError text="La description ne doit pas dépasser les 800 caractères" />
                }

                <br></br>
                <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="nbSac">
                    Nombre de sac ramassés
                </label>
                <input
                    name="nbSac"
                    type="number"
                    className="form-control w-full block shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                    placeholder="Nombre de sac ramassés"
                    {...register("nbSac", { required: true, min: 1 })}
                />
                {
                    errors.nbSac?.type === 'required' &&
                    <FormError text="Le champ 'nombre de sacs' est obligatoire" />
                }
                {
                    errors.nbSac?.type === 'min' &&
                    <FormError text="Le nombre de sacs renseigné doit être supérieur à 0" />
                }
                <br></br>
                <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="nbSac">
                    Ville
                </label>
                <select {...register("ville", {required: true})}>
                    className="form-select appearance-none block w-full py-2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300 rounded transition ease-in-out m-0" defaultValue={''}>
                    <option value={''}>Sélectionnez une ville</option>
                    {
                        villesList?.map((ville, idx) => {
                            return <option key={idx} value={ville.id}>{ville.ville}</option>
                        })
                    }
                </select>
                {
                    errors.ville?.type === 'required' &&
                    <FormError text="Le champ 'ville' est obligatoire" />
                }
                <br></br>
                <br></br>
                <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="image">
                    Image
                </label>
                <input
                    ref={register}
                    name="image"
                    type="file"
                    {...register("image", { required: true })} />
                    {
                        errors.image?.type === 'required' &&
                        <FormError text="Le champ 'image' est obligatoire" />
                    }
                <br></br>
                <br></br>
                <div className="h-56 grid grid-cols-3 gap-4 content-evenly ...">
                    <ButtonConnexion title="Envoyer" />
                </div>
            </form>
        </>
    )
}
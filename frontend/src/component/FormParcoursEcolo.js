import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import ParcoursEcoloService from "../services/parcours-ecolo.service";
import { useForm } from "react-hook-form";
import FormError from '../component/FormError';
import AuthService from "../services/auth.service";
import VilleService from "../services/ville.service";

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
        Object.assign(data, { user: user.id });

        const newParcoursEcolo = await ParcoursEcoloService.createParcoursEcolo(data);

        ParcoursEcoloService.uplaodParcoursEcoloImage(image, newParcoursEcolo.data.id);
        handleClose();
        handleRefresh();
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
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Partager votre parcours écolo !
            </Typography>
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
                        {...register("description", { required: true, maxLength: 150 })}
                    />
                    {
                        errors.description?.type === 'required' &&
                        <FormError text="La description du mail est un champs obligatoire" />
                    }
                    {
                        errors.description?.type === 'maxLength' &&
                        <FormError text="La description du mail ne doit pas dépasser les 150 caractères" />
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
                        {...register("nbSac", { required: true })}
                    />
                    {
                        errors.nbSac?.type === 'required' &&
                        <FormError text="Le nom de sac est un champ obligatoire" />
                    }
                    <br></br>
                    <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="nbSac">
                        Ville
                    </label>
                    <select {...register("ville")}
                        className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300 rounded transition ease-in-out m-0">
                        <option selected>Sélectionné une ville</option>
                        {
                            villesList?.map((ville, idx) => {
                                return <option key={idx} value={ville.id}>{ville.ville}</option>
                            })
                        }
                    </select>
                    <br></br>
                    <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="image">
                        Image
                    </label>
                    <input
                        ref={register}
                        name="image"
                        type="file"
                        {...register("image", { required: true })} />
                    <br></br>
                    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit" />
                </form>
            </>
        </Box>
    )
}
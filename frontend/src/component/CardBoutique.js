import React, { useState } from "react";
import { Button, ButtonGroup, Typography, Dialog } from "@mui/material";
import { ArticleService, AuthService } from "../services";
import { Card, CardActions, CardContent, Chip, Grid } from "@mui/material";
import { useStyles } from "../utils/style.js";
import {baseURLImage} from '../utils/axios';

import DialogContent from '@mui/material/DialogContent';

function CardBoutique({ data }) {
    const [quantity, setQuantity] = useState(0);
    const [open, setOpen] = useState(false);

    const user = AuthService.getUser();

    const handleRemoveArticle = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    const handleAddArticle = () => {
        if (quantity < data.stock) {
            setQuantity(quantity + 1)
        }
    }

    const handleAddToCart = () => {
        ArticleService.addToCart(user.id, data.id, quantity);
        setOpen(false)
        setQuantity(0);
    }

    const handleOpenModal = () => {
        if (quantity > 0) {
            setOpen(true)
        }
    }


    const handleCloseModal = () => {
        setOpen(false)
    }
    const style = useStyles();


    return (
        <>
            <Card style={style.card}>
                <CardContent sx={style.cardContent}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="h6">
                                {data.nom}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" color="textSecondary" >
                                {data.prix}€
                            </Typography>
                        </Grid>
                    </Grid>
                    <div className="flex flex-wrap justify-center">
                        <img
                            src={baseURLImage + data?.image?.url}
                            className="max-w-sm h-32 transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
                            alt={data.nom}
                        />
                    </div>
                    <Chip sx={style.chip} label={data.tag} />
                    <Typography variant="body2" color="textSecondary" component="p" sx={{mt: 2, mb: 2}}>
                        {data.description}
                    </Typography>
                    { user &&
                        <CardActions disableSpacing>
                            <Grid container textAlign='center'>
                                <Grid item xs={12}>
                                    <ButtonGroup variant="contained" color="success" aria-label="button group">
                                        <Button onClick={handleRemoveArticle} sx={style.buttonGroup}>{"-"}</Button>
                                        <Button sx={style.buttonGroup}>{quantity}</Button>
                                        <Button onClick={handleAddArticle} sx={style.buttonGroup}>{"+"}</Button>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item xs={12} mt={1} >
                                    <Button
                                        onClick={handleOpenModal}
                                        variant="contained"
                                        sx={style.button}
                                    >Ajouter au panier</Button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    }
                    {
                        !user &&
                        <Grid item xs={12} mt={1}>
                            <Button sx={style.button} variant="contained">
                                Il faut vous connecter ou vous inscrire pour ajouter un article au panier
                            </Button>
                        </Grid>
                    }
                </CardContent>

            </Card>

            <Dialog
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-confirm"
            >
            <DialogContent>


                        <Typography variant="h6" sx={{pb: 2}}>
                            Êtes vous sur de vouloir ajouter {quantity} {data.nom}{quantity > 1 ? "s" : ""} à votre panier ?
                        </Typography>
                        <Grid container spacing={{ xs: 2, md: 3, pl: 2 }} columns={{ xs: 6, sm: 12 }}>
                            <Grid item xs={6} sx={{textAlign: 'center'}}>
                                <Button sx={style.buttonDanger} onClick={handleCloseModal} variant="contained">Annuler</Button>
                            </Grid>
                             <Grid item xs={6} sx={{textAlign: 'center'}}>
                                <Button sx={style.button} onClick={handleAddToCart} variant="contained" color="success">Valider</Button>
                            </Grid>
                        </Grid>

                </DialogContent>
            </Dialog>
        </>
    )
}

export default CardBoutique;

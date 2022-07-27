import React, { useState } from "react";
import { Box, Button, ButtonGroup, Modal, Paper, Typography } from "@mui/material";
import { ArticleService, AuthService } from "../services";
import { Card, CardActions, CardContent, Chip, Grid } from "@mui/material";
import { green } from "@mui/material/colors";
import { GreenButton } from '../component';
import { useStyles } from "../utils/style.js";

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
                            src={"http://localhost:3000/" + data?.image?.url}
                            className="max-w-sm h-32 transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
                            alt={data.nom}
                        />
                    </div>
                    <Chip sx={style.chip} label={data.tag} />
                    <Typography variant="body2" color="textSecondary" component="p" sx={{mt: 2, mb: 2}}>
                        {data.description}
                    </Typography>
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
                </CardContent>

            </Card>

            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-confirm"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: 24,
                }}>
                    <Paper sx={{ p: 4 }}>
                        <Typography variant="h6">
                            Etes vous sur de vouloir ajouter {quantity} {data.nom}{quantity > 1 ? "s" : ""} a votre panier ?
                        </Typography>
                        <Button onClick={handleCloseModal} variant="contained" color="error">Cancel</Button>
                        <Button onClick={handleAddToCart} variant="contained" color="success">Confirm</Button>
                    </Paper>
                </Box>
            </Modal>
        </>
    )
}

export default CardBoutique;

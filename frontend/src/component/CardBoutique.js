import React, { useState } from "react";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ArticleService from "../services/article.service";
import AuthService from "../services/auth.service";
import { Card, CardActions, CardContent, Chip, Grid } from "@mui/material";
import { green } from "@mui/material/colors";

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
    }

    const handleOpenModal = () => {
        if (quantity > 0) {
            setOpen(true)
        }
    }
    

    const handleCloseModal = () => {
        setOpen(false)
    }


    return (
        <>
            <Card >
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
                            {data.prix }00000€ 
                        </Typography>
                    </Grid>
                </Grid>
                <div className="flex flex-wrap justify-center">
                <img
                    src={"http://localhost:3000/" + data.image.url}
                    className="max-w-sm h-32 transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
                    alt={data.nom}
                />
                </div>
                <CardContent>
                    <Chip sx={{ backgroundColor: green[700] }} label={data.tag}/>
                    <Typography variant="body2" color="textSecondary" component="p" mt={2}>
                    {data.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Grid container textAlign='center'>
                        <Grid item xs={12}>
                            <ButtonGroup variant="contained" color="success" aria-label="button group" style={{marginright:2}}>
                                <Button onClick={handleRemoveArticle} >{"-"}</Button>
                                <Button>{quantity}</Button>
                                <Button onClick={handleAddArticle}>{"+"}</Button>
                            </ButtonGroup>
                        </Grid>
                        <Grid item xs={12} style={{marginLeft:6, marginTop:2}} > 
                            <Button 
                                onClick={handleOpenModal}
                                variant="contained"
                                color="success"

                            >Ajouter au panier</Button>
                        </Grid>
                    </Grid>
                </CardActions>
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

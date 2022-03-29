import React, { useState } from "react";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ArticleService from "../services/article.service";
import AuthService from "../services/auth.service";

function CardBoutique({ data }) {
    const [quantity, setQuantity] = useState(0);
    const [open, setOpen] = useState(false);

    const user = AuthService.getUser();

    console.log(user)

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
            <Box sx={{ p: 2, border: 1, borderColor: "green", borderRadius: 4 }}>
                <Typography variant="h6">
                    {data.nom} - {data.prix}€
                </Typography>
                <img
                    src={"http://localhost:3000/" + data.image.url}
                    alt={data.nom}
                    width="200"
                />
                <ButtonGroup variant="contained" color="success" aria-label="button group">
                    <Button onClick={handleRemoveArticle}>{"<"}</Button>
                    <Button>{quantity}</Button>
                    <Button onClick={handleAddArticle}>{">"}</Button>
                </ButtonGroup>
                <Button
                    onClick={handleOpenModal}
                    variant="contained"
                    color="success"
                >Ajouter au panier</Button>
            </Box>
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

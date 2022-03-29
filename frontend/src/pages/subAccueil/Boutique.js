import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import CardBoutique from '../../component/CardBoutique';
import GreenButton from '../../component/GreenButton';
import { useNavigate } from 'react-router-dom';

export default function Boutique(props) {
    const navigate = useNavigate()
    const data = [
        { id: 0, name: "test", img: "logo.png" },
        { id: 1, name: "azertéarearf", img: "logo.png" },
        { id: 2, name: "ezrafdscxw", img: "logo.png" },
        { id: 3, name: "b ezgesdfcdaze", img: "logo.png" },
        { id: 4, name: "iuyjntbhtrfdsvrezg", img: "logo.png" },
        { id: 5, name: "oliukyjthregfds", img: "logo.png" },
    ];

    const handleClick = () => {
        navigate("/app/boutique")
    }

    return (
        <Paper elevation={3} sx={{ p: 4, ml: 4, mr: 4, mb: 2, borderRadius: 7 }}>
            <Typography variant="h6">
                La boutique
            </Typography>
            <Typography>
                Nos produits éco-responsables vous seront utiles au quotidien pour contribuer à la protection de l'environnement
            </Typography>
            <Grid container spacing={5} alignItems="center" justifyContent="center">
                {
                    data.map((item) => {
                        return (
                            <Grid item xs={4}>
                                <CardBoutique data={item} />
                            </Grid>
                        )
                    })
                }
                <Grid item xs={12}>
                    <GreenButton title="Accédé a tous nos produits" handleClick={handleClick} />
                </Grid>
            </Grid>
        </Paper>
    )
}

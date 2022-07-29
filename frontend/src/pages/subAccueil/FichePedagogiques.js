import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { Paper, Typography, Grid } from '@mui/material';
import { GreenButton, OrangeButton } from '../../component';
import FichePedagogiqueService from "../../services/fiche-pedagogique.service";
import { useStyles } from "../../utils/style.js";

export default function FichePedagogiques(props) {
    const [fichePedagogiqueList, setFichePedagogiqueList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const response = await FichePedagogiqueService.getAllFichePedagogiques(9);
            setFichePedagogiqueList(response);
        }
        fetchData();
    }, [])

    const handleClick = () => {
        navigate("/fiche-pedagogique");
    }
    const style = useStyles();

    return (
        <Paper elevation={style.containerPaper.elevation} sx={style.containerPaper.sx}>
            <Typography variant="h6" sx={{ pb: 2 }}>
                Fiches pédagogiques
            </Typography>
            <Typography sx={{ pb: 3 }}>
                Informez vous grâce à nos supers fiches pédagogiques, adaptées a tous !
            </Typography>
            <Grid container spacing={2}>
                {fichePedagogiqueList.map((fiche, index) => {
                    return (
                        <Grid item xs={4} key={index}>
                            <GreenButton title={fiche.titre} handleClick={() => navigate(`/fiche-pedagogique/${fiche.id}`)} />
                        </Grid>
                    )
                })}
                <Grid item xs={12} mt={2}>
                    <OrangeButton sx={style.buttonDanger} title="Accéder à toutes nos fiches" handleClick={handleClick} />
                </Grid>
            </Grid>
        </Paper>
    )
}

import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import Cors from '../component/navigation/Cors';

export default function Accueil (props) {
    return (
        <div>
            <Cors>
                <Paper>
                    <div className="font-bold">
                        Accueil
                    </div>
                </Paper>
            </Cors>
        </div>
    )
}
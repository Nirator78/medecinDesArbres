import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import Cors from '../component/navigation/Cors';

export default function ParcoursEcolo (props) {
    return (
        <div>
            <Cors>
                <Paper>
                    <div className="font-bold">
                        <h1>Parcours écolo</h1>
                    </div>
                </Paper>
            </Cors>
        </div>
    )
}
import React from 'react';
import { Paper } from '@mui/material';
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
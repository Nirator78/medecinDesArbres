import React from 'react';
import { Paper } from '@mui/material';
import Cors from '../component/navigation/Cors';

export default function Boutique (props) {
    return (
        <div>
            <Cors>
                <Paper>
                    <div className="font-bold">
                        Boutique
                    </div>
                </Paper>
            </Cors>
        </div>
    )
}
import React from 'react';
import { Paper, Typography } from '@mui/material';
import FormProfile from '../component/FormProfile';

export default function Profile(props) {
    return (
        <>
            <Paper>
                <Typography>
                    Profile
                </Typography>
                <FormProfile />
            </Paper>
        </>
    )
}

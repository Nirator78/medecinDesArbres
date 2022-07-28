import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FormProfile from '../component/Profile/FormProfile';
import CommandeProfileList from '../component/Profile/CommandeProfileList';
import ParcoursEcoloProfileList from '../component/Profile/ParcoursEcoloProfileList';
import { Typography, Box, Paper, styled } from '@mui/material';
import { useStyles } from "../utils/style.js";

const CustomPaper = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        p: 4,
        margin: 0,
        marginTop: 40,
    },
    [theme.breakpoints.up('sm')]: {
        p: 4,
        mt: 5,
        ml: 4,
        mr: 4,
        marginBottom: 0,
        borderRadius: 2,
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
    }
}));

export default function Profile() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const style = useStyles();

    return (
        <>
            <CustomPaper sx={{ p: 4, mt: 5, ml: 4, mr: 4, mb: 2, borderRadius: 2 }}>
                <Typography align="center" variant="h4" gutterBottom component="div">
                    Mon compte
                </Typography>
                <Box sx={{ width: '100%', typography: 'body1', alignItems: 'flex-start' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="" textColor='inherit' TabIndicatorProps={{style: {backgroundColor: '#9bae3e'}}}>
                                <Tab label="Profile" value="1" />
                                <Tab label="Mes parcours écolos" value="2" />
                                <Tab label="Mes commandes" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1" sx={{ paddingLeft: 0, paddingRight: 0}}>
                            <FormProfile />
                        </TabPanel>
                        <TabPanel value="2" sx={{ paddingLeft: 0, paddingRight: 0}}>
                            <ParcoursEcoloProfileList />
                        </TabPanel>
                        <TabPanel value="3" sx={{ paddingLeft: 0, paddingRight: 0}}>
                            <CommandeProfileList />
                        </TabPanel>
                    </TabContext>
                </Box>
            </CustomPaper>
        </>
    );
}
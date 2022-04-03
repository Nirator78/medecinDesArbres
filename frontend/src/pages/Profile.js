import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FormProfile from '../component/Profile/FormProfile';
import CommandeProfileList from '../component/Profile/CommandeProfileList';
import ParcoursEcoloProfileList from '../component/Profile/ParcoursEcoloProfileList';
import { Paper, Typography, Box } from '@mui/material';

export default function Profile() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Paper align="center">
                <Typography variant="h4" gutterBottom component="div">
                    Mon compte
                </Typography>
                <Box sx={{ width: '100%', typography: 'body1',  alignItems: 'flex-start' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Profile" value="1" />
                                <Tab label="Mes parcours écolos" value="2" />
                                <Tab label="Mes commandes" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <FormProfile/>
                        </TabPanel>
                        <TabPanel value="2">
                            <ParcoursEcoloProfileList/>
                        </TabPanel>
                        <TabPanel value="3">
                            <CommandeProfileList/>
                        </TabPanel>
                    </TabContext>
                </Box>
            </Paper>
        </>
    );
}
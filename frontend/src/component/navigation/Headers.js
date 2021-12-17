import { Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Connexion from '../../page/Auth/Connexion';
import Inscription from '../../page/Auth/Inscription';
import AuthService from '../../services/auth.service';
import AccountMenu from './Profile';

let connexion;
let account;
let inscription;
let userLogo;
if (AuthService.getToken()) {
  account = <AccountMenu/>
} else {
  connexion =  <Connexion/>;
  inscription = <Inscription/>
}


export default function Headers () {
    return (
      <div className="block px-4 py-2 rounded-md flex space-x-2 p-4 ">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <img
            className="h-8 w-auto sm:h-10"
            src="logo.png"
            alt=""
            />
          </a>
        </div>
        <div>
            {account}
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', mx: 1 }}>
              {connexion}
              {inscription}
            </Box>
        </div>  
        {userLogo}
      </div>
    )
}
import * as React from 'react';
import { Avatar, Box, Button, Divider, FormControl, IconButton, Input, InputAdornment, InputLabel, Menu, MenuItem, Modal, Tooltip } from "@mui/material";
import Logout from '@mui/icons-material/Logout';
import AuthService from '../../services/auth.service';
import { useNavigate } from "react-router-dom";
import { useStyles } from "../../utils/style.ts";

const PaperProps = {
	elevation: 0,
	sx: {
		overflow: 'visible',
		filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
		mt: 1.5,
		'& .MuiAvatar-root': {
			width: 32,
			height: 32,
			ml: -0.5,
			mr: 1,
		},
		'&:before': {
			content: '""',
			display: 'block',
			position: 'absolute',
			top: 0,
			right: 14,
			width: 10,
			height: 10,
			bgcolor: 'background.paper',
			transform: 'translateY(-50%) rotate(45deg)',
			zIndex: 0,
		},
	}
}

export default function AccountMenu({ user }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const style = useStyles();

	function handleClickLogout(e) {
		AuthService.logout();
	};

	return (
		<>
			<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
				<Tooltip title="Compte">
					<IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
						<Avatar sx={{ width: 32, height: 32 }}>{user.prenom.substr(0, 1)}{user.nom.substr(0, 1)}</Avatar>
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={PaperProps}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<MenuItem onClick={() => navigate('/app/profile')}>
					<Avatar /> Profile
				</MenuItem>
				<Divider />
				<MenuItem onClick={handleClickLogout}>
					<IconButton>
						<Logout fontSize="small" />
					</IconButton>
					Déconnexion
				</MenuItem>
			</Menu>
		</>
	);
}

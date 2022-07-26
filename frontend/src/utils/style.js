import vars from "./vars.js";
export const useStyles = () => {
    return ({
        _defaultColor: {
            color: 'red',
        },
        _defaultBgColor: {
            backgroundColor: vars.color1,
        },
        _defaultBorderColor: {
            borderColor: vars.color1,
        },
        box: {
            position: 'absolute',
        	top: '50%',
        	left: '50%',
        	transform: 'translate(-50%, -50%)',
        	width: 500,
        	bgcolor: 'background.paper',
        	borderRadius: 5 + 'px',
        	boxShadow: 24,
        	p: 4,
        },
        buttonMenu: {
            marginRight: 2,
            backgroundColor: vars.color1,
        },
        containerPaper: {
            elevation: 3,
            sx: {
                p: 4,
                ml: 4,
                mr: 4,
                mb: 2,
                borderRadius: vars.borderCard
            }
        },
        containerPaperPage: {
            //elevation: 3,
            sx: {
                p: 4,
                mt: 5,
                ml: 4,
                mr: 4,
                mb: 2,
                borderRadius: vars.borderPage
            }
        },
        containerPaperTop: {
            elevation: 3,
            sx: {
                p: 4,
                mt: 5,
                ml: 4,
                mr: 4,
                mb: 2,
                borderRadius: vars.borderCard
            }
        }
    });
};
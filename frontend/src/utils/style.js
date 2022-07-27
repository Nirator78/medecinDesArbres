import vars from "./vars.js";
export const useStyles = () => {
    return ({
        _defaultColor: {
            color: vars.color1,
        },
        _defaultBgColor: {
            backgroundColor: vars.color1,
        },
        _defaultBorderColor: {
            borderColor: vars.color1,
        },
        badge: {
            color: vars.color2,
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
        boxBordered: {
            p: 2,
            border: 1,
            borderColor: vars.color1,
            borderRadius: 4
        },
        button: {
            color: "#fff",
            backgroundColor: vars.color1,
            "&:hover": {
                backgroundColor: vars.color2,
            }
        },
        buttonGroup: {
            color: "#fff",
            borderColor: "white !important",
            backgroundColor: vars.color1,
            "&:hover": {
                backgroundColor: vars.color2,
            },
        },
        buttonMb: {
            marginBottom: 4,
            color: "#fff",
            backgroundColor: vars.color1,
            "&:hover": {
                backgroundColor: vars.color2,
            }
        },
        buttonMenu: {
            marginRight: 2,
            backgroundColor: vars.color1,
        },
        card: {
            borderRadius: vars.borderPage,
        },
        cardContent: {
            p: 3,
        },
        chip: {
            backgroundColor: vars.color1,
            color: "white",
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
//TODO: tutaj style dla light lub dark

import {createTheme} from "@material-ui/core";

export const theme = createTheme({
    shape: {
        borderRadius: 16
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    maxWidth: '1300px !important'
                }
            }
        },
        MuiButton: {
            variants: [
                {
                    props: {variant: 'dashed'},
                    style: {
                        textTransform: 'none',
                        border: `2px dashed purple`,
                    }
                }
            ]
        }
    }
});
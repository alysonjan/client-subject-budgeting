import React from 'react';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';


const theme = createTheme ({
    palette: {
        background: {
            default: "#eeeee;",
        },
        primary: {
            main: "#580606",
        },
        secondary: {
            main: "#0046ae"
        },
        danger: {
            main: "#b14449"
        },
        success: {
            main: "#00ae5d"
        },
    },
})

const Theme = (props) => {
    const { children } = props;
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};


export const withTheme = (Component) => {
    return (props) => {
        return (
            <Theme>
                <Component {...props} />
            </Theme>
        );
    };
};


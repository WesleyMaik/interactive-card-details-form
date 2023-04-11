import { extendTheme, Theme } from "@chakra-ui/react";

const config: Theme['config'] = {
    initialColorMode: "light",
    useSystemColorMode: false
};

const breakpoints: Theme['breakpoints'] = {
    sm: '768px',
    md: '1200px',
    lg: '1440px',
    xl: '1536px',
    '2xl': '3072px',
    base: "lg"
};

const colors = {
    primary: "#21092F",
    "primary-hover": "#461761"
};

export const theme = extendTheme({
    breakpoints,
    config,
    colors
});

import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
    "fontFamily": {
        display: 'IBM Plex Sans, sans-serif',
        body: 'IBM Plex Sans, sans-serif',
    },
    typography: {
        h1: {
            fontWeight: '700',
            letterSpacing: 0.9,
            // textTransform: 'uppercase'
        },
        h2: {
            fontWeight: '700',
            letterSpacing: 0.9,
            // textTransform: 'uppercase'
        },
        h3: {
            fontWeight: '700',
            letterSpacing: 0.9,
            // textTransform: 'uppercase'
        },
        h4: {
            fontWeight: '700',
            letterSpacing: 0.9,
            // textTransform: 'uppercase'
        },
    },
    // "colorSchemes": {
    //     "light": {
    //         "palette": {
    //             "primary": {
    //                 "50": "#e8f4e9",
    //                 "100": "#c9e4c9",
    //                 "200": "#a7d3a7",
    //                 "300": "#85c385",
    //                 "400": "#6cb66b",
    //                 "500": "#55aa52",
    //                 "600": "#4c9b49",
    //                 "700": "#41893f",
    //                 "800": "#377835",
    //                 "900": "#265924"
    //             }
    //         }
    //     },
    //     "dark": {
    //         "palette": {
    //             "primary": {
    //                 "50": "#e8f4e9",
    //                 "100": "#c9e4c9",
    //                 "200": "#a7d3a7",
    //                 "300": "#85c385",
    //                 "400": "#6cb66b",
    //                 "500": "#55aa52",
    //                 "600": "#4c9b49",
    //                 "700": "#41893f",
    //                 "800": "#377835",
    //                 "900": "#265924"
    //             }
    //         }
    //     }
    // }
})

export default theme;
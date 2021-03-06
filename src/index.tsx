import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './redux/app/store';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {CssBaseline} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {BrowserRouter as Router} from 'react-router-dom'

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }

    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

const theme = createTheme({
    typography: {
        fontFamily: [
            'Inter',
            'Roboto',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    palette: {
        background: {
            default: "#222222"
        },
        text: {
            primary: "#fff"
        },
        primary:
            {
                main: '#222222'
            },
        secondary: {
            main: '#b2dfdb',
        },

    },
});

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <Router>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
        </Provider>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

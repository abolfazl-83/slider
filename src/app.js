import React from 'react';
import ReactDOM from "react-dom";
import {ThemeProvider} from 'styled-components';
import AppRouter from './routers/AppRouter';
import theme from './components/theme';
import 'normalize.css/normalize.css';
import './styles/styles.css';

const jsx = (
    <ThemeProvider theme = {theme}>
        <AppRouter />
    </ThemeProvider>
);

ReactDOM.render(jsx,document.getElementById('app'));

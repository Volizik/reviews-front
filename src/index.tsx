import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import App from './App';
import {CustomTheme} from './theme'
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <ThemeProvider theme={CustomTheme}>
        <Router>
            <App/>
        </Router>
    </ThemeProvider>,
    document.getElementById('root')
);

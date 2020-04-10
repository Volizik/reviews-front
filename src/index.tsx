import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import App from './App';
import {CustomTheme} from './theme'
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from "react-redux";
import {configureStore} from "./store";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={CustomTheme}>
            <Router>
                <App/>
            </Router>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);

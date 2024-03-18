import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import {HeadBar} from "./component/headBar.tsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ChakraProvider>
            <HeadBar/>
            <div style={{marginTop: "80px"}}>
                <App />
            </div>
        </ChakraProvider>
    </BrowserRouter>
);

reportWebVitals();

import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import Loader from "./components/Loader";
import store from "./helpers/store";
import {BrowserRouter} from "react-router-dom";

const Root: React.FC = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <Provider store={store}>
                <React.StrictMode>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </React.StrictMode>
            </Provider>
        </Suspense>
    )
};

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

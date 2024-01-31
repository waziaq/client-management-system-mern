import { Routes, Store } from './config';
import {ToastContainer} from "react-toastify";
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import BackdropLoading from "./components/BackdropLoading";

function App() {

    return (
        <>
            <BrowserRouter>
                <Provider store={Store}>
                    <Suspense fallback={<BackdropLoading />}>
                        <Routes />
                        <ToastContainer position="top-right" />
                    </Suspense>
                </Provider>
            </BrowserRouter>
        </>
    )

}

export default App;

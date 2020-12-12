import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import {store} from "./store/configureStore";
import ReactFooter from "./components/footer";
import Header from "./containers/header/header";

function App() {
    return (
            <Provider store={store}>
                <Header/>
                <ReactFooter />
            </Provider>
    );
}

export default App;


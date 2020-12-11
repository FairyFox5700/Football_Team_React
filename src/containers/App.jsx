import React from 'react';
import './App.css';
import { store } from "../store/configureStore";
import { Provider } from "react-redux";
import Header from "./header/header";
import ReactFooter from "../components/footer";

function App() {
    return (
            <Provider store={store}>
                <Header/>
                <ReactFooter />
            </Provider>
    );
}
export default App;


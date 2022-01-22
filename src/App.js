import logo from './logo.svg';
import './App.css';
import {GlobalStyle} from "./styles/globalStyle";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import styled from "styled-components";

function App() {
    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <Main/>
        </>
    );
}

export default App;


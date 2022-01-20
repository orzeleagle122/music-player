import logo from './logo.svg';
import './App.css';
import {GlobalStyle} from "./styles/globalStyle";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

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

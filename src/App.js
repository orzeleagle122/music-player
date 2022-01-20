import logo from './logo.svg';
import './App.css';
import {GlobalStyle} from "./styles/globalStyle";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import {ThemeProvider} from "@mui/system";
import {theme} from "./styles/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Navbar/>
            <Main/>
        </ThemeProvider>
    );
}

export default App;

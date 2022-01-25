import './App.css';
import { GlobalStyle } from './styles/globalStyle';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { darkTheme, lightTheme } from './styles/theme';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import { AlertTemplate } from './components/AlertTemplate';

const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 2000,
    offset: '10px',
    transition: transitions.SCALE,
};

function App() {
    const [theme, setTheme] = useState('light');

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
        theme === 'light'
            ? localStorage.setItem('theme', 'dark')
            : localStorage.setItem('theme', 'light');
    };

    useEffect(() => {
        const pageTheme = localStorage.getItem('theme');
        if (pageTheme === 'light' || pageTheme === 'dark') setTheme(pageTheme);
    }, []);

    return (
        <>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyle />
                <Navbar theme={theme} themeToggler={themeToggler} />
                <AlertProvider template={AlertTemplate} {...options}>
                    <Main />
                </AlertProvider>
            </ThemeProvider>
        </>
    );
}

export default App;

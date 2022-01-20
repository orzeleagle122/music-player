import React from 'react';
import styled from 'styled-components';
import UseSwitchesCustom from "./Switcher";
import {makeStyles} from "@material-ui/core";
import clsx from "clsx";
import {Container} from "@mui/material";

const useStyles = makeStyles({
    logo: {
        '@media (max-width: 500px)': {
            marginLeft: 10
        }
    },
    asd: {
        backgroundColor: "red"
    }
})

const Navbar = () => {
    const classes = useStyles();

    return (
        <NavbarWrapper>
            <Container>
                <NavbarContainer>
                    <img className={clsx(classes.logo, classes.asd)}
                         src={`https://www.pgs-soft.com/app/themes/pgstemplate/img/new_img/logos/pgs-logo-dark.png`}
                         alt={`logo`}/>
                    <UseSwitchesCustom/>
                </NavbarContainer>
            </Container>
        </NavbarWrapper>
    );
};

export default Navbar;

const NavbarWrapper = styled.nav`
  height: 85px;
  width: 100%;
  background-color: #FF7626;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
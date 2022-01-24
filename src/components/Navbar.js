import React from 'react';
import styled from 'styled-components';
import UseSwitchesCustom from "./Switcher";
import FlashlightOnIcon from '@mui/icons-material/FlashlightOn';
import FlashlightOffIcon from '@mui/icons-material/FlashlightOff';

const Navbar = ({theme,themeToggler}) => {
    return (
        <NavbarWrapper>
            <Container>
                {/*<img src={`https://www.pgs-soft.com/app/themes/pgstemplate/img/new_img/logos/pgs-logo-dark.png`}*/}
                {/*     alt={`logo`}/>*/}
                <Wrapper onClick={themeToggler}>
                {theme==='light'?<FlashlightOffIcon/>:<FlashlightOnIcon/>}
                </Wrapper>
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

const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: inherit;
  
  img {
    background-color: inherit;
  }
  
  @media screen and (max-width: 1300px){
    padding: 0 25px 0 25px;
  }
  
`;

const Wrapper=styled.div`
  background-color: inherit;
  button{
    background-color: inherit;
  }
`;
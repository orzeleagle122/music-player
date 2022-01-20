import React from 'react';
import styled from 'styled-components';
import UseSwitchesCustom from "./Switcher";

const Navbar = () => {
    return (
        <NavbarWrapper>
            <Container>
                <img src={`https://www.pgs-soft.com/app/themes/pgstemplate/img/new_img/logos/pgs-logo-dark.png`}
                     alt={`logo`}/>
                <UseSwitchesCustom/>
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
`;
import React from 'react'
import styled from 'styled-components'
import Img from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const NavbarContainer = styled.div `
  width: 100%;
  height: 80px;
  z-index: 20;
  background: #fff;
`;

const NavbarWrap = styled.div `
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  z-index: 20;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div `
  width: 128px;
  height: 22px;
  background: url(${Img}) 0 45% no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
`;

const Nav = styled.nav `
  flex: 1;
  position: relative;
  padding-left: 50px;
`;

const NavLink = styled.(Link) ``;
const Search = styled.div ``;
const SearchWrap = styled.div ``;
const Input = styled.input ``;
const ButtonContainer = styled.div ``;
const Button = styled.div ``;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrap>
        <Logo />
        <Nav>
          <NavLink to='/'>HOME</NavLink>
          <NavLink to='/'>MARKET</NavLink>
          <NavLink to='/'>TRADE</NavLink>
          <NavLink to='/'>PRICING</NavLink>
          <NavLink to='/'>DOWNLOAD</NavLink>
          <NavLink to='/'>HELP</NavLink>
        </Nav>
        <Search>
          <SearchWrap>
            <Input type='text' placeholder='Symbol/Name' />
          </SearchWrap>
        </Search>
        <ButtonContainer>
          <Button>SIGN UP</Button>
          <Button>LOG IN</Button>
        </ButtonContainer>
      </NavbarWrap>
    </NavbarContainer>
  );
};

export default Navbar

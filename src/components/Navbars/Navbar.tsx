import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import HamburgerIcon from '../../assets/shared/icon-hamburger.svg';
import LogoSVG from '../../assets/shared/logo.svg';
import { devices } from '../../MediaQueries';


export const Navbar : React.FC = () => {
  return (
    <Container>
        <Link to="/" ><Logo src={LogoSVG} /></Link>
        <Menu src={HamburgerIcon} />
        <NavItems>
            <NavLink to="/" className={(navData) => (navData.isActive ? 'active' : 'unactive')} ><Item><Number>00</Number> HOME</Item></NavLink>
            <NavLink to="/destination" className={(navData) => (navData.isActive ? 'active' : 'unactive')} ><Item><Number>01</Number> DESTINATION</Item></NavLink>
            <NavLink to="/crew" className={(navData) => (navData.isActive ? 'active' : 'unactive')} ><Item><Number>02</Number> CREW</Item></NavLink>
            <NavLink to="/technology" className={(navData) => (navData.isActive ? 'active' : 'unactive')} ><Item><Number>03</Number> TECHNOLOGY</Item></NavLink>
        </NavItems>
    </Container>
  )
}

const Logo = styled.img``

const Menu = styled.img`
  display: none;
`


const Item = styled.li`
  color: inherit;
`

const Number = styled.span`
  font-weight: 700;
`

const NavItems = styled.ul`
    display: flex;
    font-family: "Barlow Condensed";
    font-weight: 400;
    list-style: none;
    align-items: center;
    gap: 5em;
    position: relative;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
    padding: 0em 7em;
    height: 10vh;
    left: 15%;
    width: 62vw;
    color: white;
    
    a {
      color: white;
      text-decoration: none;
      height: 100%;
      display: flex;
      align-items: center;
      
    }

    .active {
      color: white;
      border-bottom: 2px solid white;
      margin-bottom: 0px;
    } 

    .unactive {
      transition: opacity 200ms ease;
      margin-bottom: 2px; 
      &:hover {
        cursor: pointer;
        margin-bottom: 0px;
        border-bottom: 2px solid #d0d6f9b3;
      }
    }
`

const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 8em 0em 3em;
    letter-spacing: 2px;

    @media only screen and (max-width: ${devices.Tablet}) {
      padding: 0em 3em;
      ${NavItems} {
        padding: 0em 3em;
        gap: 2.5em;
        margin: 0px;
        left: 10%;
      }
      ${Number} {
        display: none;
      }
    }

    @media only screen and (max-width: ${devices.Phone}) {
      padding: 1.6em 2em 0em 2em;
      ${Menu} {
        display: block;
      }
      ${NavItems} {
        display: none;
      }
    }
`
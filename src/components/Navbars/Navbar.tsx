import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import closeIcon from '../../assets/shared/icon-close.svg';
import HamburgerIcon from '../../assets/shared/icon-hamburger.svg';
import LogoSVG from '../../assets/shared/logo.svg';
import { devices } from '../../MediaQueries';


export const Navbar : React.FC = () => {

  const [navMenuStatus,setNavMenuStatus] = useState<boolean>(false)

  const toggleDrawer = (status : boolean) => {
    setNavMenuStatus(status)
  }
  
  return (
    <Container>
        <Link to="/" ><Logo src={LogoSVG} /></Link>
        <Menu onClick={() => toggleDrawer(true)} src={HamburgerIcon} />
        
        <Drawer
          open={navMenuStatus}
          onClick={() => toggleDrawer(false)}
        >
          <CloseMenu onClick={() => toggleDrawer(true)} src={closeIcon} />
          <List>
            <NavLink to="/">
              <ListItem>
                  <ListTextNumber>00</ListTextNumber>
                  <ListText>HOME</ListText>
              </ListItem>
            </NavLink>
            <NavLink to="/destination">
            <ListItem>
                <ListTextNumber>01</ListTextNumber>
                <ListText>DESTINATION</ListText>
            </ListItem>
            </NavLink>
            <NavLink to="/crew">
            <ListItem>
                <ListTextNumber>02</ListTextNumber>
                <ListText>CREW</ListText>
            </ListItem>
            </NavLink>
            <NavLink to="/technology">
            <ListItem>
                <ListTextNumber>03</ListTextNumber>
                <ListText>TECHNOLOGY</ListText>
            </ListItem>
            </NavLink>
          </List>
        </Drawer>
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

const CloseMenu = styled.img`
  width: 20px;
`

const ListTextNumber = styled.span`
  margin-right: 0.5em;
  font-weight: 700;
`

const ListText = styled.span``

const ListItem = styled.li`
`

const List = styled.ul`
  padding: 0px;
  margin: 0px;
  gap: 2em;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  height: 50%;
  font-family: "Barlow Condensed";
  a {
    color: inherit;
    text-decoration: none;
  }
`

const Drawer = styled.div<{open: boolean}>`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(30.5485px);
  color: rgb(255, 255, 255);
  transition: 225ms ease;
  box-shadow: rgb(0 0 0 / 20%) 0px 8px 10px -5px, rgb(0 0 0 / 14%) 0px 16px 24px 2px, rgb(0 0 0 / 12%) 0px 6px 30px 5px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15));
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 0 auto;
  z-index: 1200;
  position: fixed;
  top: 0px;
  outline: 0px;
  width: ${props => props.open ? "65%" : "0%"};
  right: 0px;
  align-items: flex-end;
  padding: ${props => props.open ? "1.5em" : "0em"};
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
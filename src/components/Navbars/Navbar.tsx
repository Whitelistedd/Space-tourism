import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import closeIcon from '../../assets/shared/icon-close.svg';
import HamburgerIcon from '../../assets/shared/icon-hamburger.svg';
import LogoSVG from '../../assets/shared/logo.svg';
import { devices } from '../../MediaQueries';
import { NavItems } from '../../data';
import { NavLocation } from '../NavLocation/NavLocation';


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
            {
              NavItems.map((item,index) => 
                <DesktopNavLocation key={item} num={`${index}`} title={item} />  
              )
            }
          </List>
        </Drawer>
        <Nav>
          {
            NavItems.map((item,index) => 
              <DesktopNavLocation key={item} num={`${index}`} title={item} />  
            )
          }
        </Nav>
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

const Number = styled.span`
  font-weight: 700;
`

const DesktopNavLocation = styled(NavLocation)`
  display: flex;
  align-items: center;
  gap: 0.5em;
  .num {
    font-weight: 700;
  }
`


const Nav = styled.ul`
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
  padding: 0em 40em 0em 7em ;
  height: 10vh;
  left: 10%;
  width: 62vw;
  color: white;
  
  a {
    color: inherit;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .active {
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
  padding: 2em 5em 0em 3em;
  letter-spacing: 2px;
  @media only screen and (max-width: ${devices.Laptop}) {
    ${Nav} {
      padding: 0em 50em 0em 2em;
      left: 15%;
    }
  }

  @media only screen and (max-width: ${devices.Tablet}) {
    padding: 0em 3em;
    ${Nav} {
      padding: 0em 50em 0em 2em;
      gap: 2.5em;
      margin: 0px;
      left: 16%;
      font-size: 14px;
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
    ${Nav} {
      display: none;
    }
  }
`
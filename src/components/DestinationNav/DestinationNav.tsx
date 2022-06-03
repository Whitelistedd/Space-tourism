import React from 'react';
import styled from 'styled-components';

interface Props {
  setPlanet: (p: number) => void,
  planet: number
}

export const DestinationNav : React.FC<Props> = ({setPlanet,planet}) => {

  const handleClick = (number: number) => {
    setPlanet(number)
  }

  return (
    <Nav>
        <NavItems>
            <Item onClick={() => handleClick(0)} tabIndex="5" className={planet === 0 ? "active" : "unactive"} >MOON</Item>
            <Item onClick={() => handleClick(1)} tabIndex="6" className={planet === 1 ? "active" : "unactive"} >MARS</Item>
            <Item onClick={() => handleClick(2)} tabIndex="7" className={planet === 2 ? "active" : "unactive"} >EUROPA</Item>
            <Item onClick={() => handleClick(3)} tabIndex="8" className={planet === 3 ? "active" : "unactive"} >TITAN</Item>
        </NavItems>
    </Nav>
  )
}

const Item = styled.li.attrs((props : {tabIndex : string}) => ({ tabIndex: props.tabIndex }))`
  transition: opacity 200ms ease;
  margin-bottom: 2px;
  color: inherit;
  color: #D0D6F9;

  &:hover {
    cursor: pointer;
    margin-bottom: 0px;
    border-bottom: 2px solid #D0D6F9;
  }
`

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  font-size: 1.5em;
  font-family: "Barlow Condensed";
  gap: 40px;
  padding: 0px;

  .active {
    color: white;
    margin-bottom: 0px;
    border-bottom: 2px solid white;
   }
`

const Nav = styled.nav`
`

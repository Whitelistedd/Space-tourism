import React from 'react';
import styled from 'styled-components';
import { devices } from '../../MediaQueries';

interface Props {
    setNavNumber: (p: number) => void,
    navNumber: number
}

export const TechnologyNav : React.FC<Props> = ({setNavNumber,navNumber}) => {

    const handleClick = (number: number) => {
        setNavNumber(number)
    }

  return (
    <Container>
        <Wrap>
            <Option onClick={() => handleClick(0)} className={navNumber === 0 ? "active" : "unactive"}>1</Option>
            <Option onClick={() => handleClick(1)} className={navNumber === 1 ? "active" : "unactive"}>2</Option>
            <Option onClick={() => handleClick(2)}  className={navNumber === 2 ? "active" : "unactive"}>3</Option>
        </Wrap>
    </Container>
  )
}

const Option = styled.li`
    background-color: white;
    width: 90px;
    border: 1px solid white;
    height: 90px;
    border-radius: 50%;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
`

const Wrap = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const Container = styled.nav`
    .unactive {
        opacity: 0.6;
        color: white;
        background-color: transparent;
        transition: 200ms ease;
        &:hover {
            cursor: pointer;
            opacity: 1;
        }
    }

    @media only screen and (max-width: ${devices.Desktop}) {
        ${Option} {
            width: 70px;
            height: 70px;
        }
    }
`

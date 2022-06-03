import React from 'react';
import styled from 'styled-components';

interface Props {
    setNavNumber: (p: number) => void,
    navNumber: number
}

export const CrewNav : React.FC<Props> = ({setNavNumber,navNumber}) => {

    const handleClick = (number: number) => {
        setNavNumber(number)
    }

  return (
    <Container>
        <Wrap>
        <Option onClick={() => handleClick(0)} className={navNumber === 0 ? "active" : "unactive"} />
        <Option onClick={() => handleClick(1)} className={navNumber === 1 ? "active" : "unactive"} />
        <Option onClick={() => handleClick(2)}  className={navNumber === 2 ? "active" : "unactive"} />
        <Option onClick={() => handleClick(3)} className={navNumber === 3 ? "active" : "unactive"} />
        </Wrap>
    </Container>
  )
}

const Option = styled.li`
    background-color: white;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    
`

const Wrap = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    gap: 30px;
`

const Container = styled.nav`
    .unactive {
        opacity: 0.3;
        transition: 200ms ease;
        &:hover {
            cursor: pointer;
            opacity: 0.7;
        }
    }
`

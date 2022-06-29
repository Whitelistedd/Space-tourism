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
            {
                Array(4).fill(8).map((num,index) => 
                    <Option key={index} onClick={() => handleClick(index)} className={navNumber === index ? "active" : "unactive"} />
                )
            }
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

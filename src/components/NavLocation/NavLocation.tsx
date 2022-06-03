import React from 'react';
import styled from 'styled-components';

import { devices } from '../../MediaQueries';

interface Props {
    num: string,
    title: string
}

export const NavLocation : React.FC<Props> = ({num,title}) => {
  return (
    <Container className="NavLocation" >
        <Number>0{num}</Number>
        <Title>{title}</Title>
    </Container>
  )
}


const Title = styled.h1`
    font-weight: 400;
`

const Number = styled.h1`
    opacity: 25%;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 20px;
    letter-spacing: 3px;
    
    @media only screen and (max-width: ${devices.Tablet}) {
        ${Title} {
            font-size: 1.1rem;
        }
        ${Number} {
            font-size: 1.1rem;
        }
    }
`

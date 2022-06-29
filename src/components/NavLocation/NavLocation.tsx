import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { devices } from '../../MediaQueries';

interface Props {
    num: string,
    title: string,
    className?: string
}

export const NavLocation : React.FC<Props> = ({title,num,className}) => {
  return (
    <NavLink className={(navData) => (navData.isActive ? 'active' : 'unactive')} to={`/${title === "HOME" ? "" : title}`} >
        <Container className={className} >
            <Number className='num' >0{num}</Number>
            <Title className='title' >{title}</Title>
        </Container>
    </NavLink>
  )
}


const Title = styled.span`
`

const Number = styled.p`
`

const Container = styled.li`
`

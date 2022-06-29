import React from 'react'
import styled from 'styled-components'
import { devices } from '../../MediaQueries'

interface Props {
    num: string,
    title: string,
    className?: string
}

export const PageLocation : React.FC<Props> = ({num,title,className}) => {
  return (
    <Container className={`${className} PageLocation`} >
        <Number className='num' >0{num}</Number>
        <Title className='title' >{title}</Title>
    </Container>
  )
}


const Title = styled.span`
  font-size: 1.5em;
`

const Number = styled.p`
  font-size: 1.5em;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  letter-spacing: 3px;
  color: white;
  @media only screen and (max-width: ${devices.Laptop}) {
    font-size: 14px;
  }
`
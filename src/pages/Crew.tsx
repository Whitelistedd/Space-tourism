import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import CrewIMG from '../assets/crew/crew.jpg';
import { CrewNav } from '../components/CrewNav/CrewNav';
import { Navbar } from '../components/Navbars/Navbar';
import { NavLocation } from '../components/NavLocation/NavLocation';
import { CrewMembers } from '../data';
import { devices } from '../MediaQueries';

  

export const Crew : React.FC = () => {

    const [navNumber,setNavNumber] = useState<number>(0)

  return (
    <Container>
        <Navbar />
        <Header>
            <About>
                <CrewWrap>
                    <NavLocation num="2" title="MEET YOUR CREW" />
                </CrewWrap>
                <CrewInfo>
                    <Title>COMMANDER</Title>
                    <Strong>{CrewMembers[navNumber].CrewName}</Strong>
                    <Desc>{CrewMembers[navNumber].CrewDesc}</Desc>
                </CrewInfo>
                <CrewNav setNavNumber={setNavNumber} navNumber={navNumber} />
            </About>
            <ImageWrap>
                <Image src={CrewMembers[navNumber].image} />
            </ImageWrap>
            <NavLocation num="2" title="MEET YOUR CREW" />
        </Header>
    </Container>
  )
}

const Desc = styled.p`
  font-size: 1.4rem;
  line-height: 1.5em;
  font-family: "Barlow";
`

const Strong = styled.h2`
    font-weight: 400;
    font-size: 4rem;
    margin: 0.5em 0em;
    opacity: 100%;
    color: white;
`

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  opacity: 50.42%;
  color: white;
`

const About = styled.article`
    width: 40vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 5em;
`

const Image = styled.img`
    min-height: 100%;
`

const ImageWrap = styled.div`
    width: 40vw;
    display: flex;
    align-items: flex-end;
    height: 90%;
`

const CrewWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 20px;
    letter-spacing: 3px;
`

const CrewInfo = styled.div`
    font-family: "Bellefair";
    color: white;
`

const Header = styled.header`
    display: flex;
    color: #D0D6F9;
    height: 85vh;
    width: 100%;
    align-items: flex-end;
    justify-content: space-around;
    font-family: "Barlow Condensed";
`

const Container = styled.div`
  min-height: 100vh;
  color: white;
  overflow: hidden;
  background-color: black;
  background-image: url(${CrewIMG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

    .NavLocation {
        display: none;
    }

  @media only screen and (max-width: ${devices.Tablet}) {
      ${Header} {
        flex-direction: column;
        align-items: center;
        height: 90vh;
      }
      ${About} {
          align-items: center;
          text-align: center;
          width: 90%;
          padding: 0px;
          justify-content: center;
          gap: 1em;
      }
      ${ImageWrap} {
          height: 55%;
          align-items: flex-end;
          justify-content: center;
      }
      ${CrewWrap} {
        align-self: flex-start;
      }
      ${Title} {
          font-size: 1.5rem;
      }
      ${Strong} {
          font-size: 2.5rem
      }
      ${Desc} {
          font-size: 1.1rem;
          color: #D0D6F9;
          width: 60vw;
      }
      ${Image} {
          height: 100%;
      }
  }
  @media only screen and (max-width: ${devices.Phone}) {
      ${Header} {
          flex-direction: column-reverse;
        .NavLocation {
            display: flex;
        }
      }
      ${About} {
        padding-top:50px;
        height: 40%;
        width: 95%;
        flex-direction: column-reverse;

        
        .NavLocation {
            display: none;
        }
      }
      ${ImageWrap} {
          height: 30%;
          margin-bottom: -90px;
      }
      ${Image} {
          height: 110%;
      }
      ${Title} {
          font-size: 1rem;
      }
      ${Desc}{
          font-size: 1rem;
          width: 100%;
      }
      ${Strong} {
          font-size: 1.5rem;
      }
  }
`
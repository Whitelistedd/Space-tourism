import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import CrewIMG from '../assets/crew/crew.jpg';
import { CrewNav } from '../components/CrewNav/CrewNav';
import { Navbar } from '../components/Navbars/Navbar';
import { PageLocation } from '../components/PageLocation/PageLocation';
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
                    <PageLocation num="2" title="MEET YOUR CREW" />
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
            <MobilePageLocation num="2" title="MEET YOUR CREW" />
        </Header>
    </Container>
  )
}

const Desc = styled.p`
  font-size: 1.4em;
  line-height: 1.5em;
  font-family: "Barlow";
`

const Strong = styled.h2`
    font-weight: 400;
    font-size: 4em;
    margin: 0.5em 0em;
    opacity: 100%;
    color: white;
`

const Title = styled.h2`
  font-size: 2.5em;
  font-weight: 400;
  opacity: 50.42%;
  color: white;
`

const About = styled.article`
    width: 800px;
    min-height: 300px;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 5em;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

const ImageWrap = styled.div`
    max-width: 35vw;
    display: flex;
    align-items: flex-end;
    min-height: 400px;
    height: 35vw;
`

const CrewWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 20px;
    letter-spacing: 3px;
    .PageLocation {
        display: flex;
    }
`

const CrewInfo = styled.div`
    font-family: "Bellefair";
    color: white;
`

const MobilePageLocation = styled(PageLocation)`
    display: none;
`

const Header = styled.header`
    display: flex;
    color: #D0D6F9;
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

  @media only screen and (max-width: ${devices.Desktop}) {
    ${About} {
        padding: 3em;
        font-size: 12px;
        width: 600px;
    }
  }

  @media only screen and (max-width: ${devices.Laptop}) {
    ${About} {
        font-size: 8px;
        width: 400px;
    }
    ${ImageWrap} {
        max-width: 400px;
    }
  }

  @media only screen and (max-width: ${devices.Tablet}) {
      ${Header} {
        flex-direction: column;
        align-items: center;
        height: 100vh;
        gap: 2em;
      }
      ${About} {
          align-items: center;
          text-align: center;
          width: 500px;
          padding: 0px;
          justify-content: center;
          gap: 1em;
          font-size: 12px;
      }
      ${ImageWrap} {
          max-width: 70vw;
          max-height: 500px;
          align-items: center;
      }
      ${CrewWrap} {
        align-self: flex-start;
      }
      ${Image} {
          height: 100%;
      }
  }
  @media only screen and (max-width: ${devices.Phone}) {
      ${Header} {
          flex-direction: column-reverse;
          justify-content: center;
      }
      ${MobilePageLocation} {
        display: flex;
      }
      ${About} {
        padding-top:50px;
        height: 40%;
        width: 95%;
        flex-direction: column-reverse;
        font-size: 8px;
        gap: 1em;
        .PageLocation {
            display: none;
        }
      }
      ${ImageWrap} {
        max-width: 300px;
        min-height: 300px;
      }
      ${Image} {
          height: 110%;
      }
  }
`
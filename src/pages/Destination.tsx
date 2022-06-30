import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import HeaderIMG from '../assets/destination/Destination.jpg';
import { DestinationNav } from '../components/DestinationNav/DestinationNav';
import { Navbar } from '../components/Navbars/Navbar';
import { PageLocation } from '../components/PageLocation/PageLocation';
import { planets } from '../data';
import { devices } from '../MediaQueries';

export const Destination : React.FC = () => {
    const [planet,setPlanet] = useState<number>(0)

    useEffect(() => {
    },[])

  return (
    <Container>
        <Navbar />
        <Header>
            <DestinationWrap>
                <PageLocation num="1" title="PICK YOUR DESTINATION" />
                <Image src={planets[planet].image} />
            </DestinationWrap>
            <About>
                <DestinationNav setPlanet={setPlanet} planet={planet} />
                <Title>{planets[planet].title}</Title>
                <Desc>{planets[planet].Desc}</Desc>
                <Stats>
                    <Stat>
                        <StatTitle>AVG. DISTANCE</StatTitle>
                        <StatDesc>{planets[planet].Stats[0]}</StatDesc>
                    </Stat>
                    <Stat>
                        <StatTitle>AVG. DISTANCE</StatTitle>
                        <StatDesc>{planets[planet].Stats[1]}</StatDesc>
                    </Stat>
                </Stats>
            </About>
        </Header>
    </Container>
  )
}

const StatDesc = styled.p`
    font-family: "Bellefair";
    font-size: 2em;
    margin-top: 0px;
`

const StatTitle = styled.h3`
    font-family: "Barlow Condensed";
    font-weight: 400;
    font-size: 1.2em;
`

const Stat = styled.div``

const Stats = styled.div`
    display: flex;
    gap: 3em;
    width: 100%;
    border-top: 1px solid #383B4B;
`

const Desc = styled.p`
  font-size: 1.4em;
  line-height: 1.5em;
  width: 400px;
`

const Title = styled.h2`
  font-size: 7em;
  font-weight: 400;
  margin: 0px;
  color: white;
    padding: 0px;
  font-family: "Bellefair";
`

const About = styled.article`
    width: 400px;
    text-align: left;

`

const Image = styled.img`
    max-height: 50vh;
    transform: rotate(deg 90px);
`

const DestinationWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2em;
    font-family: "Barlow Condensed";
    height: 100%;
    font-size: 20px;
    letter-spacing: 3px;
    color: white;
`

const Header = styled.header`
    display: flex;
    color: #D0D6F9;
    min-height: 80vh;
    align-items: center;
    justify-content: center;
    gap: 20em;
    font-family: "Barlow Condensed";
`

const Container = styled.div`
  min-height: 100vh;
  color: white;
  overflow: hidden;
  background-color: black;
  background-image: url(${HeaderIMG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (max-width: ${devices.Desktop}) {
    ${Header} {
        gap: 10em;
    }
  }
  @media only screen and (max-width: ${devices.Laptop}) {
    ${Header} {
        gap: 2em;
    }
    ${About} {
        font-size: 13px;
    }
    ${Image} {
          max-height: 75%;
          width: 95%;
      }
  }
  @media only screen and (max-width: ${devices.Tablet}) {
      ${Header} {
          flex-direction: column;
          gap: 2em;
          height: 90vh;
      }
      ${Image} {
          max-height: 75%;
          width: 55%;
      }
      ${DestinationWrap} {
          align-items: center;
          width: 80%;
          div {
              align-self: flex-start;
          }
      }
      ${About} {
          width: 80vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 1em;
          font-size: 12px;
      }
      ${Stats} {
          justify-content: center;
      }
  }
  @media only screen and (max-width: ${devices.Phone}) {
      overflow: visible;
      height: 120vh;
      ${Header} {
        gap: 0em;
        padding-top: 8em;
      }
      ${About} {
          gap: 0em;
          li {
              font-size: 1rem;
          }
          font-size: 10px;
      }
      ${Desc} {
        width: 95%;
      }
      ${DestinationWrap} {
          div {
              align-self: center;
          }
      }
      ${Stats} {
          flex-direction: column;
          gap: 0em;
          p {
              font-size: 28px;
              margin: 0px;

          }
      }
  }
`
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import TechTabletIMG from '../assets/technology/background-technology-tablet.jpg';
import TechIMG from '../assets/technology/Tech.jpg';
import { Navbar } from '../components/Navbars/Navbar';
import { PageLocation } from '../components/PageLocation/PageLocation';
import { TechnologyNav } from '../components/TechnologyNav/TechnologyNav';
import { Tech } from '../data';
import { devices } from '../MediaQueries';

export const Technology : React.FC = () => {

    const [navNumber,setNavNumber] = useState<number>(0)

  return (
    <Container>
        <Navbar />
        <Header>
            <About>
                {/*для компьютеров*/}
                <PageLocation num="3" title="SPACE LAUNCH 101" />
                <TechWrap>
                    <TechnologyNav setNavNumber={setNavNumber} navNumber={navNumber} />
                    <TechInfo>
                        <Title>THE TERMINOLOGY</Title>
                        <Strong>{Tech[navNumber].title}</Strong>
                        <Desc>{Tech[navNumber].Desc}</Desc>
                    </TechInfo>
                </TechWrap>
            </About>
            <ImageWrap src={Tech[navNumber]} >
            </ImageWrap>
            {/*для планшетов */}
            <MobilePageLocation num="3" title="SPACE LAUNCH 101" />
        </Header>
    </Container>
  )
}

const MobilePageLocation = styled(PageLocation)`
    display: none;
`

const Desc = styled.p`
  font-size: 1.1em;
  line-height: 1.5em;
  font-family: "Barlow";
  font-weight: 400;
`

const Strong = styled.h2`
    font-weight: 400;
    font-size: 3.5em;
    margin: 0.2em 0em;
    opacity: 100%;
    color: white;
`

const Title = styled.h2`
  font-size: 1em;
  font-weight: 400;
  margin: 0px;
  font-family: "Barlow Condensed";
  letter-spacing: 2px;
`

const About = styled.article`
    width: 650px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    .PageLocation {
        display: flex ;
        h1 {
            font-size: 1.7rem;
        }
    }
`

const ImageWrap = styled.div<{src: {DesktopIMG: string,TabletIMG: string}}>`
    min-width: 45%;
    min-height: 70%;
    background-color: black;
    background-image: url(${props => props.src.DesktopIMG});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;

    @media only screen and (max-width: ${devices.Tablet}) {
        background-image: url(${props => props.src.TabletIMG});
    }
`

const TechInfo = styled.div`
    padding: 10em 0em;
    color: #D0D6F9;
`

const TechWrap = styled.div`
    font-family: "Bellefair";
    color: white;
    display: flex;
    align-items: center;
    gap:  0em 5em;
`

const Header = styled.header`
    display: flex;
    color: #D0D6F9;
    height: 83vh;
    width: 100%;
    gap: 1em;
    align-items: center;
    justify-content: space-between;
    padding-left: 10em;
    font-family: "Barlow Condensed";

`

const Container = styled.div`
  min-height: 110vh;
  color: white;
  background-color: black;
  background-image: url(${TechIMG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  @media only screen and (max-width: ${devices.Desktop}) {
    ${Header} {
        padding-left: 6em; 
    }
    ${About} {
        font-size: 14px;
        width: 560px;
    }
  }

  @media only screen and (max-width: ${devices.Laptop}) {
    ${Header} {
        padding-left: 1em;
    }

    ${Strong} {
        font-size: 2.5em;
    }

    ${ImageWrap} {
        min-width: 40%;
        min-height: 60%;
    }

    ${TechWrap} {
        gap: 3em;
        li {
            width: 60px;
            height: 60px;
            font-size: 1.7em;
        }
    }
  }

  @media only screen and (max-width: ${devices.Tablet}) {
    background-image: url(${TechTabletIMG});

    ${Header} {
        flex-direction: column-reverse;
        justify-content: center;
        gap: 1em;
        padding: 0px;
    }
    ${MobilePageLocation} {
        height: 9%;
        display: flex;
        align-items: center;
        align-self: flex-start;
        padding-left: 2em;
    }
    ${About} {
        height: 75%;
        max-width: 90%;
        .PageLocation {
            display: none ;
        }
    }
    ${TechWrap} {
        gap: 3em;
        flex-direction: column;
        ul {
            flex-direction: row;
        }
        li {
            width: 60px;
            font-size: 1.5em;
            height: 60px;
        }
    }
    ${ImageWrap} {
        width: 110%;
        max-height: 40%;
        min-height: 35%;
    }
    ${TechInfo} {
        justify-content:center;
        text-align: center;
        padding: 0px;
    }
  }
  @media only screen and (max-width: ${devices.Phone}) {
    display: flex;
    flex-direction: column;
    gap: 2em;
    ${Header} {
        gap: 3em;
    }
    ${TechInfo} {
        width: 100%;
    }
    ${About} {
        padding-top: 0.5em;
        width: 100vw;
        height: 45%;
        .PageLocation {
            display: none;
        }
    }
    ${TechWrap} {
        gap: 2em;
        height: 100%;
        justify-content: space-around;
        flex-direction: column;
        ul {
            height: 100%;
            flex-direction: row;
        }
        li {
            width: 40px;
            font-size: 1em;
            height: 40px;
        }
    }   
  }
`
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import HeaderDesktopBackground from '../assets/home/background-home-desktop.jpg';
import HeaderPhoneBackground from '../assets/home/background-home-mobile.jpg';
import HeaderTabletBackground from '../assets/home/background-home-tablet.jpg';
import { Navbar } from '../components/Navbars/Navbar';
import { devices } from '../MediaQueries';

export const Home : React.FC = () => {
    return (
        <Container>
          <Navbar />
          <Header>
            <About>
              <Title>SO, YOU WANT TO TRAVEL TO</Title>
              <Strong>SPACE</Strong>
              <Desc>
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space 
                and not hover kind of on the edge of it. Well sit back,
                and relax because we’ll give you a truly out of this world experience!
              </Desc>
            </About>
            <ButtonWrap>
              <StyledLink to="/destination" ><ButtonInner>EXPLORE</ButtonInner></StyledLink>
              <ButtonOuter>EXPLORE</ButtonOuter>
            </ButtonWrap>
          </Header>
        </Container>
    );
}

const Desc = styled.p`
  line-height: 1.5em;
  font-size: 1.2em;
  opacity: 0.8;
`

const Strong = styled.strong`
  font-size: 10em;
  font-weight: 400;
  font-family: "Bellefair";
  color: white
`

const Title = styled.h1`
  font-weight: 400;
  font-size: 2em;
  letter-spacing: 5px;
  white-space: nowrap;
`

const ButtonOuter = styled.button`
  font-family: "Bellefair";
  font-size: 2.5em;
  padding: 3.5em 2em;
  border: none;
  background-color: rgba(255,255,255,0.2);
  display: flex;
  opacity: 0;
  border-radius: 50%;
  z-index: 1;
  transition: 200ms ease;
`

const ButtonInner = styled(ButtonOuter)`
  opacity: 1;
  background-color: white;
`

const StyledLink = styled(Link)`
  position: absolute;
  padding: 3.5em 2em;
  z-index: 2;
  text-decoration: none;
`

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  margin-right: 60px;
  transition: 200ms ease;
  &:hover {
    margin-right: 0px;
    ${ButtonOuter} {
      cursor: pointer;
      opacity: 1;
      padding: 5em 3.5em;
    }
    ${ButtonInner} {
      padding: 3.5em 2em;
    }
  }
`

const About = styled.article`
   width: 400px;
   font-family: "Barlow Condensed";
   color: #D0D6F9;
`

const Header = styled.header`
  display: flex;
  height: 83vh;
  align-items: center;
  justify-content: space-between;
  padding: 0em 13em;
`

const Container = styled.div`
  min-height: 100vh;
  color: white;
  overflow: hidden;
  background-color: black;
  background-image: url(${HeaderDesktopBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (max-width: ${devices.Desktop}) {
    ${Header} {
      padding: 0em 4em;
      font-size: 14px;
    }
  }

  @media only screen and (max-width: ${devices.Laptop}) {
    ${StyledLink} {
      padding: 3.5em 0em;
    }
    ${ButtonWrap} {
      margin-right: 0px;
    }
  }

  @media only screen and (max-width: ${devices.Tablet}) {
    background-image: url(${HeaderTabletBackground});

    ${Header} {
      flex-direction: column;
      justify-content: center;
      padding: 0em 10.5em;
      gap: 10em;
    }
    ${About} {
      width: 70vw;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    ${Title} {
      font-size: 5vw;
    }
    ${Strong} {
      font-size: 20vw;
    }
    ${Desc} {
      font-size: 20px;
      line-height: 28px;
    }
    ${ButtonOuter} {
      display: none;
    }
    ${ButtonInner} {
      display: flex;
      padding: 3em 1.5em;
      font-size: 2rem;
    }
    ${StyledLink} {
      padding: 0em;
      position: initial;
    }
    ${ButtonWrap} {
      height: 10%;
      margin: 0px;
      justify-content: center;
    }
  }

  @media only screen and (max-width: ${devices.Phone}) {
    background-image: url(${HeaderPhoneBackground});
    ${Header} {
      padding: 7em 0em;
      gap: 10em;
    }
    ${About} {
      width: 90%;
      height: 50%;
    }
    ${ButtonWrap} {
      height: 3%;
      align-items: center;
    }
    ${ButtonInner} {
      display: flex;
      font-size: 1.4rem;
      padding: 3em 1.5em;
    }
  }
`

export default Home
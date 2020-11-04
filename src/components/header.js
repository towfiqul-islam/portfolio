import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Profile from "../images/self_edited.png"

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.2);
`

const NavTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 2;
`

const Name = styled.h1`
  display: flex;
  align-items: baseline;
  font-size: 20px;
  color: black;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`

const Title = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
  font-weight: normal;
  margin-left: 5px;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`

const Navigation = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: end;
  align-items: center;
  font-size: 14px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`

const MobileNavigation = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: center;
  /* align-items: center; */
  font-size: 14px;

  @media screen and (min-width: 500px) {
    display: none;
  }
`

const TopHeader = styled.header`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  @media screen and (max-width: 500px) {
    margin-top: 15px;
  }
`

const Social = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-left: 2px;
  margin-top: 4px;
  @media screen and (max-width: 500px) {
    margin-left: 2px;
    margin-top: 5px;
  }
`

// const pathName = window.location.pathname
const Header = () => (
  <header>
    <MobileNavigation>
      <div>
        <Link to="/work">Work</Link>
      </div>
      <div>
        <Link to="/blog">Blog</Link>
      </div>
    </MobileNavigation>
    <TopHeader>
      <ProfileImage src={Profile} alt="" />

      <NavTitle>
        <Name>
          <Link to="/">Towfiqul Islam </Link>{" "}
          <Title> - Full Stack Developer</Title>
        </Name>

        <Social>
          <div>
            <a href="#!" target="_blank" rel="noopener noreferrer">
              twitter -{" "}
            </a>
            <a href="#!" target="_blank" rel="noopener noreferrer">
              github -{" "}
            </a>
            <a href="#!" target="_blank" rel="noopener noreferrer">
              mail
            </a>
          </div>
        </Social>
      </NavTitle>

      <Navigation>
        <div>
          <Link to="/work">Work</Link>
        </div>
        <div>
          <Link to="/blog">Blog</Link>
        </div>
      </Navigation>
    </TopHeader>
  </header>
)

export default Header

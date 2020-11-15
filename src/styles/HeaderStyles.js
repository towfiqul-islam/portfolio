import styled from "styled-components"

export const NavTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 2;
`

export const Name = styled.h1`
  display: flex;
  align-items: baseline;
  font-size: 24px;
  color: black;
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`

export const Title = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #555;
  font-weight: normal;
  margin-left: 5px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`

export const Navigation = styled.nav`
  display: flex;
  gap: 30px;

  justify-content: end;
  align-items: center;
  font-size: 18px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`

export const MobileNavigation = styled.nav`
  display: flex;
  gap: 40px;
  justify-content: center;
  /* align-items: center; */
  font-size: 16px;

  @media screen and (min-width: 500px) {
    display: none;
  }
`

export const TopHeader = styled.header`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  @media screen and (max-width: 500px) {
    margin-top: 15px;
  }
`

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin-left: 2px;
  margin-top: 6px;
  @media screen and (max-width: 500px) {
    margin-left: 2px;
    margin-top: 8px;
  }
`

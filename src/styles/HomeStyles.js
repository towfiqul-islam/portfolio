import styled from "styled-components"

export const Skill = styled.div`
  margin-top: 40px;
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  span {
    font-size: 18px;
    font-weight: normal;
    color: #555;
    line-height: 26px;
  }
  @media screen and (max-width: 500px) {
    h2 {
      font-size: 20px;
    }
    span {
      font-size: 16px;
      font-weight: normal;
      color: #555;
    }
  }
`
export const About = styled.div`
  margin-top: 40px;
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    font-weight: normal;
    line-height: 36px;
    font-size: 18px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 20px;
    h2 {
      font-size: 20px;
      margin-bottom: 15px;
    }
    p {
      font-size: 16px;
      line-height: 30px;
    }
  }
`

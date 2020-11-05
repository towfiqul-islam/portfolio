import styled from "styled-components"

export const Skill = styled.div`
  margin-top: 10px;
  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  span {
    font-size: 14px;
    font-weight: normal;
    color: #555;
  }
`
export const About = styled.div`
  margin-top: 30px;
  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  p {
    font-weight: normal;
    line-height: 26px;
    font-size: 16px;
  }
  @media screen and (max-width: 500px) {
    p {
      font-size: 14px;
    }
  }
`

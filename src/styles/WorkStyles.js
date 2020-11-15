import styled from "styled-components"

export const Title = styled.h2`
  margin-top: 40px;
  margin-bottom: 30px;
  font-size: 18px;
  text-transform: uppercase;
  color: #606f7b;
  letter-spacing: 1.2px;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`

export const WorkCard = styled.div`
  margin-bottom: 40px;
  line-height: 30px;
  h3 {
    margin-bottom: 10px;
    font-size: 24px;
  }

  p {
    font-size: 18px;
    line-height: 36px;
    color: #444;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const SkillTag = styled.div`
  margin-top: 8px;
  span {
    background: #e4e4e4;
    padding: 5px 8px;
    margin-right: 8px;
    font-size: 16px;
    color: #555;
  }
`

export const VisitLink = styled.a`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: #606f7b;
  display: flex;
  gap: 5px;
  span {
    font-size: 10px;
  }
`

import styled from "styled-components"

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 12px;
  text-transform: uppercase;
  color: #606f7b;
  letter-spacing: 1.2px;
`

export const WorkCard = styled.div`
  margin-bottom: 30px;
  line-height: 30px;
  h3 {
    margin-bottom: 5px;
    font-size: 20px;
  }

  p {
    font-size: 14px;
    line-height: 25px;
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
    margin-right: 5px;
    font-size: 12px;
  }
`

export const VisitLink = styled.a`
  font-size: 14px;
  color: #606f7b;
  display: flex;
  gap: 5px;
  span {
    font-size: 10px;
  }
`

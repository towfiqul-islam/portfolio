import styled from "styled-components"
export const BlogCard = styled.div`
  margin-top: 60px;
  line-height: 30px;
  h3 {
    /* margin-bottom: 1px; */
    font-size: 24px;
    line-height: 32px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 30px;
    h3 {
      font-size: 20px;
    }
  }
`

export const DateText = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: normal;
  color: #555;
  @media screen and (max-width: 500px) {
    margin-top: 5px;
    font-size: 12px;
    font-weight: 700;
    color: gray;
    /* font-weight: bold; */
  }
`

export const ExcerptText = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: #333;
  line-height: 36px;
  max-width: 500px;
  /* font-weight: bold; */
  /* color: gray; */

  @media screen and (max-width: 500px) {
    font-size: 16px;
    line-height: 30px;
    margin-top: 5px;
  }
`

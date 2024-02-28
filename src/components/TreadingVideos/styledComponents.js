import styled from 'styled-components'

export const TreadingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin: 30px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const TitleIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const TreadingVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const TreadingText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const TreadingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
`

import styled from 'styled-components'

export const NoVideoView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NoVideoImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NoVideoHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
`
export const NoVideoNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
`
export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
  padding: 10px;
  font-family: 'Roboto';
  font-size: 15px;
`
export const VideoCardList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

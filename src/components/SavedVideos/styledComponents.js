import styled from 'styled-components'

export const SavedContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 40px;
  margin-bottom: 40px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const SavedVideoTitle = styled.div`
  display: flex;
  align-items: center;
`
export const SavedTitleContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 60px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 15px;
  }
`
export const SavedVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`
export const SavedText = styled.h1`
  font-family: 'Roboto';
  font-size: 23px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 33px;
  }
`
export const NoSavedVideoView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NoSavedVideoImage = styled.img`
width:200px;
@media screen and (min-width: 768px) {
    width450px;
}
`
export const NoSavedVideoHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 23px;
  color: ${props => props.headingColor};
  text-align: center;
`
export const NoSavedVideoNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align: center;
`

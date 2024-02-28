import styled from 'styled-components'

export const ListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`
export const ThumbNailImage = styled.img`
  width: 100%;
`
export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin: 20px;
`
export const ContentSection = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px;
`
export const Title = styled.p`
font-family:'Roboto';
font-size:15px;
color=${props => props.color};
`
export const ChannelName = styled.p`
font-family:'Roboto';
font-size:12px;
color=${props => props.color};
`
export const ViewsAndDate = styled.p`
font-family:'Roboto';
font-size:10px;
color=${props => props.color};
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 3px;
`

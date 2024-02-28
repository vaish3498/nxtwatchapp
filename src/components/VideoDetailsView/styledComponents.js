import styled from 'styled-components'

export const VideoDetailsViewContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin: 30px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin: 20px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

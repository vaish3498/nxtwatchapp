import {
  NoVideoView,
  NoVideoImage,
  NoVideoHeading,
  NoVideoNote,
  RetryButton,
  VideoCardList,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import HomeVideoCard from '../HomeVideoCard'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videoCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? ' #f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? ' #e2e8f0' : '#475569'

        return videoCount > 0 ? (
          <VideoCardList>
            {homeVideos.map(eachVideo => (
              <HomeVideoCard video={eachVideo} key={eachVideo.id} />
            ))}
          </VideoCardList>
        ) : (
          <NoVideoView>
            <NoVideoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideoHeading headingColor={headingColor}>
              No Search results found
            </NoVideoHeading>
            <NoVideoNote noteColor={noteColor}>
              Try different keyword or remove search filter
            </NoVideoNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoVideoView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideos

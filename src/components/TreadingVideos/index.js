import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureView from '../FailureView'
import VideoCard from '../VideoCard'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  TreadingContainer,
  TitleIconContainer,
  TreadingVideoTitle,
  TreadingVideoList,
  TreadingText,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TreadingVideos extends Component {
  state = {
    treadingVideo: [],
    apiState: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiState: apiStatusConstant.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updateData = data.videos.map(eachVideos => ({
        id: eachVideos.id,
        title: eachVideos.title,
        thumbnailUrl: eachVideos.thumbnail_url,
        viewCount: eachVideos.view_count,
        publishedAt: eachVideos.published_at,
        name: eachVideos.name,
        profileImageUrl: eachVideos.profile_image_url,
      }))
      this.setState({
        treadingVideo: updateData,
        apiState: apiStatusConstant.success,
      })
    } else {
      this.setState({apiState: apiStatusConstant.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderVideoView = () => {
    const {treadingVideo} = this.state

    return (
      <TreadingVideoList>
        {treadingVideo.map(eachVideo => (
          <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </TreadingVideoList>
    )
  }

  onRetry = () => {
    this.getVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderTreadingView = () => {
    const {apiState} = this.state

    switch (apiState) {
      case apiStatusConstant.success:
        return this.renderVideoView()
      case apiStatusConstant.inProgress:
        return this.renderLoadingView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value

          const bgColor = isDarkTheme ? ' #0f0f0f' : ' #f9f9f9'
          const textColor = isDarkTheme ? ' #f9f9f9' : '#231f20'

          return (
            <div data-testid="trending">
              <Header />
              <NavigationBar />
              <TreadingContainer
                data-testid="trending"
                style={{backgroundColor: bgColor}}
                onClick={toggleTheme}
              >
                <TreadingVideoTitle>
                  <TitleIconContainer>
                    <HiFire size={35} color="#ff0000" />
                  </TitleIconContainer>
                  <TreadingText color={textColor}>Treading</TreadingText>
                </TreadingVideoTitle>
                {this.renderTreadingView()}
              </TreadingContainer>
            </div>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default TreadingVideos

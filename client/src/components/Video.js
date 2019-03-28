import React, { Component } from 'react'
import ReactPlayer from 'react-player'
// import YouTubePlayer from 'react-player/lib/players/YouTube'



class Video extends Component {
  render () {
    return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
      />
    </div>
  )
}
}

export default Video;
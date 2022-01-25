import React from 'react';
import LeftNavbar from './left_navbar';
import TopNavbar from './top_navbar';
import LeftIcons from './left_icons';
import VideoIndexContainer from './videos/video_index_container';

export default class Home extends React.Component {
  render(){
    return(
      <div>
        <TopNavbar/>
        <LeftNavbar/>
        <LeftIcons/>
        <VideoIndexContainer/>
      </div>
    )
  }
}
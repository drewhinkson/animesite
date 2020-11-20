import React from 'react';
import '../CSS/VideoDetail.css';
const VideoDetail = ({ video, title, episode }) => {
  const videoSrc = `https://${video}`;
  return (
    <div className='videoplayer'>
      {title} - {episode}
      <div className='ui embed'>
        <iframe title='video player' src={videoSrc} />
      </div>
      <button className='btn btn-primary'> All Episodes</button>
    </div>
  );
};

export default VideoDetail;

import React from 'react';
import '../CSS/AnimeList.css';

const AnimeItem = ({ image, title, episode, video, onVideoSelect }) => {
  return (
    <div className='  col-xs-12 col-sm-6 col-md-6 col-lg-4'>
      <div onClick={() => onVideoSelect(video, title, episode)}>
        <div className='well'>
          <div className='row'>
            <div className='col-xs-4 latestepisode_image  '>
              <center>
                <img
                  src={image}
                  className='lozad img-responsive'
                  alt={episode}
                />
              </center>
            </div>
            <div className='latestanime-title'>
              <h4> {title}</h4>
              (Episode {episode})
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AnimeItem;

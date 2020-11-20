import React from 'react';
import AnimeItem from './animeItem';
import '../CSS/AnimeList.css';

const AnimeList = ({ image, onVideoSelect }) => {
  const renderedList = image.map((img) => {
    return (
      <AnimeItem
        key={img.title}
        image={img.img}
        title={img.title}
        episode={img.episode}
        video={img.servers[0].iframe}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return (
    <div className='container content' role='main'>
      <div className='row'>{renderedList}</div>
    </div>
  );
};
export default AnimeList;

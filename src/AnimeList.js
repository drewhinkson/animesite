import React from 'react'
import AnimeItem from './animeItem'
import './AnimeList.css'

const AnimeList = ({image}) =>{
    const renderedList =image.map((img,key) => {
        return <AnimeItem  key={img.title} image ={img.img} title= {img.title} episode = {img.episode} video={img.servers[0]}  />
    });

    return(
        <div className ="container content" role="main">
        <div className = "row">
            {renderedList}
            </div>
            </div>
          
         
     
           
       
    )
}
export default AnimeList
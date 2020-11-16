import React from 'react'
import './AnimeList.css'
const AnimeItem = ({image, title, episode}) =>{
    return(
    
       
        <div className ="  col-xs-12 col-sm-6 col-md-6 col-lg-4"> 
        <div className="well"> 
        <div className="row">
            <div className="col-xs-4 latestepisode_image  ">
               <center>   
                   <a href="#">    
            <img src = {image} className="lozad img-responsive"  />
            </a>
            </center>
            </div>
            <div className="latestanime-title">
                <h4> {title}</h4>
                   
               
                (Episode {episode})
                <br/>
                </div>
            </div>
        </div>
       
        </div>
     
        
        
    )
}
export default AnimeItem
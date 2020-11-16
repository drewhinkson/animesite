import React from 'react'
import anime from './api/anime'
import AnimeList from './AnimeList'
import Navbar from './navbar'
import Navtab from './navtab'
class App extends React.Component {
    state = {images: []}

    componentDidMount(){
        this.onTermSubmit('')
    }
    onTermSubmit = async () =>{

      const  response = await anime.get(`/RecentReleaseEpisodes/1`, {
      
        })

     console.log(response.data.anime);
     this.setState ({
        images:response.data.anime
     })
    
    
}

    render(){
        return (
             <div>
                 <Navbar />
                 <Navtab />
                   <AnimeList image ={this.state.images}/>
             </div>
        )
    }
}

export default App
import React from 'react';
import anime from '../api/anime';
import AnimeList from './AnimeList';
import Navbar from './navbar';
import Navtab from './navtab';
import VideoDetail from './VideoDetail';
class App extends React.Component {
  state = { images: [], selectedVideo: '', title: [], episode: [] };

  componentDidMount() {
    this.recentRelease('');
  }
  recentRelease = async () => {
    const response = await anime.get(`/RecentReleaseEpisodes/1`, {});
    this.setState({
      images: response.data.anime,
    });
  };
  onVideoSelect = (video, title, episode) => {
    this.setState({ selectedVideo: video, title: title, episode: episode });
  };
  render() {
    return (
      <div>
        <Navbar />
        <Navtab />
        <AnimeList
          onVideoSelect={this.onVideoSelect}
          image={this.state.images}
        />
        <VideoDetail
          video={this.state.selectedVideo}
          title={this.state.title}
          episode={this.state.episode}
        />
      </div>
    );
  }
}
export default App;

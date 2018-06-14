import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
import AudioPlay from './components/AudioPlay';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      songs: [],
      counterSong: 0,
      isPlaying: true,
      isLoading: true
    }
  }

  componentDidMount() {
    console.log("Did Mount on App")
    axios.get('http://localhost:8080/getsongs')
      .then((response) => {
        console.log(response.data)
        this.setState({
          songs: response.data,
          isLoading: false
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  togglePlay = () => {
    this.setState({
      isPlaying: !this.state.isPlaying
    });

  };

  playMusicSelected = (music) => {
    this.setState({
      isPlaying: !this.state.isPlaying,
      counterSong: music
    });
  }

  clickNext = () => {
    if (this.state.counterSong < this.state.songs.length + 1) {
      this.setState({
        counterSong: this.state.counterSong + 1,
        isPlaying: this.state.isPlaying
      })
    }
  }

  clickPrevious = () => {
    console.log(this.state.counterSong)
    if (this.state.counterSong <= this.state.songs.length - 1) {
      this.setState({
        counterSong: this.state.counterSong - 1,
        isPlaying: this.state.isPlaying
      })
    }
  }
  render() {

    const { match } = this.props
    // console.log(this.state.songs)
    if (this.state.isLoading) {
      console.log('Loading...')
      return (<div>Loading Songs...</div>)
    }

    return (
      <div>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <SongList
              songs={this.state.songs}
              playMusicSelected={this.playMusicSelected}
              isPlay={this.state.isPlaying}
              counterSong={this.state.counterSong} />}
            />
            <Route path="/:songID" render={(props) => <SongDetail
              songs={this.state.songs} {...props}
              playMusicSelected={this.playMusicSelected} />}
            />
          </Switch>
        </div>
        <div>
          <AudioPlay
            songs={this.state.songs}
            counterSong={this.state.counterSong}
            clickNext={this.clickNext}
            clickPrevious={this.clickPrevious}
            isPlay={this.state.isPlaying}
            togglePlay={this.togglePlay} />
        </div>
      </div>
    );
  }
}

export default App;

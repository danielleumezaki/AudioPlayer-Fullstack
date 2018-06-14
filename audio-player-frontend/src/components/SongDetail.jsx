import React, { Component } from 'react';
import AudioPlay from './AudioPlay';

class SongDetail extends Component {
    
    render() {
        console.log(this.props.match.params)
        console.log(this.props.songs)

        let songID = parseInt(this.props.match.params.songID)

        let songTemp = this.props.songs.filter(song => {
            return song.id === songID
        })
        console.log(songTemp)


        // console.log(this.props)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>{this.props.songs[songID].name}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <img src={this.props.songs[songID].picture} alt="" />
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <a id="playSingle" className="waves-effect waves-light btn orange lighten-1" onClick={() => { this.props.playMusicSelected(songID) }}><i className={!this.props.isPlay ? "fa fa-play" : "fa fa-pause"}></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SongDetail;
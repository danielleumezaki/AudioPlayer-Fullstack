import React, { Component } from 'react';

class AudioPlay extends Component {

    componentDidUpdate = () => {
        console.log("Did Update on Audio Play")
        console.log(this.props.songs[this.props.counterSong].audio)
        if (this.props.isPlay) {
            this.songPlayer.load()
            this.songPlayer.play()
        } else {
            this.songPlayer.load()
            this.songPlayer.pause()
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="audioPlayer">
                            <audio ref={(self) => { this.songPlayer = self }}>
                                <source src={this.props.songs[this.props.counterSong].audio} type="audio/mpeg" />
                            </audio>
                            <a className="waves-effect waves-light btn transparent play1" onClick={() => { this.props.clickPrevious() }} disabled={this.props.counterSong === 0}><i className="fa fa-backward"></i></a>
                            <a className="waves-effect waves-light btn transparent play" onClick={() => { this.props.togglePlay() }}><i className={!this.props.isPlay ? "fa fa-play" : "fa fa-pause"}></i></a>
                            <a className="waves-effect waves-light btn transparent play" onClick={() => { this.props.clickNext() }} disabled={this.props.counterSong === this.props.songs.length - 1}><i className="fa fa-forward"></i></a>
                        </div>
                        <h5>{this.props.songs[this.props.counterSong].name}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default AudioPlay;
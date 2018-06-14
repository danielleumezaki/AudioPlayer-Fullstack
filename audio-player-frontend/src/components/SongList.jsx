import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SongDetail from './SongDetail';

class SongList extends Component {
    render() {
        let songsList = this.props.songs.map((song) => {
            return <div>
                <tr>
                    <td scope="row"><Link to={`/${song.id}`}>{song.name}</Link></td>
                    <td>
                        <a className="waves-effect waves-light btn orange lighten-1" onClick={() => { this.props.playMusicSelected(song.id) }}><i className={song.id === this.props.counterSong ? "fa fa-play" : "fa fa-pause"}></i></a>
                    </td>
                </tr>
            </div>
        })
        // console.log(this.props)
        return (
            <div className="container">
                <div className="row">
                    <h3>Playlist</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {songsList}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default SongList;
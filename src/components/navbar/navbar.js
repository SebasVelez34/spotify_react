import React from "react";
import Playlist from '../listPlaylist/listplaylist';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import request from 'request';
import OPTIONS_API from '../../API/musicAPI';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist : [],
            music  : []
        }
        //this.handleChange = this.handleChange.bind(this);
    }
    /* handleChange(event){
        let dataArtist = [];
        let dataMusic  = [];
        if (event.key === 'Enter') {
            OPTIONS_API.url = `https://deezerdevs-deezer.p.rapidapi.com/artist/${event.target.value}`;
            request(OPTIONS_API, async function (error, response, body) {
                if (error) throw new Error(error);
                dataArtist = JSON.parse(body);
                await this.setState({
                    artist  : dataArtist
                });
            }.bind(this));
            OPTIONS_API.url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${event.target.value}`;
            request(OPTIONS_API, async function (error, response, body) {
                if (error) throw new Error(error);
                dataMusic = JSON.parse(body);
                dataMusic = dataMusic.data;
                this.setState({
                    music : dataMusic
                });
            }.bind(this));
        }
    } */
    render(){
        return (
            <section className="header">
                    <div className="page-flows">
                    <span className="flow">
                    <i className="ion-chevron-left"></i>
                    </span>
                    <span className="flow">
                    <i className="ion-chevron-right disabled"></i>
                    </span>
                    </div>
                    <div className="search">
                    <input type="text" placeholder="Search" onKeyDown={this.props.handleChange}/>
                    </div>
                    <div className="user">
                        <div className="user__notifications">
                            <i className="ion-android-notifications"></i>
                        </div>
                        <div className="user__inbox">
                            <i className="ion-archive"></i>
                        </div>
                        <div className="user__info">
                            <span className="user__info__img">
                            <img src={(this.props.artist) ? this.props.artist.picture_small : '' } alt="Profile" className="img-responsive" />
                            </span>
                            <span className="user__info__name">
                            <span className="first">Adam</span>
                            <span className="last">Lowenthal</span>
                            </span>
                        </div>
                        <div className="user__actions">
                            <div className="dropdown">
                                <button className="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <i className="ion-chevron-down"></i>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                                    <li><a href="#">Private Session</a></li>
                                    <li><a href="#">Account</a></li>
                                    <li><a href="#">Settings</a></li>
                                    <li><a href="#">Log Out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
          );
    }
}


export default Navbar;
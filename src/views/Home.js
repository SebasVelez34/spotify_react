import React from "react";
import Navbar from "../components/navbar/navbar";
import SidebarL from "../components/sidebar-left/sidebar-left";
import Content from "../components/content/content";
import OPTIONS_API from '../API/musicAPI';
import request from 'request';


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artist : [],
			music  : []
		}
		this.handleChange = this.handleChange.bind(this);
		this.defaultSearch();
	}
	handleChange(event,search = null){
		let dataArtist = [];
		let dataMusic  = [];
		
		if (event.key === 'Enter' || search) {
			OPTIONS_API.url = `https://deezerdevs-deezer.p.rapidapi.com/artist/${ (search) ? search : event.target.value}`;
			request(OPTIONS_API, async function (error, response, body) {
				if (error) throw new Error(error);
				dataArtist = JSON.parse(body);
				await this.setState({
					artist  : dataArtist
				});
			}.bind(this));
			OPTIONS_API.url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${ (search) ? search : event.target.value}`;
			request(OPTIONS_API, async function (error, response, body) {
				if (error) throw new Error(error);
				dataMusic = JSON.parse(body);
				dataMusic = dataMusic.data;
				this.setState({
					music : dataMusic
				});
				console.log(this.state.artist , this.state.music);
			}.bind(this));
			
			
		}
	}

	defaultSearch(){
		this.handleChange({},"Porta");
	}
	render(){
		return (
		<>
			<Navbar handleChange={this.handleChange} artist={this.state.artist}/>
			<section className="content">
			<SidebarL/>
			<Content artist={this.state.artist}/>
			</section>
		</>
		);
	}
}

export default Home;
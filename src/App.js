import React, {Component} from "react";
import { VideoDetail } from "./components";
import Navbar from './components/Navbar';
import { Box } from '@mui/material';
import youtube from "./api/youtube";
import './app.css';

class App extends Component {
	state = {
		videos: [],
		selectedVideo: null
		}

	componentDidMount = () => {
			this.onFormSubmit("Spiderman");
		}
	
	onFormSubmit =  async (searchTerm) => {
		const response = await youtube.get("search", {
			params: {
				part: "snippet",
				maxResults: 5,
				key: process.env.REACT_APP_API_KEY,
				q: searchTerm
			}
		});
		this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]});
	}

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
}

	render(){
		const {videos, selectedVideo} = this.state;

	return(
      <Box sx={{ p: 1 }}>
        <Navbar onFormSubmit={this.onFormSubmit} />
		<VideoDetail selectedVideo={selectedVideo} videos={videos} onVideoSelect={this.onVideoSelect} />
      </Box>
		);
	}
}
export default App;

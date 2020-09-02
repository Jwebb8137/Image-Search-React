import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './App.css';
import logo from './search.jpg';

export default class App extends React.Component {
    state = {
        images: []
    }

    onSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });
        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '10px'}}>
                <img class='banner__image' src={logo}/>
                <SearchBar onSubmit={this.onSubmit}/>
               <ImageList images={this.state.images}/>
            </div>
        )    
    }
}
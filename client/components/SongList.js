import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import query from '../queries/fetchSongs';

class SongList extends Component {
    renderSongs() {      
        return this.props.data.songs.map(
            (song) => <li key={song.id} className="collection-item">{song.title}</li>
        );
    }
    render() {
        console.log(this.props);
        if (this.props.data.loading) { return <div>Loading</div>; }
        return (
            <div>
                <ul className="collection">{this.renderSongs()}</ul>
                <Link 
                className="btn-floating btn-large blue right"
                to="/songs/new"
                >
                <i className="material-icons">add</i>
                </Link>
            </div>
           
        );
    }
}


export default graphql(query)(SongList);

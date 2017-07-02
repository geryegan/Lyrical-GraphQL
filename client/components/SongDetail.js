import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import getSong from '../queries/getSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
    // componentDidUpdate() {
    //     this.props.data.refetch();
    // }
    render() {
        console.log('yeah', this.props);
        const { song } = this.props.data;
        if (!song) {
            return <div>Loading</div>;
        }
        
        return (
                <div>
                    <Link to="/">
                      Back
                    </Link>
                    <h3>{song.title}</h3>
                    <LyricList lyrics={song.lyrics} />
                    <LyricCreate songId={song.id} />
                </div>
        );
    }
}

export default graphql(getSong, {
    options: (props) => ({ variables: { id: props.match.params.id } })
})(SongDetail);

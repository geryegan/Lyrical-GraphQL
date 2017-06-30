import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import getSong from '../queries/getSong';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {
    render() {
        const { song } = this.props.data;
        if (!song) {
            return <div>Loading</div>;
        }
        console.log(this.props);
        return (
                <div>
                    <Link to="/">
                      Back
                    </Link>
                    <h3>{song.title}</h3>
                    <LyricCreate songId={song.id} />
                </div>
        );
    }
}

export default graphql(getSong, {
    options: (props) => ({ variables: { id: props.match.params.id } })
})(SongDetail);

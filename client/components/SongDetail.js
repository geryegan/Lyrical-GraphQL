import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import getSong from '../queries/getSong';

class SongDetail extends Component {
    render() {
        const { song } = this.props.data;
        if (!song) {
            return <div>Loading</div>;
        }
        console.log(this.props);
        return (
                <div>
                    <h3>{this.props.data.song.title}</h3>
                </div>
        );
    }
}

export default graphql(getSong, {
    options: (props) => ({ variables: { id: props.match.params.id } })
})(SongDetail);

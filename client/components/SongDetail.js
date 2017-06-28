import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import getSong from '../queries/getSong';

class SongDetail extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>Song Detail, {this.props.match.params.id} </h3>
            </div>
        );
    }
}

export default graphql(getSong, {
    options: (props) => ({ variables: { id: props.match.params.id } })
})(SongDetail);

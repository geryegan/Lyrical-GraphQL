import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricList extends Component {
    onLike(id) {
        this.props.mutate({ variables: { id } });
    }
    renderLyrics() {
        return this.props.lyrics.map(
            ({ id, content, likes}) => <li className="collection-item" key={id}>
                {content}
                <div className="vote-box">
                    <i 
                        className="material-icons"
                        onClick={() => this.onLike(id)}
                    >
                    thumb_up
                    </i>
                    {likes}
                </div>
                </li>
        );
    }

    render() {
        return (
            <ul className="collection">{this.renderLyrics()}</ul>
        );
    }
}

const mutation = gql`
    mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
        id
        likes
    }
    }
`

export default graphql(mutation)(LyricList);

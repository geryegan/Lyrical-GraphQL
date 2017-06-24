import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, withRouter } from 'react-router-dom';
import query from '../queries/fetchSongs';

class SongCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '' };
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.mutate({
            variables: { title: this.state.title },
            refetchQueries: [{ query }]
        }).then(() => {
            this.props.history.push('/');
        });
        this.setState({ title: '' });
    }
    enterKeyDownHandler(e) {
      if (e.key === 'Enter') {
        this.submit();
      }
    }
   
    render() {
        return (
          <div>
              <Link to="/">
                Back
              </Link>
              <h3>
                  Song Create
              </h3>
              <form onSubmit={this.onSubmit.bind(this)}> 
                  <label htmlFor="songTitle">Song Title</label>
                  <input 
                  onChange={event => this.setState({ title: event.target.value })} 
                  value={this.state.title} 
                  />
              </form>
          </div>  
        );
    }
}

const mutation = gql`
    mutation AddSong($title: String){
        addSong(title: $title){
            title
        }
    }
`;

export default graphql(mutation)(withRouter(SongCreate));

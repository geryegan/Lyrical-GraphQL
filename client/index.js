import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';
import './style/style.css';

const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

// const Root = () => (
//     <ApolloProvider client={client}>
//       <SongList />
//     </ApolloProvider>
//   );

class Root extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <Route exact path="/" component={SongList} />
            <Route path="/songs/song/:id" component={SongDetail} />
            <Route path="/songs/new" component={SongCreate} />
          </div>
         
        </Router>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import SongList from './components/SongList';

const client = new ApolloClient({});

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
          <Route path="/" component={SongList} />
        </Router>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);

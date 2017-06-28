import gql from 'graphql-tag';

const query = gql`
query getSongId($id: ID!){
  song(id: $id){
    title
    id
  }
}
`;

export default query;

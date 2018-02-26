import gql from 'graphql-tag';

export const getChat = gql`
query($id: ID!) {
    getChat(id: $id) {
      userId
      message
      createdAt
    }
  }
`;

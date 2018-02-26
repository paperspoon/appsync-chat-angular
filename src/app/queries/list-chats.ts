import gql from 'graphql-tag';

export const listChats = gql`
query ListChats {
    listChats {
      items {
        userId
        message
        createdAt
      }
      nextToken
    }
  }
`;

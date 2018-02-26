import gql from 'graphql-tag';

export const subscriptionToChats = gql`
subscription {
  subscribeToChats {
    userId
    message
    createdAt
  }
}
`;

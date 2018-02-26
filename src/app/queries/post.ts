import gql from 'graphql-tag';

export const post = gql`
mutation post(
  $userId: String!,
  $message: String!,
  $createdAt: String!
) {
  post(userId: $userId, message: $message, createdAt: $createdAt) {
    id
    userId
    message
    createdAt
  }
}
`;

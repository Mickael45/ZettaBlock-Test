import gql from "graphql-tag";

export const NEW_RECORD = gql`
  mutation CreateRecord($message: String!) {
    records(message: $message) {
      mentions
      emoticons
      links {
        url
        title
      }
    }
  }
`;

const { gql } = require("apollo-server");

const typeDefs = gql`
  type Record {
    id: ID!
    mentions: [String]
    emoticons: [String]
    links: [Link]
  }

  type Link {
    url: String!
    title: String!
  }

  type Query {
    records: [Record]
  }

  type Mutation {
    records(message: String!): Record!
  }
`;

module.exports = typeDefs;

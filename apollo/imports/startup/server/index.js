// entry point to app
import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
  type Query {
    hi: String
  }
`;

const resolvers = {
  Query: {
    hi() {
      return "suh dudes";
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
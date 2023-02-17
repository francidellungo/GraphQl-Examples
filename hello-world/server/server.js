import { ApolloServer, gql } from 'apollo-server';

// GraphQL schema definition
const typeDefs = gql`
    type Query {
        greeting: String
    }
`;

// console.log(typeDefs);

// Schema implementation: Resolvers
// The resolver structure must match the schema definition structure
const resolvers = {
    Query: {
        greeting: () => 'Hello World!',
    }
};

// Create first Apollo Server instance
const server = new ApolloServer({typeDefs, resolvers});
const {url} = await server.listen({port : 9000});
console.log(`Server running at ${url}`);

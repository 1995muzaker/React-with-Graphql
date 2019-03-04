import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = [
  `
    type CricketUpdates {
        id: Int
        title: String
        author: String
        img: String
        topic: String
        url: String
    }
    type Query {
        allUpdates: [CricketUpdates]
        updates(id: Int!): CricketUpdates
    }
    `
];

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;
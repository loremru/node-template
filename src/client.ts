import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(process.env.HASURA_URL)
client.setHeader('x-hasura-admin-secret', process.env.HASURA_SECRET)
export default client

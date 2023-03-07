import { GraphQLClient } from "graphql-request";
const Authorization = process.env.HYGRAPH_AUTHORIZATION || "";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || "";
const hygraph = new GraphQLClient(graphqlAPI, {
  headers: {
    Authorization,
  },
});

export default hygraph;

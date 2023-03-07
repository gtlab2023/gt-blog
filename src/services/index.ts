import { gql } from "graphql-request";

import hygraph from "./hygraph";
export const getPosts = async () => {
  const query = gql`
    query Assets {
      postsConnection {
        edges {
          node {
            createdAt
            slug
            title
            categories {
              name
              slug
            }
            author {
              bio
              name
              id
            }
          }
        }
      }
    }
  `;
  const result: QueryPostsReturn = await hygraph.request(query);
  return result.postsConnection.edges;
};

export interface QueryPostsReturn {
  postsConnection: PostsConnection;
}

export interface PostsConnection {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  createdAt: Date;
  slug: string;
  title: string;
  categories: Category[];
  author: Author;
}

export interface Author {
  bio: string;
  name: string;
  id: string;
}

export interface Category {
  name: string;
  slug: string;
}

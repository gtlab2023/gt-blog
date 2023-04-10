import { gql } from "graphql-request";

import hygraph from "./hygraph";
/** 首页获取文章 */
export const getPosts = async () => {
  const query = gql`
    query Posts {
      posts {
        createdAt
        slug
        title
        author {
          id
          name
        }
        categories {
          id
          name
        }
        excerpt
        featuredImage {
          url
        }
      }
    }
  `;
  const result: Data = await hygraph.request(query);
  return result.posts;
};

/** 获取分类和文章信息用于展示 */
export const getCategories = async () => {
  const query = gql`
    {
      categories {
        name
        id
        posts: post {
          id
          slug
          title
          excerpt
          createdAt
          author {
            name
            id
          }
          featuredImage {
            url
          }
        }
      }
    }
  `;
  const result: CateGoryData = await hygraph.request(query);
  return result.categories;
};
export interface Data {
  posts: Post[];
}

export interface Post {
  createdAt: Date;
  slug: string;
  title: string;
  author: Author;
  categories: Category[];
  excerpt: string;
  featuredImage: {
    url: string;
  };
}

export interface Author {
  id: string;
  name: string;
}
export interface Category {
  id: string;
  name: string;
}

export interface CateGoryData {
  categories: ArticleCategory[];
}

export interface ArticleCategory {
  name: string;
  id: string;
  posts: ArticlePost[];
}

export interface ArticlePost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: Author;
  featuredImage: FeaturedImage;
  createdAt: Date;
}

export interface FeaturedImage {
  url: string;
}

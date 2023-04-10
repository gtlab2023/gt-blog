import { FC, HTMLProps, useState } from "react";
import { getCategories, ArticleCategory } from "~/services";
import cn from "classnames";
import PostCard from "~/components/pages/articles/PostCard";
import { H2 } from "~/components/element/heading";
interface Props extends HTMLProps<HTMLDivElement> {
  categories: ArticleCategory[];
}
import Link from "next/link";

const postList: FC<Props> = ({ categories }) => {
  const [currentPosts, setCurrentPosts] = useState(categories[0].posts);
  const changeCategory = (category: ArticleCategory) => {
    setCurrentPosts(category.posts);
  };
  const goArticleDetail = (post) => {};

  return (
    <div>
      <section>
        <H2>分类</H2>
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <div
                className={cn(
                  "w-48 rounded-lg bg-slate-500 h-16 text-white cursor-pointer",
                  "flex justify-center items-center"
                )}
                onClick={() => {
                  changeCategory(category);
                }}
              >
                {category.name}
              </div>
            </div>
          );
        })}
      </section>
      <section>
        <H2>文章列表</H2>
        {currentPosts.map((post) => {
          return (
            <Link href={`/posts/${post.slug}`}>
              <PostCard
                key={post.id}
                post={post}
                onClick={() => {
                  goArticleDetail(post);
                }}
              />
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default postList;

export async function getStaticProps() {
  const categories = await getCategories();
  return {
    props: {
      categories,
    },
  };
}

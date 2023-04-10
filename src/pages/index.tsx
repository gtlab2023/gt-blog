import type { NextPage } from "next";
import SEO from "~/components/SEO";
import { getPosts, Post } from "~/services";
import { interestList } from "~/constants/interest";
const Home: NextPage<{ posts: Post[] }> = (props) => {
  return (
    <>
      <SEO title="首页" />
      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <section className="relative w-full h-screen">
          {props.posts.map((item) => (
            <div key={item.slug}>{item.title}</div>
          ))}
          <div className="absolute bottom-0 w-full h-8 shadow-lg">
            welcome to my website!
          </div>
        </section>
        <section className="w-full h-96">
          <h2 className="font-medium mb-8 mt-16">感兴趣的方向</h2>
          <ul className="flex justify-around">
            {interestList.map((item) => (
              <li
                className="w-24 h-24 rounded-full flex items-center justify-center shadow"
                key={item.alias}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </section>
        <section className="w-full flex bg-slate-300 h-60">
          <div className="w-1/2 flex flex-col items-center justify-center">
            <p>2019年毕业，20年自学前端并入行</p>
            <p>工作以来使用过react,vue,小程序</p>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center">
            <p>我叫高天，一名前端工程师。</p>{" "}
            <p>这里是我的个人博客,分享和展示前端内容</p>
          </div>
        </section>
        <section className="w-full px-8 my-8">
          <h2 className="text-left font-medium py-8">推荐阅读</h2>
          <ul className="grid-cols-4 gap-4">
            {props.posts.map((post) => (
              <li className="w-64 shadow-md " key={post.slug}>
                <img src={post.featuredImage.url} />
                <p>{post.createdAt.toString().slice(0, 10)}</p>
                <p>{post.title}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || {};
  return {
    props: {
      posts,
    },
  };
}

import type { NextPage } from "next";
import SEO from "~/components/SEO";
import Image from "next/image";
import { getPosts } from "~/services";
const Home: NextPage = (props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <SEO title="首页" />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        我是首页哦
      </main>
    </div>
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

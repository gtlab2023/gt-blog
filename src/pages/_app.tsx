import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import HEAD from "next/head";
import Layout from "~/components/layout";
import Message from "~/components/message";

/** 控制页面初始化内容 */
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { getLayout } = Component;
  return (
    <>
      <HEAD>
        <title>银杏树上的blog</title>
      </HEAD>
      {getLayout ? (
        getLayout(<Component {...pageProps} />)
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
      <Message></Message>
    </>
  );
}

export default MyApp;

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

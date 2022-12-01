import Head from "next/head";
import { useRouter } from "next/router";
import { defaultSEO } from "~/constants/defaultSEO";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
}
function SEO({ title, description, image, type }: SEOProps) {
  const router = useRouter();
  return (
    <Head>
      <title>
        {title ? `${title} | ${defaultSEO.title}` : defaultSEO.title}
      </title>
      <meta name="robots" content="follow, index" />
      <meta
        content={description ?? defaultSEO.description}
        name="description"
      />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}`}
      ></meta>
      <link
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}`}
      />
      <meta property="og:type" content={type ?? defaultSEO.type} />
      <meta property="og:site_name" content={defaultSEO.siteName} />
      <meta
        property="og:description"
        content={description ?? defaultSEO.description}
      />
      <meta
        property="og:title"
        content={title ? `${title} | ${defaultSEO.title}` : defaultSEO.title}
      />
      <meta property="og:image" content={image ?? defaultSEO.image} />
    </Head>
  );
}
export default SEO;

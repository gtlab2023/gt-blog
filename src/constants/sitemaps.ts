import { FC } from "react";

export const sitemaps: Sitemap[] = [
  {
    key: "home",
    title: "主页",
    url: "/",
  },
  {
    key: "article",
    title: "文章",
    url: "/articles",
  },
  {
    key: "terms",
    title: "关于",
    url: "/about",
  },
];

export type Sitemap = {
  key: string;
  title: string;
  url: string;
  icon?: FC<{ size?: number; className?: string }>;
};

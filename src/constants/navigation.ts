export const navigations = [
  {
    key: "高天的Blog",
    title: "首页",
    path: "/",
  },
  {
    key: "articles",
    title: "文章",
    path: "/posts",
  },
  ...(process.env.NODE_ENV === "development"
    ? [
        {
          key: "_writing",
          title: "写一篇",
          path: "/_writing",
        },
      ]
    : []),
];

export type Navigation = typeof navigations[number];

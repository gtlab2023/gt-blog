import { FC } from "react";
export const friendlyLinks: FriendlyLink[] = [
  {
    key: "xi-kun",
    title: "席坤的 Blog",
    url: "https://lilixikun.github.io/",
  },
  {
    key: "liyuanzhi",
    title: "李远志的 Blog",
    url: "https://blog.li-yuanzhi.com/",
  },
];

export type FriendlyLink = {
  key: string;
  title: string;
  url: string;
  icon?: FC<{ size?: number; className?: string }>;
};

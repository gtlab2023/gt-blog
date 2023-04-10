import classNames from "classnames";
import Link from "next/link";
import { sitemaps } from "~/constants/sitemaps";
import { FC, HTMLProps } from "react";
import { H3 } from "~/components/element/heading";
const Sitemap: FC<HTMLProps<HTMLDivElement>> = ({ className }) => {
  return (
    <div className={classNames(className)}>
      <H3
        className={classNames(
          "font-roboto-bold",
          "text-gray-900 transition-colors duration-500 ease-in-out dark:text-gray-300"
        )}
      >
        网站地图
      </H3>
      <div className={classNames("mt-5", "flex flex-col gap-y-2")}>
        {sitemaps.map((item) => (
          <Link href={item.url} key={item.key}>
            <span
              className={classNames(
                "flex items-center gap-1",
                "select-none",
                "cursor-pointer",
                "mr-auto w-auto"
              )}
            >
              {item.icon ? (
                <item.icon
                  size={20}
                  className={"fill-slate-700 dark:fill-slate-400"}
                />
              ) : null}
              <span>{item.title}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Sitemap;

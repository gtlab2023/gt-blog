import { memo } from "react";
import FriendlyLink from "./friendlyLink";
import Sitemap from "./siteMap";
import classNames from "classnames";
const Footer = () => {
  return (
    <footer className={classNames("mt-auto w-full", "pb-16")}>
      {/* 边框线 */}
      <div
        className={classNames(
          "h-px w-full bg-gray-200 dark:bg-gray-700",
          "mb-36"
        )}
      />

      <div className={classNames("px-5vw md:px-10vw", "w-full")}>
        <div
          className={classNames(
            "relative mx-auto w-full max-w-screen-xl",
            "grid gap-x-6 lg:gap-x-8",
            "grid-cols-4 md:grid-cols-8 lg:grid-cols-12"
          )}
        >
          <Sitemap />
          <FriendlyLink />
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);

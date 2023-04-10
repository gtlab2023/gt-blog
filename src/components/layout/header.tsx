import classNames from "classnames";
import Link from "next/link";
import { memo, useEffect, useRef, useState } from "react";
import useEventListener from "~/hooks/useEventListener";
import Nav from "./nav";
import ThemeSwitch from "./themeSwitch";

/** Header布局 */
const Header = () => {
  const [show, setShow] = useState(true);
  const oldWindowScroll = useRef({
    throttle: false, // 是否需要节流
  });

  useEffect(() => {
    // 首次加载时查看 scrollTop 是否大于 0，如果大于 0，则隐藏
    if (window.scrollY <= window.innerHeight) {
      setShow(false);
    }
  }, []);

  useEventListener("scroll", () => {
    if (oldWindowScroll.current.throttle) return;
    const scrollTop = Math.max(window.scrollY, 0);
    if (scrollTop > window.innerHeight) {
      setShow(true);
    } else {
      setShow(false);
    }
    setTimeout(() => {
      oldWindowScroll.current.throttle = false;
    }, 100);
  });
  return (
    <div
      className={classNames(
        "fixed top-0 w-full h-24 px-8 bg-white",
        "border-b border-b-gray-200 dark:border-b-gray-700",
        {
          "-translate-y-24": !show,
        },
        "transition-transform"
      )}
    >
      <header
        className={classNames(
          "h-full w-full",
          "flex items-center justify-between"
        )}
      >
        <Link href="/">
          <span className="text-3xl">高天的Blog</span>
        </Link>
        <div className="flex items-center">
          <Nav />
          <ThemeSwitch />
        </div>
      </header>
    </div>
  );
};

export default memo(Header);

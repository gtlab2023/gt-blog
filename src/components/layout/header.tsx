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
    top: 0, // 历史滚动距离
    flag: 0, // 下次滚动否需要隐藏
    throttle: false, // 是否需要节流
  });

  useEffect(() => {
    // 首次加载时查看 scrollTop 是否大于 0，如果大于 0，则隐藏
    if (window.scrollY > 0) {
      setShow(false);
    }
  }, []);
  return (
    <div
      className={classNames(
        "w-full h-24",
        "border-b border-b-gray-200 dark:border-b-gray-700"
      )}
    >
      <header className={classNames("h-full w-full", "flex items-center")}>
        <Link href="/">
          <span className="text-3xl">高天的Blog</span>
        </Link>
        <Nav />
        <ThemeSwitch />
      </header>
    </div>
  );
};

export default Header;

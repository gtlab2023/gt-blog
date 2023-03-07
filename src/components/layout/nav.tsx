import Link from "next/link";
import { useRouter } from "next/router";
import { navigations } from "~/constants/navigation";
import classNames from "classnames";
const Nav = () => {
  const { asPath } = useRouter();
  return (
    <nav className="h-16 sticky top-0 flex text-center justify-around items-center px-24">
      {navigations.map((item) => (
        <Link key={item.key} href={item.path}>
          <span
            className={classNames(
              "cursor-pointer select-none mr-4",
              // 如果当前路径包含当前，则添加选中样式
              {
                "font-bold text-violet-700 dark:text-violet-400":
                  asPath.includes(item.path),
              }
            )}
          >
            {item.title}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;

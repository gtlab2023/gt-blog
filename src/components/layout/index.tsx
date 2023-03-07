import { FC, HTMLProps } from "react";
import classNames from "classnames";
import Header from "~/components/layout/header";
import Footer from "~/components/layout/footer";

interface Props extends HTMLProps<HTMLDivElement> {}

/** Layout整体布局组件 */
const Layout: FC<Props> = ({ children }) => {
  return (
    <div
      id="layout"
      className={classNames(
        "relative flex min-h-screen w-full flex-col items-center",
        "bg-white dark:bg-zinc-900"
      )}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

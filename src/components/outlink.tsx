import type { FC, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import classNames from "classnames";
interface Props extends LinkProps {
  children?: ReactNode;
  className?: string;
}

/** 检查连接是否为站外，站外用a，站内用Link */
const OutLink: FC<Props> = ({ children, href, className, ...props }) => {
  if (!href || (typeof href === "string" && href.startsWith("http"))) {
    return (
      <a
        className={classNames("cursor-pointer", className)}
        {...props}
        href={href || "#"}
        target={href && "_blank"}
        rel={"noopener noreferrer"}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href || ""}
      {...props}
      target="_blank"
      className={className}
    ></Link>
  );
};

export default OutLink;

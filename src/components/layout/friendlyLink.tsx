import { memo, FC, HTMLProps } from "react";
import OutLink from "../outLink";
import { friendlyLinks } from "~/constants/friendlyLinks";
import { H3 } from "../element/heading";
import classNames from "classnames";
const FriendlyLink: FC<HTMLProps<HTMLDivElement>> = ({ className }) => {
  return (
    <div className="classNames(className)">
      <H3
        className={classNames(
          "font-roboto-bold",
          "text-gray-900 transition-colors duration-500 ease-in-out dark:text-gray-300"
        )}
      >
        友情链接
      </H3>
      <div className={"mt-5 flex flex-col gap-y-2"}>
        {friendlyLinks.map((item) => (
          <OutLink href={item.url} key={item.key}>
            <span>{item.title}</span>
          </OutLink>
        ))}
      </div>
    </div>
  );
};

export default FriendlyLink;

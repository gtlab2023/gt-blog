import { memo, FC, HTMLProps } from "react";
import OutLink from "../outlink";
import { friendlyLinks } from "~/constants/friendlyLinks";
const FriendlyLink: FC<HTMLProps<HTMLDivElement>> = ({ className }) => {
  return (
    <div className="classNames(className)">
      <h3>友情链接</h3>
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

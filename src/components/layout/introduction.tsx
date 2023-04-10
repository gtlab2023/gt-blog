// 社交账号数组,
// todo 另外可以添加，语雀，掘金，哔哩哔哩等
import classNames from "classnames";
import OutLink from "~/components/outLink";
import { FC, HTMLProps } from "react";
import { LINKLIST } from "~/constants/introduction";
import { H3 } from "~/components/element/heading";

const Introduction: FC<HTMLProps<HTMLDivElement>> = ({ className }) => {
  return (
    <div className={classNames(className)}>
      <H3
        className={classNames(
          "font-roboto-bold",
          "text-gray-900 transition-colors duration-500 ease-in-out dark:text-gray-300"
        )}
      >
        联系我
      </H3>
      <div className="mt-5 flex gap-4 flex-col">
        {/* other */}
        {LINKLIST.map((social) => (
          <OutLink key={social.type} href={social.url}>
            {social.type}
          </OutLink>
        ))}
      </div>
    </div>
  );
};
export default Introduction;

import { FC, ObjectHTMLAttributes } from "react";
import cn from "classnames";

export const fontSize = {
  h1: "leading-tight text-4xl pad:text-5xl font-bold",
  h2: "leading-tight text-3xl pad:text-4xl font-bold",
  h3: "text-2xl pad:text-3xl font-bold",
  h4: "text-xl pad:text-2xl font-bold",
  h5: "text-lg font-medium pad:text-xl",
  h6: "text-lg font-medium",
};

type H = FC<ObjectHTMLAttributes<HTMLHeadingElement>>;

export const H1: H = ({ className, ...props }) => (
  <h1 className={cn(fontSize.h1, className)} {...props}></h1>
);
export const H2: H = ({ className, ...props }) => (
  <h1 className={cn(fontSize.h2, className)} {...props}></h1>
);
export const H3: H = ({ className, ...props }) => (
  <h1 className={cn(fontSize.h3, className)} {...props}></h1>
);
export const H4: H = ({ className, ...props }) => (
  <h1 className={cn(fontSize.h5, className)} {...props}></h1>
);
export const H5: H = ({ className, ...props }) => (
  <h1 className={cn(fontSize.h5, className)} {...props}></h1>
);
export const H6: H = ({ className, ...props }) => (
  <h1 className={cn(fontSize.h6, className)} {...props}></h1>
);

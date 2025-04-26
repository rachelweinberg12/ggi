import clsx from "clsx";
import React, { JSX } from "react";

export const Col = React.forwardRef(function Col(
  props: JSX.IntrinsicElements["div"],
  ref: React.Ref<HTMLDivElement>,
) {
  const { children, className, ...rest } = props;

  return (
    <div className={clsx(className, "y-gap flex flex-col")} ref={ref} {...rest}>
      {children}
    </div>
  );
});

export const Row = React.forwardRef(function Row(
  props: JSX.IntrinsicElements["div"],
  ref: React.Ref<HTMLDivElement>,
) {
  const { children, className, ...rest } = props;

  return (
    <div className={clsx(className, "x-gap flex")} ref={ref} {...rest}>
      {children}
    </div>
  );
});

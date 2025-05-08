"use client"; // if you're using Next.js App Router

import { useCallback } from "react";
import { createPopup } from "@typeform/embed";
import "@typeform/embed/build/css/popup.css";
import { Popover, PopupButton } from "@typeform/embed-react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

export default function TypeformPopupButton(props: {
  formId: string;
  buttonText: string;
  buttonClassName?: string;
  withArrow?: boolean;
  overrideClass?: boolean;
}) {
  const {
    formId,
    buttonText,
    buttonClassName,
    withArrow = false,
    overrideClass = false,
  } = props;

  return (
    <PopupButton
      id={formId}
      size={66}
      className={clsx(
        !overrideClass &&
          "hover:cursor-pointer hover:underline flex items-center gap-x-1 text-nowrap md:text-lg",
        buttonClassName,
      )}
    >
      {buttonText}
      {withArrow && <ArrowUpRightIcon className="w-4 h-4" />}
    </PopupButton>
  );
}

"use client";

import React, { Dispatch, SetStateAction } from "react";

import {
  Root,
  Title,
  Description,
  Close,
  Viewport,
} from "@radix-ui/react-toast";
import { BiErrorCircle } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

type Props = {
  type:
    | "detectionError"
    | "fileLimitExceeded"
    | "fileSizeExceeded"
    | "userIsAdded";
  isOpen: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  title?: string;
  description?: string | undefined;
};

/**
 * Renders a toast notification with the specified content and appearance based on the provided props.
 * 
 * @param {Object} props - The props for the Toast component.
 * @param {string} props.type - The type of toast notification. Possible values include "userIsAdded", "fileLimitExceeded", "detectionError", and "fileSizeExceeded".
 * @param {boolean} props.isOpen - Indicates whether the toast is currently open or closed.
 * @param {function} props.onOpenChange - A callback function that is called when the open state of the toast changes.
 * @param {string} props.title - The title of the toast notification.
 * @param {string} props.description - The description or message of the toast notification.
 * @returns {JSX.Element} The rendered Toast component.
 */

const Toast = ({ type, isOpen, onOpenChange, title, description }: Props) => {
  return (
    <>
      <Root
        duration={8000}
        open={isOpen}
        onOpenChange={onOpenChange}
        className={`items-center rounded-md ${
          type === "userIsAdded" || type === "fileLimitExceeded"
            ? "flex gap-4 border p-5"
            : "grid-area-toast grid grid-cols-[max-content_auto_max-content] grid-rows-2 gap-x-6 gap-y-2"
        } ${
          type === "userIsAdded" ? "bg-green-500" : "bg-red-500"
        } p-4 text-white shadow-md data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]`}
      >
        {type === "detectionError" ||
          (type === "fileSizeExceeded" && (
            <BiErrorCircle size={32} className="area-error-icon" />
          ))}

        {title !== "" && (
          <Title className="area-title text-sm leading-none">{title}</Title>
        )}

        {description !== "" && (
          <Description
            className={`${
              type === "detectionError"
                ? "area-description font-medium leading-none"
                : "max-w-md text-sm"
            } ${
              type === "userIsAdded" || type === "fileLimitExceeded"
                ? "font-semibold"
                : ""
            }`}
          >
            {description}
          </Description>
        )}

        <Close className="area-close-icon ml-4">
          <AiFillCloseCircle size={24} />
        </Close>
      </Root>
      <Viewport className="fixed bottom-0 right-0 z-[31416] flex max-w-full flex-col gap-3 p-6" />
    </>
  );
};

export default Toast;

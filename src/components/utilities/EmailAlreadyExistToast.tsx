"use client";

import { Close, Description, Root, Viewport } from "@radix-ui/react-toast";
import React, { Dispatch, SetStateAction } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
}

/**
 * Renders a toast notification when an email address already exists in the system.
 * 
 * @param {Object} props - The component props.
 * @param {boolean} props.isError - A flag indicating whether an error has occurred.
 * @param {function} props.setIsError - A function to update the `isError` flag.
 * 
 * @returns {JSX.Element} The rendered toast notification.
 */

const EmailAlreadyExistToast = ({ isError, setIsError }: Props) => {
  return (
    <>
      <Root
        duration={8000}
        open={isError}
        onOpenChange={setIsError}
        className="flex items-center gap-4 rounded-md bg-red-500 p-5 text-white shadow-lg data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
      >
        <Description className="max-w-md text-sm">
          The email address you entered is already associated with an existing
          account.
        </Description>
        <Close>
          <AiFillCloseCircle size={20} />
        </Close>
      </Root>
      <Viewport className="fixed bottom-0 right-0 z-[31416] flex max-w-full flex-col gap-3 p-6" />
    </>
  );
};

export default EmailAlreadyExistToast;

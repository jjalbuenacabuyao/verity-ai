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
  filename: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

/**
 * A component that renders a toast notification for displaying an error message.
 *
 * @param {Object} props - The component props.
 * @param {string} props.filename - The name of the file that caused the error.
 * @param {boolean} props.isOpen - A state variable indicating whether the toast notification is open or closed.
 * @param {function} props.setIsOpen - A state setter function to update the `isOpen` state variable.
 * @returns {JSX.Element} - The rendered component.
 */

const DetectionErrorToast: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  filename,
}: Props) => {
  return (
    <>
      <Root
        open={isOpen}
        onOpenChange={setIsOpen}
        className="grid-area-toast grid grid-cols-[max-content_auto_max-content] grid-rows-2 items-center gap-x-6 gap-y-2 rounded-md bg-red-500 p-4 text-white shadow-md data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
      >
        <BiErrorCircle size={32} className="area-error-icon" />

        <Title className="area-title text-sm leading-none">
          Error occured while processing:
        </Title>

        <Description className="area-description font-medium leading-none">
          {filename}
        </Description>

        <Close className="area-close-icon ml-4">
          <AiFillCloseCircle size={24} />
        </Close>
      </Root>
      <Viewport className="fixed bottom-0 right-0 z-[31416] flex max-w-full flex-col gap-3 p-6" />
    </>
  );
};

export default DetectionErrorToast;

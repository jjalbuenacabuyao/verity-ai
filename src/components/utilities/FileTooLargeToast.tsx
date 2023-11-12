import { Close, Description, Root, Viewport } from "@radix-ui/react-toast";
import React, { Dispatch, SetStateAction } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

/**
 * Renders a toast notification when the file upload is too large.
 * The toast notification includes a message and a close button.
 *
 * @param {object} props - The component props.
 * @param {boolean} props.isOpen - Determines whether the toast notification is open or closed.
 * @param {function} props.setIsOpen - Updates the value of `isOpen`.
 * @returns {JSX.Element} The rendered component.
 */

const FileTooLargeToast = ({ isOpen, setIsOpen }: Props) => {
  return (
    <>
      <Root
        duration={8000}
        open={isOpen}
        onOpenChange={setIsOpen}
        className="flex items-center gap-4 rounded-md bg-red-500 p-5 text-white shadow-lg data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
      >
        <Description className="max-w-md text-sm">
          You can only upload a maximum of{" "}
          <span className="font-semibold">10 mb</span> files.
        </Description>
        <Close>
          <AiFillCloseCircle size={20} />
        </Close>
      </Root>
      <Viewport className="fixed bottom-0 right-0 z-[31416] flex max-w-full flex-col gap-3 p-6" />
    </>
  );
};

export default FileTooLargeToast;

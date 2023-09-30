"use client";

import React, { Dispatch, SetStateAction } from 'react';
import {
  Root,
  Title,
  Close,
  Viewport,
} from "@radix-ui/react-toast";
import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  userAdded: boolean;
  setUserAdded: Dispatch<SetStateAction<boolean>>;
}

/**
 * Renders a toast notification when a user is successfully added.
 * 
 * @param {object} props - The component props.
 * @param {boolean} props.userAdded - Indicates whether a user has been added.
 * @param {function} props.setUserAdded - A state setter function to update the `userAdded` state.
 * 
 * @returns {JSX.Element} The rendered component.
 */

const UserAddedToast = ({ userAdded, setUserAdded }: Props) => {
  return (
    <>
      <Root
        open={userAdded}
        onOpenChange={setUserAdded}
        className='flex items-center gap-4 text-white p-5 border bg-green-500 rounded-md shadow-lg data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut'>
        <Title className='font-semibold'>User added successfully.</Title>
        <Close>
          <AiFillCloseCircle size={20} />
        </Close>
      </Root>
      <Viewport className="fixed bottom-0 right-0 z-[31416] flex max-w-full flex-col gap-3 p-6" />
    </>
  )
}

export default UserAddedToast
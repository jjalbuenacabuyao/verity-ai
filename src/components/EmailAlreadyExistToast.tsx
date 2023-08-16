import { Close, Description, Root, Title, Viewport } from '@radix-ui/react-toast'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

interface Props {
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>
}

const EmailAlreadyExistToast = ({ isError, setIsError }: Props) => {
  return (
    <>
      <Root
        duration={8000}
        open={isError}
        onOpenChange={setIsError}
        className='flex items-center gap-4 text-white p-5 border bg-red-500 rounded-md shadow-lg data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut'>
        <Description className='max-w-md text-sm'>The email address you entered is already associated with an existing account.</Description>
        <Close>
          <AiFillCloseCircle size={20} />
        </Close>
      </Root>
      <Viewport className="fixed bottom-0 right-0 z-[31416] flex max-w-full flex-col gap-3 p-6" />
    </>
  )
}

export default EmailAlreadyExistToast;
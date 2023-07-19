"use client";

import CurrentUserContext from '@/hooks/userContext';
import { CurrentUser } from '@/types';
import React from 'react';

interface Props {
  currentUser: CurrentUser | null;
  children: React.ReactNode;
}

const CurrentUserProvider: React.FC<Props> = ({ currentUser, children }: Props) => {
  return (
    <CurrentUserContext.Provider value={currentUser}>
      { children }
    </CurrentUserContext.Provider>
  )
}

export default CurrentUserProvider
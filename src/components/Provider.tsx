"use client";

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth/core/types';

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  return (
    <SessionProvider>{ children }</SessionProvider>
  )
}

export default Provider
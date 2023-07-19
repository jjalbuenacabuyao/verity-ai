"use client";

import React from "react";
import { Provider } from "@radix-ui/react-toast";

interface Props {
  children: React.ReactNode;
}

const ToastProvider: React.FC<Props> = ({ children }: Props) => {
  return <Provider swipeDirection="right">{children}</Provider>;
};

export default ToastProvider;
